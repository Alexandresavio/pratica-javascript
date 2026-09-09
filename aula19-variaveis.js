

//  Arquivo sem variável - com código hardcoded
test('login válido', async ({page}) => {
    await page.goto('https://northwind-test-plataform.vercel.app/');
    await page.fill('#username','admin');
    await page.fill('#senha','123456');
})

test('login inválido', async ({page}) => {
    await page.goto('https://northwind-test-plataform.vercel.app/');
    await page.fill('#username','admin');
    await page.fill('#senha','senha-errada');
})

// Arquivos com variveis de ambiente - etiquetas de proteção
//uso do const
const URL_SISTEMA = 'https://northwind-test-plataform.vercel.app/';
const USUARIO_PADRAO = 'admin';
const SENHA_PADRAO = '123456';

test('login válido', async ({page}) => {
    await page.goto(URL_SISTEMA);
    await page.fill(USUARIO_PADRAO);
    await page.fill(SENHA_PADRAO);
})

test('login inválido', async ({page}) => {
    await page.goto(URL_SISTEMA);
    await page.fill(USUARIO_PADRAO);
    await page.fill('#senha','senha-errada');
})


//uso de let
test('login com retry', async({page}) => {
    await page.goto(URL_SISTEMA);
    let tentativas = 0;
    while( tentativas < 3){
        tentativas++
    }
})