# Short answers

Each one is about as long as an answer should be. Longer only when they ask.

---

**"what is a dictionary in python? it seems like it holds everything?"**

> No. A dictionary is one labelled list you make yourself. You look things up
> by their label.
>
> ```python
> ages = {"sam": 19, "lee": 22}
> ages["lee"]   # 22
> ```

---

**"i dont get the order recursion runs in"**

> Each call waits for the call inside it. So calls go down first, then the
> answers come back up.
>
> ```
> fact(3) waits for fact(2)
>   fact(2) waits for fact(1)
>     fact(1) returns 1
>   fact(2) returns 2 * 1 = 2
> fact(3) returns 3 * 2 = 6
> ```

---

**"what is a for loop doing here"** (`for n in [3, 5]: total = total + n`)

> It runs the inside once for each item, with `n` set to that item.
>
> ```python
> total = 0
> # n = 3: total = 3
> # n = 5: total = 8
> ```

---

**"so i just need to add the left and right totals?"**

> Yes. Just keep the order: `left + right`. With strings, `"ab" + "cd"` and
> `"cd" + "ab"` are different.

---

**"what does git commit do? is it uploading?"**

> No. `commit` saves a snapshot on your computer only. `push` is the upload.
>
> ```sh
> git commit -m "fix typo"   # saved locally
> git push                   # now it's on GitHub
> ```

---

**"look at my work"** (homework)

> Close. It works for most inputs. Try these and compare with what you'd get
> by hand:
>
> - an empty list
> - a match at the very end
> - `"aa"` inside `"aaa"`

---

**"step by step please"** (after a short answer)

Still short, just split up:

> 1. `x = 5` makes a box holding 5.
> 2. `p = &x` puts x's address in p.
> 3. `*p = 7` goes to that address and writes 7.
> 4. So x is now 7.
