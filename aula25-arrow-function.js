/**
 * Conceito de Arrow function: Arrow function é uma forma mais curta e moderna de escrever funções em JavaScript,
 * introduzida no ES6 (2015). Ela faz basicamente a mesma coisa que uma function tradicional, mas com uma sintaxe mais enxuta.
 */

//exemplo de validação - função tradicional(sem retorno)
function validarUsuario(nome){
    console.log(`Validando: ${nome}`);
}
validarUsuario("admin");

//exemplo de validação - função arrow(sem retorno)
const validarUsuarioArrow = (nome) =>{
    console.log(`Validando: ${nome}`);
}
validarUsuario("Guest");

//Exemplo Arrow function com 2 parâmetros (sem retorno)
const fazerLogin = (email, senha) =>{
    console.log(`Email: ${email}`);
    console.log(`Senha: ${senha}`);
    console.log("Login OK!")
}
//chamada da função
fazerLogin("qa@test.com", "123456");

//Função tradicional com dois parametros(com retorno)
function somar(a,b){
    return (a + b);
}
const totalSoma = somar(5, 4);
console.log(`Total da soma é igual a: ${totalSoma}`);

//Exemplo Arrow function com 2 parâmetros (com retorno)
const somarArrow = (a, b) =>{
    return (a + b);
}
const totalSomaArrow = somarArrow(5, 6);
console.log(`Total da soma é igual a: ${totalSomaArrow}`);

//Assim voce vai escrever testes em playwright
const validarPagina =() =>{
    console.log("Validando página...");
    console.log("Página OK.");
}
validarPagina();


// quando usar `function` e quando usar arrow?
// "**Regra prática:**"

// Use arrow functions para:
// 1. Funções simples e curtas
const validar = (valor) => valor > 0;

// 2. Callbacks (veremos em loops)
// 3. Testes em Playwright

// Use function tradicional para:
// 1. Funções mais complexas (se preferir)
function processarDadosComplexos() {
  // Muitas linhas de código
  console.log("Processando...");
  // ...
}