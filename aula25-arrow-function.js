/**
 * Conceito de Arrow function
 * Arrow function é uma forma mais curta e moderna de escrever funções em JavaScript, introduzida no ES6 (2015).
 * Ela faz basicamente a mesma coisa que uma function tradicional, mas com uma sintaxe mais enxuta.
 */

//Vamos partir de uma função comum:
function somar(a,b){
    return (a + b);
}
//Reescrevendo como arrow function:
const somarArrow = (a, b) =>{
    return (a + b);
}
/**
 * Repare nas mudanças:
 * não usamos mais a palavra function;
 * os parâmetros continuam entre parênteses (a, b);
 * depois dos parênteses, colocamos uma "flecha" => (daí o nome "arrow", seta em inglês)
 * a função vira o valor de uma variável (const somar = ...)
 */
 
//exemplo de validação - função tradicional
function validarUsuario(nome){
    console.log(`Validando: ${nome}`);
}
validarUsuario("admin");

//exemplo de validação - função arrow
const validarUsuarioArrow = (nome) =>{
    console.log(`Validando: ${nome}`);
}
validarUsuarioArrow("Guest")

console.log("----------------------")
//Exemplo Arrow function com 2 parâmetros
const fazerLogin = (email, senha) =>{
    console.log(`Email: ${email}`);
    console.log(`Senha: ${senha}`);
    console.log("Login OK!")
}
fazerLogin("qa@test.com", "123456");

/**
 * Simplificando ainda mais: return implícito
 * Quando a função tem só uma linha e essa linha é um return, você pode remover as chaves {}
 * e a palavra return — o valor é devolvido automaticamente: const subtrair = (a, b) => a - b;
 * Isso é chamado de "retorno implícito".
 */
//forma tradicional
function subtrair(a, b){
    return (a -b);
}

//arrow function com retorno implicito
const subtrairRetornoImplicito = (a, b) => a - b;

//resultado

console.log("Resultado: ",subtrairRetornoImplicito(10, 6));