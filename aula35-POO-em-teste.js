
class ContaBancaria {

    constructor(saldoInicial) {
        this._saldo = saldoInicial;
    }

    depositar(valor) {
        if(valor > 0){
            this._saldo += valor;
        }
    }

    visualiasarSaldo() {
        return this._saldo;
    }
}

const minhaConta = new ContaBancaria(100);
minhaConta.depositar(0);
console.log(minhaConta.visualiasarSaldo());
