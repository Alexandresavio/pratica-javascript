/**
 * Conceito de array:
 * Um array em JavaScript é uma estrutura que guarda várias informações em uma única variável,
 * organizadas em sequência e numeradas a partir do zero. Pense numa fileira de caixinhas numeradas.
 * Cada caixinha pode guardar um valor, e você acessa cada uma pelo seu número (chamado de "índice"):
 */


/**
 * Aqui, frutas é o array, e ele tem três posições:
 * posição 0 → "maçã"
 * posição 1 → "banana"
 * posição 2 → "uva"
 * Repare que a contagem começa em 0, não em 1 — isso é uma convenção
 * da maioria das linguagens de programação, incluindo JavaScript.
 */
const frutas = ["maçã", "banana", "uva"];


/**
 * Acessando valores:
 * Para pegar um valor específico, você usa colchetes com o índice:
 */
console.log(frutas);
console.log(frutas[0]);
console.log(frutas[1]);
console.log(frutas[2]);

/**
 * Descobrindo o tamanho:
 * A propriedade length diz quantos itens o array tem:
 */
console.log(frutas.length);

/**
 * Modificando um array:
 * Você pode adicionar, remover ou alterar itens depois de criado:
 */
console.log(frutas[1] = "morango");      // troca "banana" por "morango"
console.log(frutas.push("laranja"));      // adiciona no final
console.log(frutas.push("melancia"));
console.log(frutas.pop());                 // remove o último item
console.log(frutas);