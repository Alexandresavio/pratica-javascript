//EXEMPLO 01 - MAP() COM FUNÇÃO TRADICIONAL
//map() percorre todos os elementos e cria um novo array com os elementos transformados.
const numeros = [10, 20, 30]; 
const dobrados = numeros.map(function(numero){
    return numero * 2;
})
console.log(`Dobrados: ${dobrados}`);

// EXEMPLO 02 - MAP() COM ARROW FUNCTION
/**
 * Aqui fazemos a mesma ideia do primeiro exemplo, mas usando uma Arrow Function.
 * "numero" representa cada elemento do array a "=>" é a sintaxe da Arrow Function.
 * Como existe apenas uma instrução e ela é um return, podemos escrever a função de forma mais curta.
 */
const triplicados = numeros.map(numero => numero * 3);
console.log(`Triplicados: ${triplicados}`);

//EXEMPLO 04 - FILTER() COM FUNÇÃO TRADICIONAL
const idades = [15, 22, 17, 35, 19];
const maiorDeIdade = idades.filter(function(idade){
    if(idade >=18){
        return idade;
    }
});
console.log(`Maiores de idade: ${maiorDeIdade}`);

//EXEMPLO 05 - FILTER() COM ARROW FUNCTION
const menorDeIdade = idades.filter((idade => idade < 18));
console.log(`Menores de Idade: ${menorDeIdade}`);

const resultadoDosTestes = [
    { nome: "Login válido", passou: true },
    { nome: "Login inválido", passou: false },
    { nome: "Cadastro", passou: true },
    { nome: "Logout", passou: false }
];
const falhados = resultadoDosTestes.filter((teste => !teste.passou));
console.log(falhados);

// EXEMPLO 07 - FIND() COM ARROW FUNCTION
const usuarios = [ 
    { nome: "Ana", admin: false }, 
    { nome: "João", admin: true }, 
    { nome: "Maria", admin: true } 
]; 
 
const administrador = usuarios.find(usuario => usuario.admin);
console.log(administrador);