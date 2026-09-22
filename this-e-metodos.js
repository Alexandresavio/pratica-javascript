class Pessoa {

    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    apresentar() {
        console.log(`Olá meu nome é ${this.nome} e tenho ${this.idade} anos.`
        );
    }

    envelhecer(anos = 1) {
        this.idade += anos;
        console.log(`${this.nome} agora tem ${this.idade} anos.`
        );
    }
}
const pessoa1 = new Pessoa("Ana", 28);


pessoa1.apresentar();
pessoa1.envelhecer(2);