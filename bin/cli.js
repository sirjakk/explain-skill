#!/usr/bin/env node
// explain-skill installer: copies the skill into the folders AI agents read skills from.
'use strict';

const fs = require('fs');
const os = require('os');
const path = require('path');
const readline = require('readline');

const PKG_ROOT = path.join(__dirname, '..');
const VERSION = require(path.join(PKG_ROOT, 'package.json')).version;
const SKILL_FILES = ['SKILL.md', 'references'];
const MARKER = '.installed-by-explain-skill';

const TARGETS = {
  claude: { label: 'Claude Code', dir: path.join(os.homedir(), '.claude', 'skills', 'explain') },
  agents: { label: 'Codex and other agents (~/.agents)', dir: path.join(os.homedir(), '.agents', 'skills', 'explain') },
};

const HELP = `explain-skill ${VERSION}

Usage:
  npx explain-skill install     Install the skill (asks which agents)
  npx explain-skill update      Same as install, with the latest files
  npx explain-skill uninstall   Remove a copy this tool installed
  npx explain-skill status      Show where it is installed

Options:
  --claude    Only Claude Code (~/.claude/skills/explain)
  --agents    Only Codex and other agents (~/.agents/skills/explain)
  --all       Both
  --yes, -y   Don't ask questions
  --force     Replace a folder this tool didn't create
`;

function say(msg) { process.stdout.write(msg + '\n'); }

function ask(question) {
  const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
  return new Promise((resolve) => rl.question(question, (a) => { rl.close(); resolve(a.trim().toLowerCase()); }));
}

// What is already at a target folder?
function inspect(dir) {
  let st;
  try { st = fs.lstatSync(dir); } catch (e) { return 'missing'; }
  if (st.isSymbolicLink()) return 'symlink';
  if (!st.isDirectory()) return 'other';
  if (fs.existsSync(path.join(dir, '.git'))) return 'git';
  if (fs.existsSync(path.join(dir, MARKER))) return 'ours';
  return 'other';
}

function copyInto(dir) {
  fs.mkdirSync(dir, { recursive: true });
  for (const name of SKILL_FILES) {
    const dest = path.join(dir, name);
    fs.rmSync(dest, { recursive: true, force: true });
    fs.cpSync(path.join(PKG_ROOT, name), dest, { recursive: true });
  }
  fs.writeFileSync(path.join(dir, MARKER), `explain-skill ${VERSION}\n`);
}

async function pickTargets(flags) {
  if (flags.has('--all')) return ['claude', 'agents'];
  const picked = ['claude', 'agents'].filter((k) => flags.has('--' + k));
  if (picked.length) return picked;
  if (flags.has('--yes') || flags.has('-y') || !process.stdin.isTTY) return ['claude', 'agents'];
  say('Where should the skill go?');
  say('  1) Claude Code');
  say('  2) Codex and other agents that read ~/.agents/skills');
  say('  3) Both');
  const a = await ask('Choose 1, 2, or 3 [3]: ');
  if (a === '1') return ['claude'];
  if (a === '2') return ['agents'];
  return ['claude', 'agents'];
}

async function install(flags, verb) {
  const keys = await pickTargets(flags);
  let changed = 0;
  for (const key of keys) {
    const { label, dir } = TARGETS[key];
    const kind = inspect(dir);
    if (kind === 'git') { say(`- ${label}: ${dir} is a git clone. Run "git pull" there instead. Skipped.`); continue; }
    if (kind === 'symlink') { say(`- ${label}: ${dir} is a link to another copy. Skipped.`); continue; }
    if (kind === 'other' && !flags.has('--force')) {
      say(`- ${label}: ${dir} already exists and wasn't made by this tool. Skipped. Use --force to replace it.`);
      continue;
    }
    copyInto(dir);
    changed++;
    say(`- ${label}: ${verb === 'update' && kind === 'ours' ? 'updated' : 'installed'} in ${dir}`);
  }
  if (changed) say('\nDone. Start a new agent session so it picks up the skill.');
}

function uninstall(flags) {
  const keys = flags.has('--claude') || flags.has('--agents')
    ? ['claude', 'agents'].filter((k) => flags.has('--' + k))
    : ['claude', 'agents'];
  for (const key of keys) {
    const { label, dir } = TARGETS[key];
    const kind = inspect(dir);
    if (kind === 'ours') { fs.rmSync(dir, { recursive: true, force: true }); say(`- ${label}: removed ${dir}`); }
    else if (kind === 'missing') say(`- ${label}: not installed`);
    else say(`- ${label}: ${dir} wasn't installed by this tool, so it was left alone.`);
  }
}

function status() {
  const words = { missing: 'not installed', ours: 'installed by this tool', git: 'git clone', symlink: 'link to another copy', other: 'some other folder' };
  for (const { label, dir } of Object.values(TARGETS)) {
    const kind = inspect(dir);
    let ver = '';
    if (kind === 'ours') ver = ' (' + fs.readFileSync(path.join(dir, MARKER), 'utf8').trim() + ')';
    say(`- ${label}: ${words[kind]}${ver}\n    ${dir}`);
  }
}

async function main() {
  const args = process.argv.slice(2);
  const cmd = args.find((a) => !a.startsWith('-')) || 'help';
  const flags = new Set(args.filter((a) => a.startsWith('-')));
  if (cmd === 'install' || cmd === 'update') return install(flags, cmd);
  if (cmd === 'uninstall' || cmd === 'remove') return uninstall(flags);
  if (cmd === 'status') return status();
  if (cmd === 'version' || flags.has('--version') || flags.has('-v')) return say(VERSION);
  say(HELP);
}

main().catch((err) => { process.stderr.write('explain-skill: ' + err.message + '\n'); process.exit(1); });
