#!/usr/bin/env python3
"""Cria a estrutura de uma aula a partir dos templates da skill.

Uso:
    new_lesson.py <slug> [diretório-destino]

Exemplos:
    new_lesson.py ponteiros-em-c
        -> cria ./aulas/ponteiros-em-c/ no diretório atual
    new_lesson.py ponteiros-em-c "/Users/eu/Obsidian Vault/Trabalho"
        -> cria "/Users/eu/Obsidian Vault/Trabalho/aulas/ponteiros-em-c/"

O destino padrão é o DIRETÓRIO DE TRABALHO ATUAL, não a pasta da skill:
a aula nasce onde você está trabalhando (vault, repositório da disciplina).
Os templates continuam sendo lidos de dentro da pasta da skill.

Arquivos já existentes NÃO são sobrescritos: o script avisa e pula.

Compatível com Python 3.9+.
"""

import sys
from pathlib import Path

# origem (em assets/) -> destino (na pasta da aula)
TEMPLATES = [
    ("lesson-plan.template.md", "lesson-plan.md"),
    ("student-notes.template.md", "student-notes.md"),
    ("presentation.template.md", "presentation.md"),
    ("exercises.template.md", "exercises.md"),
    ("presentation.reveal.template.html", "presentation.html"),
]


def uso():
    nome = Path(sys.argv[0]).name if sys.argv else "new_lesson.py"
    print("Uso: {} <slug> [diretório-destino]".format(nome))
    print()
    print("  <slug>              identificador da aula (ex.: ponteiros-em-c)")
    print("  [diretório-destino] onde criar aulas/<slug>/ (padrão: diretório atual)")


def lembrete_vendor(aula_dir):
    return """
Pronto. Próximos passos:

1. Preencha os placeholders {{{{...}}}} com o conteúdo gerado pela skill.
2. Verifique a atualidade dos dados (Passo 2) e registre URL + data de verificação.
3. Use Mermaid em todo diagrama. Nunca arte ASCII.

IMPORTANTE — este script não baixa nada da rede.
Para o presentation.html funcionar, vendorize as dependências localmente
(sem CDN: o Wi-Fi da sala não é confiável):

  cd "{aula}"
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
""".format(aula=aula_dir)


def main():
    argumentos = sys.argv[1:]

    if not argumentos or not argumentos[0].strip():
        uso()
        return 1

    if len(argumentos) > 2:
        print("AVISO: argumentos extras ignorados. "
              "Caminhos com espaço precisam de aspas.")
        uso()

    slug = argumentos[0].strip()

    # Destino: segundo argumento ou, por padrão, o diretório de trabalho atual.
    if len(argumentos) >= 2 and argumentos[1].strip():
        dest_base = Path(argumentos[1]).expanduser()
    else:
        dest_base = Path.cwd()

    # Pasta da skill, resolvida a partir da localização deste script.
    skill_dir = Path(__file__).resolve().parent.parent
    assets_dir = skill_dir / "assets"

    if not assets_dir.is_dir():
        print("ERRO: pasta de templates não encontrada: {}".format(assets_dir))
        return 1

    if not dest_base.is_dir():
        print("ERRO: diretório de destino não existe: {}".format(dest_base))
        return 1

    aula_dir = dest_base / "aulas" / slug
    aula_dir.mkdir(parents=True, exist_ok=True)

    print("Criando aula em: {}".format(aula_dir))

    for origem_nome, destino_nome in TEMPLATES:
        origem = assets_dir / origem_nome
        destino = aula_dir / destino_nome

        if not origem.is_file():
            print("  AVISO: template não encontrado, pulando: {}".format(origem))
            continue

        if destino.exists():
            print("  AVISO: já existe, mantido como está: {}".format(destino))
            continue

        destino.write_text(origem.read_text(encoding="utf-8"), encoding="utf-8")
        print("  criado: {}".format(destino))

    print(lembrete_vendor(aula_dir))
    return 0


if __name__ == "__main__":
    sys.exit(main())
