#!/usr/bin/env python3
import os
import sys
from pathlib import Path

def main():
    if len(sys.argv) < 2:
        print("Uso: python scripts/new_lesson.py <slug-do-assunto>")
        sys.exit(1)

    slug = sys.argv[1]
    base_dir = Path(__file__).resolve().parent.parent
    aulas_dir = base_dir / "aulas" / slug
    aulas_dir.mkdir(parents=True, exist_ok=True)

    assets_dir = base_dir / "assets"
    templates = {
        "lesson-plan.template.md": "lesson-plan.md",
        "student-notes.template.md": "student-notes.md",
        "presentation.template.md": "presentation.md",
        "exercises.template.md": "exercises.md",
    }

    for src, dest in templates.items():
        src_path = assets_dir / src
        dest_path = aulas_dir / dest
        if not src_path.exists():
            print(f"Template não encontrado: {src_path}")
            continue
        dest_path.write_text(src_path.read_text(encoding="utf-8"), encoding="utf-8")

    print(f"Estrutura de aula criada em: {aulas_dir}")
    print("Preencha os placeholders {{...}} com o conteúdo gerado pela skill.")

if __name__ == "__main__":
    main()