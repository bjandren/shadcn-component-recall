# shadcn Component Recall

A small spaced repetition trainer for learning shadcn/ui component names.

The app shows a rendered component specimen, asks you to type what it is called, then schedules the next review automatically. Progress is stored locally in the browser.

After each answer, the feedback shows a short usage memory so the component name has something practical to stick to. Missed or revealed cards loop back within about five turns.

Learning modes:

- Clue mode: shows a direct hint for the current component.
- Definitions: shows how the component is used while blanking out the component name.
- Memory: shows a short mnemonic rule to make the component name easier to remember.

The review screen also shows a boxed progress strip for the current run: green for correct answers and red for misses.

Review modes:

- Due: cards whose scheduled review time has arrived.
- Weak: cards with recent lapses or low recall accuracy.
- All: the full deck, useful for studying ahead.

The Deck tab shows component names and progress. Use its Practice action to jump straight to any card.

## Scripts

```sh
pnpm install
pnpm dev
pnpm lint
pnpm build
```

## Deck

The deck covers 59 shadcn/ui components across overlays, forms, navigation, feedback, layout, and data display.
