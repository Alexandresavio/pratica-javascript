/**
 * Um Array é um tipo de objeto projetado para armazenar coleções de dados.
 * 
 * As principais características dos arrays em JavaScript são:
 * Elementos : Um array é uma lista de valores, conhecidos como elementos.
 * Ordenado : Os elementos da matriz são ordenados com base em seu índice.
 * Indexação a partir de zero : O primeiro elemento está no índice 0, o segundo no índice 1 e assim por diante.
 * Tamanho dinâmico : os arrays podem crescer ou diminuir à medida que elementos são adicionados ou removidos.
 * Heterogêneo : Os arrays podem armazenar elementos de diferentes tipos de dados (números, strings, objetos e outros arrays).
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

//Array de URLs para testar
let urlsParaTestar =[
    "https://exemplo.com/login",
    "https://exemplo.com/cadastro",
    "https://exemplo.com/perfil"
]

// o .length mostra o tamanho total do array
console.log(urlsParaTestar.length);
//acessando pelo indice
console.log(urlsParaTestar[1]); //mostra a url cadastro que está no indice 1
//tentando acessar um indice que não existe
console.log(urlsParaTestar[3]); // retorna undefined, pois não existe ince 3 no arrray

//array de numeros
let statusCode = [200, 404, 500, 201];

//array de strings
let usuarios = ["admin", "user1", "user2", "QA"];

//array boolenanos
let testesPassaram=[true, true, false, true];

console.log("Status codes:",statusCode);
console.log("Usuários:",usuarios);
console.log("Testes passaram:",testesPassaram);

//Acessando elementos por indice
let navegadores =["Chrome", "Firefox", "Edge", "Safari"];
console.log("Primeiro navegador:", navegadores[0]);
console.log("Segundo navegador:", navegadores[1]);
console.log("Terceiro navegador:", navegadores[2]);
console.log("Quarto navegador:", navegadores[3]);
console.log("Total de navegadores:", navegadores.length);

//cenario QA: validar primeiro e ultimo usuario
let usuariosParaTestar = ["admin", "user1", "user2", "guest"];

let primeiroUsusario = usuariosParaTestar[0];
let ultimoUsuario = usuariosParaTestar[3];

console.log(`Testar com: ${primeiroUsusario}`);
console.log(`Testar também com: ${ultimoUsuario}`);

//cenario de QA: validar se há dados suficientes
let dadosDeTeste = ["user1@test.com","user2@test.com","user3@test.com"];
if(dadosDeTeste.length >= 2){
    console.log("Temos dados para Testar");
}else{
    console.log("sem dados de teste")
}