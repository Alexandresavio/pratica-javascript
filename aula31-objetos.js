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

//exemplo 3
// Objetos aninhados: Um objeto pode conter outro objeto: 
const cliente = {
    nome: "Ana",
    contato: {
        email: "ana@teste.com",
        telefone: "99999-9999"
    }
};
console.log(`Email: ${cliente.contato.email}`);
console.log(`Telefone:${cliente.contato.telefone}`);

//Exemplo 4
//  Arrays dentro de objetos: Um objeto também pode possuir listas: 
const funcionario = {
    nome: "João",
    contato: {
        email: "João@teste.com",
        telefone: "99999-9999"
    },
    habilidades: ["JavaScript", " QA", " Playwright"]
};
console.log(`Nome: ${funcionario.nome}`);
console.log(`Habilidades: ${funcionario.habilidades}`);//o array é convertido em texto, separado por vírgulas
console.log(`Total de habilidades: ${funcionario.habilidades.length}`);//Em um array, .length retorna a quantidade de itens, não o conteúdo.
//console.log(`Habilidades: ${funcionario.habilidades.join("|")}`);//Usar .join() para controlar o separador (geralmente a melhor opção)
console.log(`Habilidade de maior conhecimento: ${funcionario.habilidades[1]}`)//Mostrar uma habilidade específica pelo índice
