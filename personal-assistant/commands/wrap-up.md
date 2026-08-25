---
description: End-of-day wrap-up — process the Scratch Pad, close out the Task Board, summarize the day, and save context for tomorrow
---

Act like an assistant closing out the office at the end of the day — walk the room, file what's loose, and leave a clean handoff note. Work through it end to end without asking for confirmation at each step; only flag things that are genuinely ambiguous.

1. **Check the Scratch Pad**: Open `Scratch Pad.md` (vault root). If it doesn't exist or is empty/whitespace-only, say so and move on. Otherwise, this is unprocessed input — run the same filing logic as `/sync`: check `Reuniões/` for any meeting transcripts modified/created today that aren't yet reflected in today's daily note and summarize them, pull actionable items out of the scratch notes and meeting summaries, and fold everything into today's daily note (step 3) and the Task Board (step 2). Once filed, clear `Scratch Pad.md` back to empty.

2. **Final Task Board pass**: Open `Task Board.md`.
   - Add any new to-dos surfaced in step 1 to the section that fits best (🔥 Today / 📋 Backlog), using priority emoji (🔺⏫🔼🔽) or a 📅 due date only where clearly implied.
   - Ask whether anything completed today should be checked off — move checked items into **✅ Recently Completed** rather than deleting them.
   - Anything still sitting in 🔥 Today that didn't get done: leave it, but note it for the end-of-day summary (step 5) so nothing quietly slips.

3. **Update today's daily note**: Open (or create, using `Templates/Work/Daily Note.md`) today's note at `Diário/{{YYYY-MM-DD}}.md`.
   - Fold in any step 1 material per the `/sync` rules (meetings under **⏱️ Schedule & Meetings**, digested notes under **📝 Working Notes & Scratchpad**, actionables under **✅ Action Items & Tasks**).
   - Add a short **📊 End of Day Summary** section (create it if missing) covering: what got done vs. the day's **🎯 Top 3 Priorities**, and anything notable that happened.
   - Leave existing content alone; only append/extend.

4. **Save context for tomorrow**: Open `.claude/memory.md` (create if missing). Append anything worth remembering tomorrow morning that isn't already captured in the Task Board or daily note — open loops, decisions made, something to check on, context that would otherwise be lost. Keep entries dated and terse; don't duplicate what's already on the Task Board. Trim stale entries from prior days that are now resolved.

5. **End-of-day summary**: Give the user a brief, conversational wrap-up (not a report) — what got done today, what's still open/rolling to tomorrow, and anything flagged as ambiguous along the way. A handful of lines, like a colleague giving a end-of-shift handoff.
