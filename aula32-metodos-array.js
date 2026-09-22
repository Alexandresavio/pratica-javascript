//Exemplo 01 map
const numeros = [10, 20, 30]; 
const dobrados = numeros.map(function(numero){
    return numero * 2;
})
console.log(dobrados);

//Exemplo 02 map
const elevados = numeros.map(function(numero){
    return numero ** 2;
})
console.log(elevados);

// =====================================================
// EXEMPLO 03 - MAP() COM ARROW FUNCTION
// =====================================================
/**
 * Aqui fazemos a mesma ideia do primeiro exemplo, mas usando uma Arrow Function.
 * "numero" representa cada elemento do array a "=>" é a sintaxe da Arrow Function.
 * Como existe apenas uma instrução e ela é um return, podemos escrever a função de forma mais curta.
 */
const triplicados = numeros.map(numero => numero * 3);

// Exibimos o novo array no console.
console.log(triplicados);

// Resultado:
// [30, 60, 90]

// =====================================================
// EXEMPLO 04 - FILTER() COM ARROW FUNCTION
// =====================================================
//const idades = [15, 22, 17, 35, 19];
const maioresDeIdade = idades.filter(idade => idade >= 18);
console.log(maioresDeIdade);

// ===========================================================
// EXEMPLO 05 - FILTER() COM FUNCTION
// ===========================================================

// Aqui criei uma constante chamada "idades".
// O valor dela é um array contendo várias idades.
// Esses são os elementos que o filter() irá analisar.
const idades = [15, 22, 17, 35, 19];


// Aqui criei outra constante chamada "verificaIdades" e ela vai receber o resultado produzido pelo filter().
const verificaIdades = idades.filter(function(idade) {
    // Criei uma função tradicional com o parâmetro "idade", a cada execução "idade" recebe um elemento do array.

    // Verifica se a idade é maior ou igual a 18.
    if (idade >= 18) {

        // Quando a condição é verdadeira, retornamos o elemento para que o filter()
        // o mantenha no novo array.
        return idade;
    }
});

// Exibe no console o novo array criado pelo filter().
console.log(verificaIdades);


// =====================================================
// EXEMPLO 06 - FILTER() COM ARROW FUNCTION
// =====================================================

// Aqui criei uma constante chamada "resultadoDosTestes". O valor dela é um array contendo vários objetos.
// Esses são os elementos que o filter() irá analisar.
const resultadoDosTestes = [
    { nome: "Login válido", passou: true },
    { nome: "Login inválido", passou: false },
    { nome: "Cadastro", passou: true },
    { nome: "Logout", passou: false }
];


// Aqui criei outra constante chamada "falhados" que vai receber o resultado produzido pelo filter().
const falhados = resultadoDosTestes.filter(teste => !teste.passou);
// Criei uma Arrow Function com o parâmetro "teste" que a cada execução "teste" recebe um objeto do array.
// Como a Arrow Function possui apenas uma expressão, não precisamos escrever "return" nem usar chaves {}.
// ! significa "negação".
// Assim, o filter() irá manter somente os testes que não passaram.

// Exibe no console o novo array criado pelo filter().
console.log(falhados);

// =====================================================
// EXEMPLO 07 - FIND() COM ARROW FUNCTION
// =====================================================
const usuario = [
    { id:1, nome:"Ana", admin:false},
    { id:2, nome:"Jão", admin:true },
    { id:1, nome:"Ana", admin:false}
];
const admin = usuario.find(usuario => usuario.admin);
console.log(admin);