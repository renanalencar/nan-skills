---
name: "teach-anything"
description: "Planejar e conduzir aulas sobre qualquer assunto, seguindo um roteiro didático em 5 passos, gerando arquivos Markdown de suporte e registrando feedback ao final para melhorar a skill a cada iteração."
---

# Objetivo da skill

Quando o usuário pedir ajuda para preparar ou conduzir uma aula sobre um tema específico (ex.: ponteiros em C, structs, HTTP, SOLID, testes), siga este roteiro genérico.

A aula deve:
- Introduzir o tema em um contexto claro.
- Explicar o conceito de forma estruturada e simples.
- Verificar se os alunos entenderam a ideia central.
- Propor exercícios guiados com foco em acurácia.
- Encerrar com uma atividade aplicada e realista.
- Gerar arquivos `.md` organizados para uso em aula e estudo posterior.
- Gerar um pequeno relatório de feedback ao final, para ajustar a skill.

---

## Entradas esperadas

Antes de executar o fluxo, colete:

- **ASSUNTO**: tema da aula (ex.: "ponteiros em C").  
- **PÚBLICO-ALVO**: nível dos alunos (ex.: "iniciantes em C", "estudantes de graduação").  
- **DURAÇÃO ESTIMADA**: tempo de aula (ex.: "50 minutos").  
- **FORMATO**: presencial, remoto, hands-on, etc.  
- Opcional: restrições (ex.: "sem usar alocação dinâmica", "foque em exemplos de backend").

---

## Passo 1 – Introdução com contexto

Sempre começar a aula assim:

1. **Apresentar o tema e seu contexto**
   - Diga em 1–2 frases:
     - o nome do assunto,
     - em que contexto ele aparece,
     - que problema ajuda a resolver.
   - Ex.: "Hoje vamos estudar [ASSUNTO], que é usado em [CENÁRIO] para [OBJETIVO]."

2. **Declarar o objetivo da aula**
   - Especifique o que o aluno deverá ser capaz de fazer ao final:
     - "Ao final da aula, você deve ser capaz de [AÇÃO 1], [AÇÃO 2] e [AÇÃO 3] com [ASSUNTO]."

3. **Criar uma agenda simples de tópicos**
   - Liste 3–5 tópicos principais em ordem lógica (do mais básico ao mais avançado).
   - Use isso como roteiro da explicação.

---

## Passo 2 – Explicação estruturada do conceito

Explique qualquer assunto seguindo esta estrutura:

1. **Definição em uma frase**
   - Formato:
     - "[ASSUNTO] é [O QUE É] usado para [FINALIDADE]."
   - Evite jargão excessivo na primeira frase.

2. **Analogia ou exemplo intuitivo**
   - Crie uma analogia com:
     - algo do cotidiano, ou
     - algo familiar para devs (arquivos, funções, caixas, estradas, etc.).
   - Objetivo: tornar o conceito “visual” e mais fácil de imaginar.

3. **Quebrar em 2–4 componentes**
   - Explique:
     - do que o assunto é composto (partes principais),
     - como funciona (fluxo ou comportamento),
     - quando é usado (situações típicas).
   - Use listas curtas para manter clareza.

4. **Mini-exemplo concreto**
   - Mostre um exemplo pequeno e comentado, adequado ao assunto:
     - código,
     - diagrama simples,
     - caso prático.
   - O exemplo deve ser fácil de percorrer passo a passo em voz alta.

---

## Passo 3 – Verificação conceitual (antes de avançar)

Sempre verificar se os alunos entenderam o núcleo do assunto:

1. **Perguntas conceituais**
   - Gere 2–3 perguntas como:
     - "Explique com suas palavras o que é [ASSUNTO]."
     - "Em qual situação você usaria [ASSUNTO]?"
     - "Qual a diferença entre [ASSUNTO] e [CONCEITO RELACIONADO]?"

2. **Reformulação**
   - Se houver confusão, reformule a explicação:
     - com nova analogia,
     - com outro exemplo simples,
     - reduzindo termos técnicos.

3. **Só avançar depois da clareza mínima**
   - Não seguir para exercícios enquanto o grupo não tiver entendido a ideia central do assunto.

---

## Passo 4 – Exercícios guiados com foco em acurácia

Agora os alunos praticam o assunto de forma assistida:

1. **Criar exercícios de preenchimento, associação ou reprodução**
   - Exemplos de tipos de tarefa:
     - completar código ou raciocínio,
     - associar conceitos (colunas, pares),
     - reproduzir um exemplo que foi mostrado na explicação.
   - O foco aqui é usar o assunto de forma correta, não criativa.

2. **Orientação durante os exercícios**
   - Enquanto os alunos resolvem:
     - acompanhar de perto,
     - apontar erros comuns,
     - corrigir imediatamente pequenos desvios,
     - reforçar o “jeito certo” de aplicar o conceito.

3. **Manter o nível de dificuldade baixo**
   - Nesta etapa, os exercícios devem ser simples o suficiente para o aluno se concentrar em acurácia, não em complexidade.

---

## Passo 5 – Atividade aplicada e realista

Encerrar a aula com uma tarefa que aproxime o assunto da prática:

1. **Propor uma atividade mais aberta**
   - Pedir que o aluno use o assunto em:
     - um mini-projeto,
     - um caso realista,
     - um problema prático.
   - A atividade deve exigir decisão, não só repetição mecânica.

2. **Conectar explicitamente com o contexto inicial**
   - Relembrar:
     - o problema ou cenário mostrado no Passo 1,
     - como o assunto ajuda a lidar com esse problema.
   - Mostrar ao aluno “onde isso se encaixa no mundo de verdade”.

3. **Definir critérios de uma boa solução**
   - Explicar o que você considera:
     - correto,
     - bem aplicado,
     - claro.
   - Usar esses critérios para feedback.

---

## Passo 6 – Geração de arquivos `.md` de suporte

Ao concluir o planejamento da aula, materialize o resultado em quatro arquivos Markdown, seguindo esta convenção:

1. **Roteiro da aula**  
   - Nome: `lesson-plan.md`  
   - Conteúdo:
     - título da aula,  
     - público-alvo, duração, formato,  
     - objetivos de aprendizagem,  
     - agenda de tópicos com tempo estimado,  
     - resumo de cada passo (1 a 5) com bullet points.  
   - Uso: professor se guia por esse arquivo durante a aula.

2. **Anotações para estudo dos alunos**  
   - Nome: `student-notes.md`  
   - Conteúdo:
     - explicação do assunto em linguagem acessível,  
     - definição, analogias, exemplos,  
     - pequenos resumos de cada conceito,  
     - seção de “erros comuns” e “perguntas para autoavaliação”.  
   - Uso: alunos leem depois para revisar o conteúdo sem depender da fala do professor.

3. **Apresentação do assunto**  
   - Nome: `presentation.md`  
   - Conteúdo:
     - estrutura em forma de “slides em markdown”:  
       - seções com títulos e bullets,  
       - trechos de código ou diagramas simplificados,  
       - pontos de destaque para explicação em voz alta.  
   - Uso: pode ser convertido para slides (Marp, Reveal.js etc.) ou usado como roteiro visual.

4. **Exercícios e sugestões de prática**  
   - Nome: `exercises.md`  
   - Conteúdo:
     - lista de exercícios guiados (Passo 4),  
     - lista de atividades aplicadas (Passo 5),  
     - indicação de nível de dificuldade e tempo sugerido,  
     - critérios de avaliação.  
   - Uso: material de prática em sala e tarefas para casa.

### Arquivos auxiliares desta skill

Esta skill pressupõe a existência de arquivos auxiliares na pasta:

- `assets/lesson-plan.template.md`  
- `assets/student-notes.template.md`  
- `assets/presentation.template.md`  
- `assets/exercises.template.md`  

Scripts disponíveis:

- `scripts/new_lesson.sh <slug>` – cria `aulas/<slug>/` com os 4 arquivos `.md` baseados nos templates.  
- `scripts/new_lesson.py <slug>` – versão em Python com a mesma função.

Fluxo recomendado:

1. Escolher um `slug` para o assunto (ex.: `ponteiros-em-c`).  
2. Executar um dos scripts de `scripts/` para criar a pasta `aulas/<slug>/`.  
3. Preencher os arquivos `.md` com o conteúdo gerado seguindo os Passos 1–5.  
4. Após consolidar a aula, salvar uma versão final em `references/<slug>-final.md` para servir de 