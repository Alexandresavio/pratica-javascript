// =====================================================
// EXEMPLO 01 - CLASSE E CONSTRUCTOR
// =====================================================

//Definindo uma classe simples
class Pessoa {
    //Constructor = inicializa os dados do objeto.
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
}

//Criando instancias (objetos)
const pessoa1 = new Pessoa("Ana", 28);
const pessoa2 = new Pessoa("João", 35);

console.log(pessoa1);
console.log(pessoa2.nome);


// EXEMPLO 02 - CLASSE COM MÉTODOS
class Funcionario {

    // Constructor responsável por inicializar os dados de cada funcionário.
    constructor(nome, idade) {

        // "this" representa o funcionário que está sendo criado naquele momento.
        this.nome = nome;
        this.idade = idade;
    }
    apresentar() {

        // Usamos "this.nome" para acessar o nome do funcionário atual.
        // Usamos "this.idade" para acessar a idade do funcionário atual.
        console.log(`Olá meu nome é ${this.nome} e tenho ${this.idade} anos.`
        );
    }
    envelhecer(anos = 1) {
        this.idade += anos;
        console.log(`${this.nome} agora tem ${this.idade} anos.`
        );
    }
}

// Criamos uma nova instância da classe Funcionario.
const funcionario = new Funcionario("Ana", 28);

// Chamamos o método apresentar() do objeto funcionario.
funcionario.apresentar();
funcionario.envelhecer(2);
