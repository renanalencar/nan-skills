# nan-skills

Repository of OpenCode agent skills (Portuguese-language educational focus).

This repository contains custom agent skills designed to assist in various workflows, particularly focused on creating educational content, learning, and automating processes.

## Structure and Available Skills

The repository contains several custom agent skills designed for various workflows. They are exposed as independent plugins via the `.claude-plugin/marketplace.json` marketplace configuration:

- `arquiteto-conhecimento/` — Explains complex concepts simply and friendlily.
- `git-oracle/` — Provides precise Git commands without extra text.
- `learn-anything/` — A universal learning mentor for adaptive teaching.
- `prompt-optimizer/` — Lyra, an AI prompt optimization specialist.
- `stream-note-taker/` — Creates detailed, concise, and structured notes from texts.
- `teach-anything/` — The main educational content creation skill.
  - `SKILL.md` — skill definition and lesson workflow (5-step plan)
  - `assets/` — markdown templates (`*.template.md`) used by the scaffolding scripts
  - `scripts/` — `new_lesson.sh` and `new_lesson.py` that create `teach-anything/aulas/<slug>/` from templates
  - `references/` — finalized lesson examples (e.g., `ponteiros-em-c/`)

## Scaffolding a new lesson (teach-anything)

Run from the repo root:

```bash
bash teach-anything/scripts/new_lesson.sh <slug>     # shell
python teach-anything/scripts/new_lesson.py <slug>   # python
```

This creates `teach-anything/aulas/<slug>/` with `lesson-plan.md`, `student-notes.md`, `presentation.md`, `exercises.md` — fill the `{{...}}` placeholders using the 5-step flow in `SKILL.md`.

## Conventions

- Skill frontmatter in `SKILL.md` uses YAML `---` delimiters with `name` and `description` fields.
- All lesson content and skill prose is in **Brazilian Portuguese**.
- Finalized lessons go under `references/<slug>/`.
