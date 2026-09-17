/**
 * Conceito de estruturas condicionais
 * Condicionais são estruturas que permitem que o seu código tome decisões: ele executa um bloco de código diferente
 * dependendo se uma condição é verdadeira ou falsa. Pense assim: no dia a dia você toma decisões o tempo todo baseado 
 * em condições — "se estiver chovendo, levo guarda-chuva; senão, não levo". Condicionais fazem exatamente isso dentro do código
 */

/**
 * Condicional Simples.
 * O desvio condicional simples permite executar um bloco de código caso o resultado do teste seja verdadeiro,
 * ignorando um resultado falso.
 */
let idade = 17;
if(idade >= 18){
    console.log("Você é maior de idade.")
}

/**
 * Condicional composta
 * O desvio condicional composto tem por finalidade tomar decisões de acordo com o resultado de uma condição (teste lógico),
 * caso resultado seja V irá executar um bloco de instrução, se o resultado for falso irá executar outro caminho.
 */
let idade2 = 15;

if (idade2 >= 18) {
    console.log("Você é maior de idade.");
} else {
    console.log("Você é menor de idade.");
}

/**
 * Condicional Aninhada
 * Desvio Condicional Aninhado, que nada mais é do que o encadeamento de estruturas de decisão compostas em um algoritmo.
 * Também chamamos a esse tipo de estrutura de Desvio Condicional Encadeado
 */
let nota = 7;

if (nota >= 9) {
    console.log("Conceito A");
} else if (nota >= 7) {
    console.log("Conceito B");
} else if (nota >= 5) {
    console.log("Conceito C");
} else {
    console.log("Reprovado");
}