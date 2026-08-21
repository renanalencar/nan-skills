#!/usr/bin/env bash

# Cria a estrutura de uma aula a partir dos templates da skill.
#
# Uso:
#   new_lesson.sh <slug> [diretório-destino]
#
# Exemplos:
#   new_lesson.sh ponteiros-em-c
#       -> cria ./aulas/ponteiros-em-c/ no diretório atual
#   new_lesson.sh ponteiros-em-c "/Users/eu/Obsidian Vault/Trabalho"
#       -> cria "/Users/eu/Obsidian Vault/Trabalho/aulas/ponteiros-em-c/"
#
# O destino padrão é o DIRETÓRIO DE TRABALHO ATUAL, não a pasta da skill:
# a aula nasce onde você está trabalhando (vault, repositório da disciplina).
# Os templates continuam sendo lidos de dentro da pasta da skill.
#
# Arquivos já existentes NÃO são sobrescritos: o script avisa e pula.

set -e

uso() {
  echo "Uso: $(basename "$0") <slug> [diretório-destino]"
  echo
  echo "  <slug>              identificador da aula (ex.: ponteiros-em-c)"
  echo "  [diretório-destino] onde criar aulas/<slug>/ (padrão: diretório atual)"
}

if [ "$#" -lt 1 ] || [ -z "$1" ]; then
  uso
  exit 1
fi

if [ "$#" -gt 2 ]; then
  echo "AVISO: argumentos extras ignorados. Caminhos com espaço precisam de aspas."
  uso
fi

SLUG="$1"
DEST_BASE="${2:-$PWD}"

# Pasta da skill, resolvida a partir da localização deste script.
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
SKILL_DIR="$(cd "$SCRIPT_DIR/.." && pwd)"
ASSETS_DIR="$SKILL_DIR/assets"

if [ ! -d "$ASSETS_DIR" ]; then
  echo "ERRO: pasta de templates não encontrada: $ASSETS_DIR"
  exit 1
fi

if [ ! -d "$DEST_BASE" ]; then
  echo "ERRO: diretório de destino não existe: $DEST_BASE"
  exit 1
fi

AULA_DIR="$DEST_BASE/aulas/$SLUG"
mkdir -p "$AULA_DIR"

copiar_template() {
  origem="$ASSETS_DIR/$1"
  destino="$AULA_DIR/$2"

  if [ ! -f "$origem" ]; then
    echo "  AVISO: template não encontrado, pulando: $origem"
    return 0
  fi

  if [ -e "$destino" ]; then
    echo "  AVISO: já existe, mantido como está: $destino"
    return 0
  fi

  cp "$origem" "$destino"
  echo "  criado: $destino"
}

echo "Criando aula em: $AULA_DIR"

copiar_template "lesson-plan.template.md"          "lesson-plan.md"
copiar_template "student-notes.template.md"        "student-notes.md"
copiar_template "presentation.template.md"         "presentation.md"
copiar_template "exercises.template.md"            "exercises.md"
copiar_template "presentation.reveal.template.html" "presentation.html"

cat <<EOF

Pronto. Próximos passos:

1. Preencha os placeholders {{...}} com o conteúdo gerado pela skill.
2. Verifique a atualidade dos dados (Passo 2) e registre URL + data de verificação.
3. Use Mermaid em todo diagrama. Nunca arte ASCII.

IMPORTANTE — este script não baixa nada da rede.
Para o presentation.html funcionar, vendorize as dependências localmente
(sem CDN: o Wi-Fi da sala não é confiável):

  cd "$AULA_DIR"
  mkdir -p vendor/reveal vendor/mermaid
  npm pack reveal.js && tar -xzf reveal.js-*.tgz
  npm pack mermaid   && tar -xzf mermaid-*.tgz

Do pacote reveal.js (package/), copie para vendor/reveal/ mantendo a estrutura:
  dist/reveal.js  dist/reveal.css  dist/reset.css  dist/theme/white.css
  dist/plugin/highlight.js  dist/plugin/highlight/monokai.css
  dist/plugin/notes.js  dist/plugin/search.js  dist/plugin/zoom.js
Do pacote mermaid, copie dist/mermaid.min.js para vendor/mermaid/.

Use sempre os arquivos .js (UMD), nunca os .mjs (ESM): a apresentação abre via
file:// e módulos ES são bloqueados por CORS nesse protocolo.
EOF
