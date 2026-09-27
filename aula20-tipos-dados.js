/*************************************************
 * STRING - textos, sempre entre aspas
 *************************************************/
const mensagemErro = "Erro ao carregar a página";
console.log(mensagemErro);

const nomeUsuario = "Ana";
console.log(nomeUsuario);

const labelBotao = "Enviar";
console.log(labelBotao);

const url = "https://meusite.com/login";
console.log(url);


/*************************************************
 * NUMBER - números, sem aspas
 *************************************************/
const quantidadeItens = 10;
console.log(quantidadeItens);

const precoProduto = 99.90;
console.log(precoProduto);

const ano = 2026;
console.log(ano);


/*************************************************
 *  BOOLEAN - verdadeiro ou falso
 *************************************************/
const campoPreenchido = true;
console.log(campoPreenchido);

const botaoVisivel = false;
console.log(botaoVisivel);

const isAtivo = true;
console.log(isAtivo);


/**********************************************************
 *  UNDEFINED - variável declarada mas sem valor atribuído
 *********************************************************/
let telefone;
console.log(telefone); // undefined -> "esqueceram de preencher esse campo"

/**********************************************************
 *  NULL - valor "vazio" definido de propósito
 *********************************************************/
let campoObservacao = null; // alguém definiu explicitamente que não tem valor

/**********************************************************
 *  OBJECT - agrupa múltiplos dados relacionados
 *********************************************************/
const respostaJson = {
  id: 1,
  nome: "Ana",
  ativo: true
};
console.log(respostaJson);

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
const listaDeProdutos = [1, 2, 3, 4,"TV","smartphone"];
console.log(listaDeProdutos);

const listaDeNomes = ["Carlos", "Ana", "Julia"];
console.log(listaDeNomes);