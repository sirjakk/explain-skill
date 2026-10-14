# explain

An agent skill for people who hate reading. The agent answers "what is X" or
"I don't get X" in one or two simple sentences plus a tiny example, and stops.
You ask for more if you want it.

Example. Asked "what's the `*` and `&` in `int *p = &x;`?":

> `&x` means "where `x` lives." `p` holds that address, and `*p` means "go
> there," so `*p` is `x` but `p` is not.
>
> ```c
> int x = 5;
> int *p = &x;  // p = where x lives
> *p = 7;       // go there, put 7
> // now x is 7
> ```

It also uses small diagrams when they're faster than words. For homework, it
teaches with a different example instead of giving the answer.

For a study guide or exam prep, it builds an HTML teaching page from
`references/teaching-page-template.html`. Each lesson has the course's own
words, code followed by a diagram, a worked example, a trap to avoid, and new
practice questions with hidden answers.

## Install

Claude Code:

```sh
git clone https://github.com/sirjakk/explain-skill.git ~/.claude/skills/explain
```

Codex and other agents that read `~/.agents/skills`:

```sh
git clone https://github.com/sirjakk/explain-skill.git ~/.agents/skills/explain
```

Start a new session after installing. Update with `git pull` in that folder.
