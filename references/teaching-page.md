# Teaching pages and study guides

Use this when they ask for a study guide, exam prep, a teaching page, a cheat
sheet, or "teach me everything about X". The short-answer rules still apply to
every sentence on the page. The page is long because it has many small pieces,
never because any one piece is long.

Start from [teaching-page-template.html](teaching-page-template.html). It has
the colors, the boxes, the question cards, and the scripts. Don't redesign it.
They have said they love this look.

## Before writing

1. **Read all the course material first**: slides, worksheets and their
   solutions, old exams with answer keys, and released homework solutions.
2. **Find what the exam asks.** List the question types that repeat across old
   exams, with how many points each got. Put this table at the top of the page.
3. **Check the scope.** Old exams may cover topics this term skipped. Say what to
   skip. Flag new topics that old exams never tested.
4. **Check the format.** Paper or laptop? Calculator or not? If it's paper, every
   number question must work out by hand.

## Page layout

1. A hero with tiles for the exam date, length, format, and scope.
2. "What the exam asks": the question-type table from step 2.
3. **A plan split by the days they have.** Give each lesson a time and a tag:
   "Go deep" for lessons exam questions are built on, "Know the idea" for the
   rest. Add an "only one evening left?" lane that lists the must-do lessons in
   order.
4. The lessons, grouped by day, with one colored banner per day.
5. A timed practice exam with new problems, in the same shape as the old ones.
6. A one-page review: rules in four colored boxes, a "ten mistakes" list, and a
   short question-reading routine.

Keep a sticky side menu with a progress bar. Every lesson ends with an "I can
do this" checkbox saved in localStorage.

## Lesson anatomy (keep this order)

1. **Number, title, tags**: Go deep or Know the idea, minutes, and the source
   slides.
2. **One-line idea** in big text. This is the whole lesson in one sentence.
3. **Slide words box**: the slide's own phrasing in quotes, with the deck and
   page, such as "Slides 08, p.10". Use the course's terms everywhere after that.
4. **Code, then a diagram.** Show the real code from the slides, then a Mermaid
   picture of what it does.
5. **A worked example with real values**, in a green box. Use a trace table
   for anything that runs step by step.
6. **Differences side by side.** Two columns for any pair they could mix up,
   such as body vs tail recursion or foldl vs foldr.
7. **A trap box** in red for the mistake people really make.
8. **Questions**, then the checkbox.

## Diagrams

- Aim for at least one diagram per idea. They are a visual learner, and more
  pictures is better here than in chat answers.
- Use real Mermaid with quoted labels. No ASCII art.
- Don't put wide trees inside two-column layouts. They shrink until they can't
  be read. Use boxes, not tiny circles.
- For anything that moves over time, like values going up and down a tree,
  build a **stepper** with Back and Next buttons, a sentence per step, blue for
  up and orange for down. The template has one for reduce and scan trees.
- Inline Mermaid for offline use. See the note at the top of the template.

## Questions

- **New problems only.** Use homework and old exams to judge difficulty, never to
  copy. Change the problem, not just the numbers.
- Mix the kinds: warm-up, exam style, and medium or hard. Use multiple choice
  buttons for quick concept checks.
- **Every question that asks them to write or fix code gets a code editor**
  (`<div class="editor" data-id="...">` in the template). Put it under the
  question and above the hint. Give starter code: the function head to fill in,
  or the buggy code to fix. The editor colors the code as they type, shows line
  numbers, indents, closes brackets, checks brackets and `end`s live, saves to
  localStorage, and has a "Compare with answer" button. Questions answered on
  paper, like traces, numbers, or trees, don't get one.
- Every question has a hidden answer. Harder ones also get a hint first.
- Some questions should be "fill it in on paper, then press Next to check".
- Answers show the working, a check against the example, and one line on why.

## Before handing it over

- **Run every code example** and check each answer against the real output.
- **Do every calculation twice.**
- Render the page, look at screenshots, and fix cramped or broken diagrams.
- Unslop pass: no em dashes, no curly quotes, sentence-case headings, short
  sentences, high-school words.
- Keep the old version as a backup if you are replacing one.
