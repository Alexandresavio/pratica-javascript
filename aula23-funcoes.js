/**
 * Uma função em JavaScript é um bloco de código reutilizável que você cria uma vez e pode "chamar" (executar) quantas vezes quiser,
 * sempre que precisar realizar aquela tarefa. Pense numa função como uma receita de bolo, você escreve o passo a passo uma vez,
 * e toda vez que quiser fazer o bolo, só segue a receita não precisa reinventar o processo do zero.
 */

//Criando uma função sem parametro e sem retorno
function cumprimentar(){
    console.log("Olá, mundo.");
}
//Aqui você só definiu a função. Para ela realmente executar, você precisa chamá-la:
cumprimentar(); // chamada da função, exibe a mensagem "Olá, mundo."

/**
 * Parâmetros: personalizando a função.
 * Muitas vezes você quer que a função funcione com valores diferentes a cada chamada. 
 * Para isso, usamos parâmetros:
 */

function saudacao(nome){
    console.log("Olá "+nome+"!");
}
/**
 * nome é o parâmetro — uma espécie de variável temporária que recebe o valor passado
 * na hora da chamada (chamado de "argumento").
 */
saudacao("savio");
saudacao("Maria")
saudacao(25); // funciona mesmo com número, o JS converte para string ao concatenar

/**
 * Retornando um valor:
 * Além de executar ações (como imprimir algo), uma função pode calcular
 * e devolver um resultado usando return:
 */
function somar(a, b){
    return (a + b);
}
const resultado = somar(4, 6); //retorna 10
/**
 * Quando a função usa return, ela entrega o valor de volta para quem a chamou,
 * e você pode guardar isso numa variável, como fizemos com resultado.
 */

/**
 * Outra forma de escrever: arrow function
 * Hoje em dia é muito comum ver funções escritas de um jeito mais enxuto,
 * chamado arrow function: const somar2 = (a, b) => a + b;
 */
console.log(resultado);