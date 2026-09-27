// estrutura FOR tradicional
for(let i = 0; i < 5; i++){
    console.log("Execução número: ",i);
}
console.log("------------------------------------------------------------------------------------------------");




//exemplo executar teste multiplas vezes
for (let i = 1; i <= 3; i++){
    console.log(`Executando teste ${i}` );
    console.log("Teste passou!");
}
console.log("------------------------------------------------------------------------------------------------");




//iterar sobre array com for tradicional
let navegadores = ["chrome", "firefox", "edge", "safari"];

for( let i = 0; i < navegadores.length; i++){
    console.log("Testando navegador:",navegadores[i]);    
}
console.log("------------------------------------------------------------------------------------------------");




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

// Exemplo 2: mesmo resultado com forEach
// forEach() é um método usado para percorrer os elementos de um array, executando uma ação para cada elemento.
// A ideia é: “para cada item do array, execute esta função
listaEmails.forEach((email) => {
    console.log(`O email "${email}" é válido? ${emailValido(email)}`);
});




console.log("------------------------------------------------------------------------------------------------");
// O forEach é uma forma de percorrer todos os elementos de um array, um por um, executando
// uma ação para cada elemento.
let usuarios =["admin", "user1", "user2", "guest"];

usuarios.forEach((usuario) => {
                //usuario = elemento atual
    console.log("Validando usuario:", usuario);
});
console.log("------------------------------------------------------------------------------------------------");




//exemplo: validar status code
let statusCodes =[200, 201, 404, 500];

statusCodes.forEach((status) =>{
    if(status >= 200 && status < 300){
        console.log(`Status ${status}: sucesso`);
    }else{
        console.log(`Status ${status}: Erro`)
    }
})
console.log("------------------------------------------------------------------------------------------------");




//Exemplo: Processar dados de teste
//Processar multiplos usuarios
let usuarioTeste =[
    {nome:"Admin", email:"admin@teste.com"},
    {nome:"User1", email:"user1@teste.com"},
    {nome:"Guest", email:"guest@teste.com"}
]
usuarioTeste.forEach((usuario) => {
    console.log("Testando login de ", usuario.nome);
    console.log("Email:", usuario.email);
    console.log("Login OK")
});
console.log("------------------------------------------------------------------------------------------------");

