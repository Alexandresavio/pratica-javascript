//Problema: código não espera
console.log("1. Abrindo página...");
console.log("2. Clicando no botão...");
console.log("3. Validando resultado...");

console.log("");

//função async básica
async function mostrarMensagem() {
    console.log("1. Primeira mensagem");
    console.log("2. Segunda mensagem");
    console.log("3. Terceira mensagem");
}

console.log(mostrarMensagem());

console.log("");

// CONCEITO: Como será em Playwright
async function testePlaywright() {
    console.log("Assim você vai escrever em Playwright:");
    console.log("");
    console.log("await page.goto('https://exemplo.com');");
    console.log("await page.click('#botao');");
    console.log("await page.fill('#email', 'teste@email.com');");
    console.log("");
    console.log("O 'await' faz o código ESPERAR cada ação terminar!");
}

testePlaywright();
