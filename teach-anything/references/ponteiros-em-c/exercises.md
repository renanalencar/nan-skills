# Exercícios Guiados: Ponteiros em C

## Parte 1 – Perguntas conceituais (metáfora papel/apartamento)

Responda em frases curtas, usando a metáfora da memória como prédio de apartamentos:

1. O que é uma variável normal em C na metáfora do prédio de apartamentos?  
   - Explique quem ela é e onde está.

2. O que é um ponteiro em C nessa metáfora?  
   - Explique o papel do “papel com número de apartamento”.

3. Qual a diferença entre `p` e `*p` usando a metáfora papel/apartamento?  
   - Fale o que cada um representa.

4. Quando escrevemos `p = &x;`, o que está acontecendo na história do prédio?  
   - Quem é `x`, o que é `&x`, e o que passa a estar escrito em `p`.

5. Quando fazemos `*p = 20;`, o que exatamente acontece com o apartamento de `x`?  
   - Use a metáfora para descrever a ação.

## Parte 2 – Metáfora prática em código (`&` e `*`)

Agora vamos ligar a metáfora ao código. Complete os trechos abaixo:

### Exercício 1 – Conectar variável e ponteiro

```c
#include <stdio.h>

int main() {
    int x = 10;
    int *p;

    // TODO: faça p guardar o endereço de x
    // TODO: imprima o valor de x usando o ponteiro

    return 0;
}
```

Complete nos comentários:

- Linha para atribuir o endereço de `x` a `p`:  
  `p = /* ... */;`  

- Linha para imprimir o valor apontado por `p`:  
  `printf("%d\n", /* ... */);`

### Exercício 2 – Ver o efeito de `*p = 20;`

```c
#include <stdio.h>

int main() {
    int x = 10;
    int *p = &x;

    printf("Valor inicial de x: %d\n", x);

    // TODO: usando a metáfora do papel e do apartamento,
    // escreva aqui a linha de código que muda o valor do "apartamento de x" para 20

    printf("Novo valor de x: %d\n", x);

    return 0;
}
```

Escreva a linha de código comentada e, em comentário, explique com suas palavras o que ela faz na metáfora.

### Exercício 3 – Associar conceitos

Associe cada expressão com seu significado, usando tanto termos técnicos quanto a metáfora:

- `x`  
- `&x`  
- `p`  
- `*p`

Significados possíveis:

- “Pessoa morando no apartamento com um valor.”  
- “Número do apartamento onde `x` mora.”  
- “Papel onde está escrito o número do apartamento.”  
- “Olhar para dentro do apartamento anotado no papel e ver/alterar o valor.”

(Tente fazer a associação sem olhar a resposta; use a metáfora como pista.)

## Parte 3 - Produção independente

Mostre que você entendeu o conceito de ponteiros em linguagem C. Realize a prática abaixo:

### Atividade aplicada Ajuste de notas com ponteiros

Contexto

Você recebeu um array com notas de alunos (valores de 0 a 10) e quer aplicar uma “curva” simples: somar 1 ponto em cada nota, sem passar de 10.  
Seu objetivo é escrever uma função em C que recebe um ponteiro para `int` e o tamanho do array, e altera as notas diretamente na memória.

Enunciado

1. Implemente a função:

```c
void ajustar_notas(int *notas, int n) {
    // TODO: somar 1 em cada nota, sem passar de 10
}
```

2. No `main`, escreva:

```c
#include <stdio.h>

void ajustar_notas(int *notas, int n);

int main() {
    int notas[] = {7, 9, 10, 5, 3};
    int n = sizeof(notas) / sizeof(notas);

    printf("Notas antes do ajuste:\n");
    for (int i = 0; i < n; i++) {
        printf("%d ", notas[i]);
    }
    printf("\n");

    // TODO: chamar ajustar_notas passando o ponteiro correto

    printf("Notas depois do ajuste:\n");
    for (int i = 0; i < n; i++) {
        printf("%d ", notas[i]);
    }
    printf("\n");

    return 0;
}
```

Objetivos pedagógicos

- Entender que um array pode ser passado para uma função como ponteiro para o primeiro elemento.  
- Usar aritmética de ponteiros ou indexação (`notas[i]` / `*(notas + i)`) para acessar e modificar cada nota.  
- Perceber que a função altera os dados “no próprio apartamento” na memória, não cria uma cópia separada.

Critérios de uma boa solução

- Alterar diretamente o array recebido (não criar outro array para retorno).  
- Garantir que nenhum valor ultrapasse 10 após o ajuste.  
- Usar o parâmetro `int *notas` de maneira correta para percorrer e modificar os elementos.