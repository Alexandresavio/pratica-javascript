
// estrutura FOR tradicional
for(let i = 0; i < 5; i++){
    console.log("Execução número: ",i);
}

console.log("------------------------");

for (let i = 1; i <= 3; i++){
    console.log(`Executando teste ${i}` );
    console.log("Teste passou!");
}

console.log("------------------------");

//iterar sobre array com for
let navegadores = ["chrome", "firefox", "edge", "safari"];

for(let i = 0; i < navegadores.length; i++){
    console.log(`Testando no navegador: ${navegadores[i]}`);
}

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