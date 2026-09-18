// /**
//  * Conceito de estruturas de repetição(Loops)
//  * Estruturas de repetição (também chamadas de "loops") são blocos de código que executam a mesma instrução várias vezes,
//  * sem que você precise escrevê-la repetidamente.
//  */


// /**
//  * while — “enquanto for verdadeiro”
//  * O while executa um bloco de código enquanto a condição for verdadeira.
//  */
// console.log("--------------------------")
// console.log("Utilizando estrutura while");
// let contador = 1;

// while (contador <= 5) {
//     console.log(contador);
//     contador++; // variável de controle
// }


// /**
//  * do...while — executa pelo menos uma vez
//  * Diferença principal: O código roda ANTES de verificar a condição
//  */
// console.log("--------------------------")
// console.log("Utilizando estrutura Do while");
// let cont = 1;
// do{
//     console.log(cont);
//     cont++;
// }while(cont <= 5);


// console.log("--------------------")
// /**
//  * O loop for: É a estrutura de repetição mais comum. Ela tem três partes, separadas por ponto e vírgula
//  * 
//  * for(let nomeDaVariavel = valor da incialização; condição; incremeto/decremento){
//  *    CÓDIGO...
//  * }
//  */
// console.log("Utilizando laço FOR")
// for( let i = 1; i <= 5; i++){
//     console.log(`${i}`);
// }
// /**
//  * Isso imprime 1, 2, 3, 4, 5. Vamos entender cada parte:
//  * let i = 1 → inicialização: cria a variável contadora, começando em 1
//  * i <= 5 → condição: o loop continua rodando enquanto isso for verdadeiro
//  * i++ → incremento: depois de cada repetição, soma 1 a i (é o mesmo que i = i + 1)
//  */

// console.log("------------------------");
// /**
//  * Percorrendo um array com for: 
//  * Um uso muito comum é passar por cada item de um array.
//  * Aqui, i vai de 0 até frutas.length - 1 (ou seja, 0, 1, 2),
//  * acessando cada posição do array: frutas[0], frutas[1], frutas[2].
//  */
// const frutas = ["maçã", "banana", "uva"];
// for(let i = 0; i < frutas.length; i++){ 
//     console.log(frutas[i]);
// }



console.log("------------------------");

//Exemplo 1: validando uma lista de e-mails: 
function emailValido(email){
    return email.includes("@");
}

const listaEmails = ["teste@email.com", "usuario.com", "contato@site.com", "invalido"];

//Quando você só precisa do valor de cada item (sem se importar com o índice), o for...of é mais direto
for (const email of listaEmails) { 
    const valido = emailValido(email);
    console.log(`O email "${email}" é válido? ${valido}`);
}

console.log("--------------------------");

//Exemplo 2: mesmo resultado com forEach
listaEmails.forEach((email) => {
    console.log(`O email "${email}" é válido? ${emailValido(email)}`);
});

console.log("-------------------------");

//Exemplo 3: contando quantos e-mails são válidos (loop + condicional + um contador)
let totalValidos = 0;

for (const email of listaEmails) {
    if (emailValido(email)) {
        totalValidos++;
    }
}
console.log(`Total de emails válidos: ${totalValidos}`); // 2

console.log("-------------------------");

//Exemplo 4: validando vários usuários com validarUsuario
function validarUsuario(nomeUsuario){
    console.log("Validando usuário:", nomeUsuario);
}

const usuarios = ["admin", "guest", "qa_tester", "dev01"];

for (let i = 0; i < usuarios.length; i++) {
    validarUsuario(usuarios[i]);
}

console.log("-------------------------");

//Exemplo 5: somando todos os valores de um array
function somar(a, b){
    return a + b;
}

const valores = [5, 10, 15, 20];
let total = 0;

for (const valor of valores) {
    total = somar(total, valor);
}

console.log(`Soma total: ${total}`); // 50

console.log("------------------------");

//Exemplo 6: combinando tudo — login simulado em lote (reaproveitando a função emailValido já declarada acima)
const cadastros = [
    { email: "ana@email.com", senha: "123456" },
    { email: "bruno.com", senha: "abcdef" },
    { email: "carla@email.com", senha: "senha99" }
];

for (const usuario of cadastros) {
    if (emailValido(usuario.email)) {
        console.log(`✔ Cadastro aprovado para: ${usuario.email}`);
    } else {
        console.log(`✘ Cadastro rejeitado, email inválido: ${usuario.email}`);
    }
}