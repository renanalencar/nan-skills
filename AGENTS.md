# nan-skills

Repository of OpenCode agent skills (Portuguese-language educational focus).

## Structure

- `arquiteto-conhecimento/` — O Construtor do Conhecimento, focado em ensinar conceitos complexos de forma simples e amigável.
- `git-oracle/` — Especialista em Git que responde apenas com os comandos exatos necessários.
- `learn-anything/` — O Mentor de Aprendizagem Universal, que ensina de forma adaptativa, didática e orientada à retenção.
- `prompt-optimizer/` — Lyra, especialista em otimização de prompts para IAs.
- `stream-note-taker/` — Especialista em criar notas estruturadas e resumidas sobre qualquer texto.
- `teach-anything/` — Skill focada na criação estruturada de aulas e materiais didáticos (plano de 5 passos).
  - `SKILL.md` — skill definition and lesson workflow (5-step plan)
  - `assets/` — 4 markdown templates (`*.template.md`) used by the scaffolding scripts
  - `scripts/` — `new_lesson.sh` and `new_lesson.py` that create `teach-anything/aulas/<slug>/` from templates
  - `references/` — finalized lesson examples (e.g. `ponteiros-em-c/`)

## Scaffolding a new lesson

Run from the repo root:

```bash
bash teach-anything/scripts/new_lesson.sh <slug>     # shell
python teach-anything/scripts/new_lesson.py <slug>   # python
```

Creates `teach-anything/aulas/<slug>/` with `lesson-plan.md`, `student-notes.md`, `presentation.md`, `exercises.md` — fill the `{{...}}` placeholders using the 5-step flow in `SKILL.md`.

## Conventions

- Skill frontmatter in `SKILL.md` uses YAML `---` delimiters with `name` and `description` fields.
- All lesson content and skill prose is in **Brazilian Portuguese**.
- Finalized lessons go under `references/<slug>/`.
