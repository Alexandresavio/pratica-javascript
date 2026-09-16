/**
 * funções com parâmetros: personalizando a função.
 * Muitas vezes você quer que a função funcione com valores diferentes a cada chamada. 
 * Para isso, usamos parâmetros:
 */
//exemplo 01
function validarUsuario(nomeUsuario){
    console.log("Validando usuário:", nomeUsuario);
}

//exemplo2 - função com 2 parâmetros
function fazerLogin(email, senha){
    console.log("Email:", email);
    console.log("Senha:",senha);
    console.log("Login realizado.")
}

//chamada da função de exemplo 01 -  com valores 
validarUsuario("admin");
validarUsuario("guest");
validarUsuario("qa_tester");

console.log("-------------------------");
//chamada da função de exemplo 02 -  com 2 parâmetros
fazerLogin("admin@test.com", "senha123");

console.log("-------------------------");
fazerLogin("user@test.com", "abc456"); 

console.log("-------------------------");
// Exemplo 03 - função sem retorno - a função não tem "return" porque todo o processamento,
// incluindo a exibição do resultado ao usuário, já é feito dentro da própria função.
function somar(a, b){
    let totalSoma = a + b;
    console.log(`Total da soma é: ${totalSoma}`);
    
}
//chamada da função de exemplo 03 - sem retorno
somar(5, 5); 

console.log("-------------------------");
//Exemplo 04 - função com retorno - Além de executar ações (como imprimir algo), uma função pode calcular e devolver um resultado usando return
function multiplicar(x, y){
    return (x * y);
}
let totalMultiplicacao = multiplicar(5, 9);
console.log(`Total da multiplicação é: ${totalMultiplicacao}`);

console.log("-------------------------");
//Exemplo de validação que retorna true/false
function emailValido(email){
    if(email.includes("@")){
        return true;
    }else{
        return false;
    }
}
let email1 = "teste.email.com";
let statusEmail1 = emailValido(email1);
console.log(`O email "${email1}" é válido? ${statusEmail1}`);

let email2 = "teste@email.com";
let statusEmail2 = emailValido(email2);
console.log(`O email "${email2}" é válido? ${statusEmail2}`);