//Exemplo 01
function dividir(a, b) {
    try {
        if (b === 0) {
            throw new Error("Divisão por zero não permitida!");
        }
        return (a / b);
    } catch (error) {
        console.error("Ops! Aconteceu um erro:", error.message);
        //Em QA: tirar um print, registrar log, etc.
        return null; //Retorna algo seguro
    } finally {
        console.log("Operação finalizada.")
    }
}

console.log(dividir(10, 2)); // funciona
console.log(dividir(10, 0)) // cai no catch
console.log("O teste continua...") // Prova que não quebrou

//Exemplo 02
function calculaBonus(salario) {
    let bonus = 0;

    debugger;

    if (salario > 2000) {
        bonus = salario * 0.1;
    }else{
        bonus = salario * 0.15;
    }
    return bonus;

}

console.log(calculaBonus(100));