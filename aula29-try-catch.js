
//Exemplo 1
function dividir(a, b){
    if(a === 0){
        //O comando throw permite gerar um erro manualmente quando uma condição inválida é encontrada
        throw new Error("Não pode dividir por zero!");// 
    }
    return (a / b);
}
//com try catch
try{
    console.log("tentando dividir...");
    let resultado = dividir(10, 0);
    console.log(`Resultado: ${resultado}`);
}catch(erro){
    console.log("Erro capturado",erro.mesage);
}
console.log("Código continuou executando.")


//Exemplo 2
function validarElemento(elemento){
    if(!elemento){
        throw new Error("Elemento não encontrado!");
    }
    console.log("Elemento válido.");
}
try{
    console.log("tentando validar elemento...");
    validarElemento(null);//vai dar erro
}catch(erro){
    console.log("Erro no teste:", erro.message);
    console.log("Registrando log...");
}

//exemplo 3
async function testeComLimpeza() {
    
    console.log("Iniciando teste...");
    
    try{
        console.log("Criando dados de teste...");
        console.log("Executando validações...");
        //simula erro
        throw new Error("elemento não encontrado.");
    }catch(erro){
        console.log("Erro: ", erro.message);
        console.log("Tirando screenshot do erro...");
    }finally{
        console.log("Limpando dados do teste...");
        console.log("Fechando navegador...");
        console.log("Cleanup concluído.")
    }
}
testeComLimpeza();

