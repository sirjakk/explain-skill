# explain

An agent skill for people who hate reading. The agent answers "what is X" or
"I don't get X" in one or two simple sentences plus a tiny example, and stops.
You ask for more if you want it.

> **A personal note.** I made this for myself. I'm a visual learner, and long
> walls of text lose me. It's tuned to how I learn: short sentences, real
> examples, and lots of diagrams. If it helps you too, please use it. If you
> have ideas to make it better, open an
> [issue](https://github.com/sirjakk/explain-skill/issues) or a pull request.
> I'd love to hear them.

## Install

```sh
npx explain-skill install
```

It asks where to put the skill: Claude Code, Codex and other agents that read
`~/.agents/skills`, or both. Start a new agent session afterwards.

| Command | What it does |
| --- | --- |
| `npx explain-skill install` | Install the skill. Add `--claude`, `--agents`, or `--all` to skip the question. |
| `npx explain-skill update` | Replace the installed copy with the latest version. |
| `npx explain-skill status` | Show where it is installed. |
| `npx explain-skill uninstall` | Remove a copy this tool installed. |

The installer never touches a folder it didn't create. It skips git clones and
links, and only replaces other folders if you add `--force`.

Prefer git? Clone it straight into the skills folder, and update with
`git pull`:

```sh
git clone https://github.com/sirjakk/explain-skill.git ~/.claude/skills/explain
git clone https://github.com/sirjakk/explain-skill.git ~/.agents/skills/explain
```

## What it does

Asked "what's the `*` and `&` in `int *p = &x;`?":

> `&x` means "where `x` lives." `p` holds that address, and `*p` means "go
> there," so `*p` is `x` but `p` is not.
>
> ```c
> int x = 5;
> int *p = &x;  // p = where x lives
> *p = 7;       // go there, put 7
> // now x is 7
> ```

- It draws small diagrams when they're faster than words.
- For homework, it teaches with a different example instead of giving the
  answer.
- When you say "look at my work", it tells you how close you are and gives you
  inputs to test. It doesn't hand over the fix.

## Study pages

For a study guide or exam prep, it teaches in chat first, then asks if you also
want an interactive HTML page. It only builds one if you say yes.

Each lesson on the page has:

- the one idea, in one sentence
- the source's own words, quoted with the page number
- code followed by a diagram
- a worked example with real values
- a trap to avoid
- new practice questions, each with a hint and a hidden answer

Questions that ask you to write code get a code box that colors as you type,
indents for you, closes brackets, and checks them live. It saves your answer in
the browser. It supports Python, JavaScript, TypeScript, Java, Kotlin, C#, C,
C++, Go, Rust, Swift, PHP, Ruby, Elixir, Lua, Haskell, SQL, Bash, and Erlang.

The page is a single HTML file that opens in any browser. The design lives in
`references/teaching-page-template.html`, and the rules in
`references/teaching-page.md`.

## License

MIT. Use it, change it, share it.
