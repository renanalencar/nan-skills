# Plano de Aula: Ponteiros em C

- Público-alvo: iniciantes em programação em C (já conhecem variáveis, tipos básicos e `printf`)
- Duração: 50 minutos
- Formato: presencial ou remoto, com demonstrações em código e exercícios guiados

## Objetivos de aprendizagem

Ao final desta aula, o aluno deve ser capaz de:
- Explicar, em suas próprias palavras, o que é um ponteiro em C.
- Declarar ponteiros para tipos básicos (`int *p`) e usar `&` e `*` corretamente.
- Escrever e entender um exemplo simples de ponteiro para inteiro que altera o valor de uma variável.
- Compreender a relação entre ponteiros e arrays em C.
- Implementar uma função que altera um valor recebendo um ponteiro como parâmetro.

## Por que se importar com ponteiros?

Você deve se importar com o uso de ponteiros pois a linguagem de programação C lhe permite gerenciar memória de forma mais manual; desta forma você precisa trabalhar de forma eficiente e eficaz com a alocação de memória.

## Agenda da aula

1. Introdução e contexto (5 min)  
   - O que são ponteiros em C.  
   - Por que ponteiros existem em uma linguagem de baixo nível.  
   - Conexão com alocação de memória, eficiência e controle.

2. Conceitos básicos de ponteiros (10 min)  
   - Declaração de ponteiros (`int *p;`).  
   - Operador de endereço `&`.  
   - Operador de desreferência `*`.

3. Exemplo principal: ponteiro para inteiro (15 min)  
   - Código simples que mostra:
     - uma variável inteira,  
     - um ponteiro apontando para ela,  
     - leitura do valor via ponteiro,  
     - alteração do valor via ponteiro.  
   - Discussão linha a linha.

4. Ponteiros e arrays (10 min)  
   - Mostrar que um array pode ser manipulado via ponteiro.  
   - Acessar elementos com aritmética de ponteiros (`p + i`).

5. Funções com ponteiros (10 min)  
   - Implementar uma função `dobrar(int *valor)`.  
   - Chamar a função passando o endereço de uma variável.  
   - Ver que o valor é alterado “fora” da função.

6. Atividade aplicada (10–15 min)
	- Atividade: ajustar notas de alunos usando ponteiros e arrays.
	- Os alunos implementam a função `ajustar_notas` e testam no `main`.
	- O professor circula para:
	  - verificar uso correto de `int *notas`,
	  - reforçar que o array é acessado por endereço,
	  - corrigir confusões entre “endereço” e “valor”.

## Notas para o professor

- Pontos-chave a enfatizar:
  - Ponteiro guarda **endereços**, não valores.
  - `&x` obtém o endereço de `x`; `*p` acessa o valor armazenado no endereço guardado em `p`.
  - A ideia de controle manual da memória como força e responsabilidade da linguagem C.

- Erros comuns esperados:
  - Esquecer o `&` ao atribuir um ponteiro (`p = x;` em vez de `p = &x;`).  
  - Confundir `p` com `*p` na hora de imprimir ou atribuir.  
  - Medo inicial de “estragar a memória” — normal e faz parte do aprendizado.