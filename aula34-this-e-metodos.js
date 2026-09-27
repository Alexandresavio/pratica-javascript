class Pessoa {

    constructor(nome, idade) {

        //Importante: this.nome é a propriedade do objeto; nome é o parâmetro recebido pelo constructor
        this.nome = nome;
        this.idade = idade;
    }

    //Métodos são funções definidas dentro de uma classe
    apresentar() {
        console.log(`Olá meu nome é ${this.nome} e tenho ${this.idade} anos.`
        );
    }

    envelhecer() {
        this.idade += 1;
        console.log(`${this.nome} agora tem ${this.idade} anos.`
        );
    }
}
const pessoa1 = new Pessoa("Ana", 28);


pessoa1.apresentar();
pessoa1.envelhecer();