#!/usr/bin/env bash

# Uso: ./scripts/new_lesson.sh "ponteiros-em-c"
# Cria a pasta aulas/<slug>/ com arquivos .md vazios baseados nos templates.

set -e

if [ -z "$1" ]; then
  echo "Uso: $0 <slug-do-assunto>"
  exit 1
fi

SLUG="$1"
BASE_DIR="$(dirname "$0")/.."
AULAS_DIR="$BASE_DIR/aulas/$SLUG"

mkdir -p "$AULAS_DIR"

cp "$BASE_DIR/assets/lesson-plan.template.md" "$AULAS_DIR/lesson-plan.md"
cp "$BASE_DIR/assets/student-notes.template.md" "$AULAS_DIR/student-notes.md"
cp "$BASE_DIR/assets/presentation.template.md" "$AULAS_DIR/presentation.md"
cp "$BASE_DIR/assets/exercises.template.md" "$AULAS_DIR/exercises.md"

echo "Criada estrutura de aula em: $AULAS_DIR"
echo "Agora preencha os placeholders {{...}} com o conteúdo gerado pela skill."