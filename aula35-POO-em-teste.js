
class ContaBancaria {

    constructor(saldoInicial) {
        this._saldo = saldoInicial;
    }

    depositar(valor) {
        if (valor > 0) {
            this._saldo += valor;
        }
    }

    visualiasarSaldo() {
        return this._saldo;
    }
}

/***
 * O objeto minhaConta possui dados (_saldo) e comportamentos (depositar() e visualizarSaldo()),
 *  que são definidos pela classe ContaBancaria.
 */
const minhaConta = new ContaBancaria(100);
minhaConta.depositar(50);
console.log("Saldo atual: R$", minhaConta.visualiasarSaldo());


//POO aplicada à automação: Page Objec

class LoginPage {
    constructor(page) { 
        this.page = page; 
    }
    async fazerLogin(email, senha) {
        await this.page.getByLabel("Email").fill(email);
        await this.page.getByLabel("Senha").fill(senha);
    }
}
