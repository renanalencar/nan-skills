# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this repository is

`nan-skills` is a **Claude Plugin Marketplace** (declared via `.claude-plugin/marketplace.json` and `.claude-plugin/plugin.json`) that distributes a curated collection of Agent Skills. There is no build, lint, or test tooling — this is a content/prompt repository, not an application. "Development" here means authoring or editing `SKILL.md` files, their supporting assets, and (for `teach-anything`) small scaffolding scripts.

All skill prose and generated content is written in **Brazilian Portuguese**, even though this guidance file and commit messages are in English.

## Repository layout

Every skill lives in its own top-level directory and follows the same standard layout (per the [Agent Skills Best Practices](https://agentskills.io/skill-creation/best-practices)):

- `SKILL.md` — the skill definition and core prompt. Required frontmatter is YAML `---` delimited with at least `name` and `description`. Some skills (e.g. `avaliador-academico`) extend the frontmatter with additional structured fields (`version`, `tags`, `assets`, `self_improvement`, `system_prompt`, `evaluation_focus`, `output_style`, etc.) — there is no single enforced schema, so match the surrounding style of whichever skill you're editing rather than inventing a new one.
- `assets/` — templates and static resources (e.g. `*.template.md` files with `{{placeholder}}` tokens).
- `scripts/` — executable helpers associated with the skill (shell/Python).
- `references/` — finalized/example outputs and supplementary context (e.g. `references/<slug>/` for a completed lesson).

Current skills: `arquiteto-conhecimento`, `avaliador-academico`, `git-oracle`, `learn-anything`, `prompt-optimizer`, `stream-note-taker`, `teach-anything`.

## Key skill behaviors worth knowing

- **`teach-anything`** is the most structurally involved skill: it drives a 5-step lesson-planning workflow (intro/context → structured explanation → conceptual check → guided exercises → applied activity) and then materializes the result into four Markdown files under `teach-anything/aulas/<slug>/`, scaffolded from `teach-anything/assets/*.template.md`. Run from the repo root:

  ```bash
  bash teach-anything/scripts/new_lesson.sh <slug>     # shell version
  python teach-anything/scripts/new_lesson.py <slug>   # python version
  ```

  Both scripts do the same thing: copy the four templates into `teach-anything/aulas/<slug>/` (`lesson-plan.md`, `student-notes.md`, `presentation.md`, `exercises.md`) for `{{...}}` placeholders to be filled in per the SKILL.md workflow. Finalized lessons are then saved under `teach-anything/references/<slug>/`.
- **`git-oracle`** is an output-format-constrained skill: it must respond with *only* a single fenced ```bash``` block containing the exact git command(s), never prose. When editing this SKILL.md, preserve that constraint literally.
- **`avaliador-academico`** encodes a fixed academic-review response structure (emoji-headed sections, a 0–10 score, ABNT NBR 10520/6023 citation checks) directly in its frontmatter `system_prompt`. Its `assets/` directory carries the ABNT standard PDFs/markdown it evaluates against — treat these as reference material, not something to edit casually.
- Several skills (`avaliador-academico`, `git-oracle`) define an explicit internal self-improvement/self-critique loop in prose. This is part of the skill's intended behavior, not stray documentation — don't strip it out when refactoring.

## Conventions to follow when editing or adding skills

- Keep `SKILL.md` frontmatter YAML-valid with at least `name` and `description`; `description` should be specific enough to disambiguate when a skill applies (several existing skills state explicit trigger phrases/use-cases in `description`).
- Write skill prose, personas, and generated artifacts in Brazilian Portuguese, consistent with the rest of the repo.
- New scaffolded/templated content belongs in `assets/` (`*.template.md` with `{{placeholder}}` tokens); one-off finalized examples belong in `references/<slug>/`.
- `AGENTS.md` and `README.MD` both describe the repo structure and are expected to stay in sync with each other and with the actual skill list — update both when adding, removing, or renaming a skill.
