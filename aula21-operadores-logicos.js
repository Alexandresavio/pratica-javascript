//operadores lógicos
// let emailValido = true;
// let senhaValida = false;

//Operador E and
// let loginPermitido = emailValido && senhaValida;
// console.log("Login permitido? ",loginPermitido);

// Operador OU 
// let loginPermitido = emailValido || senhaValida;
// console.log("Login permitido? ",loginPermitido);

//Operado Não
// let loginPermitido = !emailValido && !senhaValida;
// console.log("Login permitido? ",loginPermitido);

//condicionais
// if(emailValido && senhaValida){
//     console.log("Login permitido");
// }else{
//     console.log("Login negado");
// }



// let isAdmin = false;
// let isModerador = false;
// if(isAdmin || isModerador){
//     console.log("Pode editar conteúdo")
// }else{
//     console.log("sem permissão de edição")
// }

//combinando operadores
// let idadeUsuario = 10;
// let temCartao = true;
// let saldoPositivo = true;

// // Pode comprar se: maior de 18 e tem cartão ou saldo positivo
//  if((idadeUsuario >= 18) && (temCartao || saldoPositivo)){
//     console.log("Compra autorizada.")
//  }else{
//     console.log("Compra Negada")
//  }

 /**
  * crie uma validação que verifica se um produto pode ser vendido
  * Regra: estoque > 0 E (preco < 100 Ou está em promoção)
  * 
  */
 let precoProduto = 1000;
 let quantidadeEstoque = 0;
 let produtoEmPromocao = true;

 if((quantidadeEstoque > 0) && (precoProduto < 100 || produtoEmPromocao == true)){
    console.log("Produto pode ser vendido")
 }else{
    console.log("Produto fora da promoção ou sem estoque")
 }