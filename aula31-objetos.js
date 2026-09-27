//Um objeto é uma coleção de dados relacionados (chave: valor)
const usuario = {
    nome: "Ana",
    email: "ana@teste.com",
    idade: 28,
    ativo: true
};
console.log(usuario); // mostra todos os dados do objeto
console.log(usuario.nome);// acessa uma propriedade especifica


//Exemplo 2
const dadosLoginValido = {
    email: "usuario@exemplo.com",
    senha: "Senha123",
    perfil: "admin"
}
console.log(`Email de teste: ${dadosLoginValido.email}`);
console.log(`Senha de teste: ${dadosLoginValido.senha}`);
console.log(`Senha de teste: ${dadosLoginValido.idade}`);// vai retornar como undefined porque a propriedade não existe


//Exemplo 3 - Objetos aninhados: Um objeto pode conter outro objeto e arrays:
const perfilCompleto = {
    nome: "João",
    contato:{
        email: "joao@teste.com",
        telefone:"(11)99999-9999"
    },
    hobbies:[
        "academia",
        "viagem",
        "café"
    ]
}
console.log(perfilCompleto.contato.email); //mostra o email
console.log(perfilCompleto.hobbies[0]); //mostra o elemento no indice 0(academia)


//exemplo 4 - Objetos aninhados: Um objeto pode conter outro objeto: 
const cliente = {
    nome: "Ana",
    contato: {
        email: "ana@teste.com",
        telefone: "99999-9999"
    }
};
console.log(`Email: ${cliente.contato.email}`);
console.log(`Telefone:${cliente.contato.telefone}`);


//Exemplo 5 - Arrays dentro de objetos: Um objeto também pode possuir listas: 
const funcionario = {
    nome: "João",
    contato: {
        email: "João@teste.com",
        telefone: "99999-9999"
    },
    habilidades: [
        "JavaScript", 
        " QA", 
        " Playwright"
    ]
};
console.log(`Nome: ${funcionario.nome}`);
console.log(`Email: ${funcionario.contato.email}`)//mostra o atributo email do objeto contato dentro de objet funcionario
console.log(`Telefone: ${funcionario.contato.telefone}`)//mostra o atributo telefone do objeto contato dentro de objet funcionario
console.log(`Habilidades: ${funcionario.habilidades}`);//o array é convertido em texto, separado por vírgulas
console.log(`Total de habilidades: ${funcionario.habilidades.length}`);//Em um array, .length retorna a quantidade de itens, não o conteúdo.
//console.log(`Habilidades: ${funcionario.habilidades.join("|")}`);//Usar .join() para controlar o separador (geralmente a melhor opção)
console.log(`Habilidade de maior conhecimento: ${funcionario.habilidades[1]}`)//Mostrar uma habilidade específica pelo índice
