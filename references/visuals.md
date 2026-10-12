# Pictures

Only draw one if it's faster to read than the sentence it replaces.

## Keep it tiny

- About five boxes. Two or three words per box.
- Real Mermaid, not ASCII art made of `->` and `[]`.
- Put labels in double quotes so symbols don't break it: `P["p holds address"]`.
- Use `<br/>` for a second line. Use single quotes inside labels.
- `flowchart LR` for "this goes to that." `flowchart TB` for trees.

## Good uses

Something pointing at something:

```mermaid
flowchart LR
    P["p: address of x"] --> X["x: 5"]
```

A tree:

```mermaid
flowchart TB
    R["root"] --> A["left"]
    R --> B["right"]
```

Data moving between places:

```mermaid
flowchart LR
    W1["worker 1: 3"] --> S["sum: 7"]
    W2["worker 2: 4"] --> S
```

## Order in time

For "who runs first," a numbered list is usually easier than a diagram. Use a
sequence diagram only for messages between several processes, and keep it to a
few arrows.

```mermaid
sequenceDiagram
    A->>B: sends 3
    B-->>A: replies 7
```
