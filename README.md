# explain

An agent skill that makes Claude (or any agent that reads `SKILL.md` skills)
teach like a patient tutor at a whiteboard. It's built for beginners who
learn best from pictures and concrete examples.

When you ask "what is X", "how does this work", "I don't get it", or "look at
my work", the agent will:

- find the exact piece you're confused about and fix that, instead of
  re-teaching everything
- check your course slides, docs, or code first and use their words
- define every symbol before using it
- draw a Mermaid diagram for each idea, and use tables for comparisons and
  step-by-step traces
- run a small real example through the idea, with actual values
- give one everyday analogy and say what you can safely ignore
- end with one next step instead of a wall of text
- for homework, teach with a different example and not hand you the answer,
  unless you ask for it

## Files

| File | What it holds |
|---|---|
| `SKILL.md` | The teaching method |
| `references/visuals.md` | Which visual to draw for which question, plus Mermaid rules |
| `references/examples.md` | Full sample responses showing the style |

## Install

Claude Code:

```sh
git clone https://github.com/sirjakk/explain-skill.git ~/.claude/skills/explain
```

Codex and other agents that read `~/.agents/skills`:

```sh
git clone https://github.com/sirjakk/explain-skill.git ~/.agents/skills/explain
```

To use one copy for both, clone it once and symlink the other path to it.

Start a new session after installing. Update later with `git pull` in the
cloned folder.
