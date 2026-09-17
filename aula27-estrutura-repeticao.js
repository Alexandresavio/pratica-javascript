/**
 * Conceito de estruturas de repetição(Loops)
 * Estruturas de repetição (também chamadas de "loops") são blocos de código que executam a mesma instrução várias vezes,
 * sem que você precise escrevê-la repetidamente.
 */

//Imagine que você precisa imprimir os números de 1 a 5. Sem repetição, você faria assim:
console.log("Sem utilizar laço FOR") 
//Funciona, mas é repetitivo e não escala — imagine fazer isso até 1000. É exatamente esse tipo de problema que os loops resolvem.
console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);

/**
 * 
 * 
 */
console.log("----------")
console.log("Utilizando laço FOR")//O loop for: É a estrutura de repetição mais comum. Ela tem três partes, separadas por ponto e vírgula
for(let i=1; i <=5; i++){
    console.log(`${i}`);
}
/**
 * Isso imprime 1, 2, 3, 4, 5. Vamos entender cada parte:
 * let i = 1 → inicialização: cria a variável contadora, começando em 1
 * i <= 5 → condição: o loop continua rodando enquanto isso for verdadeiro
 * i++ → incremento: depois de cada repetição, soma 1 a i (é o mesmo que i = i + 1)
 */

//Percorrendo um array com for: Um uso muito comum é passar por cada item de um array.
const frutas = ["maçã", "banana", "uva"];// Aqui, i vai de 0 até frutas.length - 1 (ou seja, 0, 1, 2)
for(let i = 0; i < frutas.length; i++){ //acessando cada posição do array: frutas[0], frutas[1], frutas[2].
    console.log(frutas[i]);
}

/**
 * Uma forma mais simples para arrays: for...of
 * Quando você só precisa do valor de cada item (sem se importar com o índice), o for...of é mais direto:
 */
console.log("----------");
console.log("Utilizando for ...of")
const frutas2 = ["limão", "abacaxi", "morango"];
for (const fruta of frutas2) {//Isso faz a mesma coisa que o exemplo anterior, mas sem precisar controlar contador nem índice manualmente.
    console.log(fruta);

}

//O forEach: método de array para repetição
console.log("--------------------------");
console.log("Utilizando método forEach");
const frutas3 = ["pera", "laranja", "melancia"];

frutas3.forEach((fruta) => {
    console.log(fruta);
});


/**
 * while — “enquanto for verdadeiro”
 * O while executa um bloco de código enquanto a condição for verdadeira.
 */
console.log("--------------------------")
console.log("Utilizando estrutura while");
let contador = 1;

while (contador <= 5) {
    console.log(contador);
    contador++;//varivelde controle
}

/**
 * do...while — executa pelo menos uma vez
 * Diferença principal: O código roda ANTES de verificar a condição
 */
console.log("--------------------------")
console.log("Utilizando estrutura Do while");
let cont = 1;
do{
    console.log(cont);
    cont++;
}while(cont <= 5);

