# nan-skills

Repository of Agent Skills and Claude Plugin Marketplace with a Portuguese-language educational focus.

## Structure

The repository is structured following the [Agent Skills Best Practices](https://agentskills.io/skill-creation/best-practices). Every skill directory follows a standard layout:
- `SKILL.md` — The skill definition and core prompt (uses YAML frontmatter).
- `assets/` — Templates, static files, and resources.
- `scripts/` — Executable code (e.g., shell/python scripts) associated with the skill.
- `references/` — Supplementary context, finalized outputs, and examples.

### Available Skills

- `arquiteto-conhecimento/` — O Construtor do Conhecimento, focado em ensinar conceitos complexos de forma simples e amigável.
- `avaliador-academico/` — Avalia textos acadêmicos com rigor formativo, foco em clareza, coesão, rigor científico e normatização ABNT.
- `git-oracle/` — Especialista em Git que responde apenas com os comandos exatos necessários.
- `learn-anything/` — O Mentor de Aprendizagem Universal, que ensina de forma adaptativa, didática e orientada à retenção.
- `prompt-optimizer/` — Lyra, especialista em otimização de prompts para IAs.
- `stream-note-taker/` — Especialista em criar notas estruturadas e resumidas sobre qualquer texto.
- `teach-anything/` — Skill focada na criação estruturada de aulas e materiais didáticos (plano de 5 passos).
  - Use `assets/` to store markdown templates (`*.template.md`).
  - Use `scripts/` to run `new_lesson.sh` and `new_lesson.py` to scaffold lessons under `aulas/<slug>/`.

## Scaffolding a new lesson (teach-anything)

Run from the repo root:

```bash
bash teach-anything/scripts/new_lesson.sh <slug>     # shell
python teach-anything/scripts/new_lesson.py <slug>   # python
```

Creates `teach-anything/aulas/<slug>/` with `lesson-plan.md`, `student-notes.md`, `presentation.md`, `exercises.md` — fill the `{{...}}` placeholders using the 5-step flow in `SKILL.md`.

## Conventions

- The repository itself is distributed as a **Claude Plugin Marketplace** via the `.claude-plugin/marketplace.json` file, which exposes each skill as an independent plugin.
- Skill frontmatter in `SKILL.md` uses YAML `---` delimiters with at least `name` and `description` fields.
- All lesson content and skill prose is in **Brazilian Portuguese**.
- Finalized examples or references go under `references/<slug>/` in their respective skill folder.
