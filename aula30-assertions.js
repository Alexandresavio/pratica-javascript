// Validando manualmente (o jeito "difícil")

let resultadoSistema = "Login falhou";
let resultadoEsperado = "Login realizado";

console.log("Sistema trouxe:", resultadoSistema);
console.log("Eu esperava:", resultadoEsperado);

if (resultadoSistema === resultadoEsperado) {
    console.log("✅ Teste Passou!");
} else {
    console.log("❌ Teste Falhou!");
}

// exemplo de assertion no playwright
//O 'expect' recebe o elemento ou a página que queremos validar
//O 'toBeVisible' é a nossa expectativa (resultado esperado)
await expect(page.locator('#botao-sucesso')).toBeVisible();