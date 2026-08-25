---
description: Process the Scratch Pad and new meeting transcripts, file to-dos and a daily summary, then clear the pad
---

Act like an assistant who's just been handed a pile of loose notes and told "file this properly." Work through it end to end without asking for confirmation at each step — only flag things that are genuinely ambiguous (e.g. a note that could be a to-do or just a musing).

1. **Read the Scratch Pad**: Open `Scratch Pad.md` (vault root). If it doesn't exist, create it empty and skip to step 2. If it exists but is empty/whitespace-only, say so and skip to step 2. Otherwise, read through every note/fragment in it — these are raw, unsorted, and may mix to-dos, meeting notes, ideas, and reminders together.

2. **Check for new meeting transcripts**: Look in `Reuniões/` (this is the "Meetings" folder). For each file modified or created today, check whether it's already referenced in today's daily note (see step 4) — if so, skip it as already processed. For each new one, write a short summary (key discussion points, decisions made, action items raised).

3. **Update the Task Board**: From both the scratch pad notes and any new meeting summaries, pull out anything that reads as an actionable to-do. Add each as a new checkbox item to `Task Board.md` in the section that fits best (🔥 Today for anything urgent or due today, 📋 Backlog otherwise) — don't duplicate a to-do that's already on the board in substance. Use priority emoji (🔺⏫🔼🔽) or a 📅 due date only if the note clearly implies one; don't invent priority/dates that weren't there.

4. **Update today's daily note**: Open (or create, using the `Templates/Work/Daily Note.md` structure) today's note at `Diário/{{YYYY-MM-DD}}.md`.
   - Add any meeting summaries from step 2 under **⏱️ Schedule & Meetings**.
   - Fold the digested (not raw-dumped) scratch pad notes into **📝 Working Notes & Scratchpad** — group related fragments, drop pure noise, keep it readable.
   - Add anything actionable under **✅ Action Items & Tasks**.
   - Leave existing content in the note alone; only append/extend.

5. **Clear the Scratch Pad**: Once everything above is filed, wipe the contents of `Scratch Pad.md` back to empty so it's ready for the next round of capture. Don't clear it if you skipped step 1 because it was already empty.

Finish with a brief summary (a few lines, not a report) of what got filed where — new to-dos added, meetings summarized, daily note updated — so the user knows their notes landed somewhere real.
