// =====================================================
// EXEMPLO 01 - CLASSE E CONSTRUCTOR
// =====================================================

// Uma classe é um molde usado para criar objetos com características e comportamentos semelhantes.
// Neste exemplo, "Pessoa" é a classe.
class Pessoa {

    // O constructor é um método especial da classe. Ele é executado automaticamente quando criamos
    // uma nova instância usando o operador "new". As variaveis "nome" e "idade" são parâmetros que recebem
    // os valores fornecidos na criação do objeto.
    constructor(nome, idade) {

        // "this" representa a instância atual do objeto.
        // Aqui estamos criando/definindo a propriedade "nome" do objeto com o valor recebido pelo parâmetro "nome".
        this.nome = nome;

        // Aqui estamos fazendo a mesma coisa com "idade".
        this.idade = idade;
    }
}


// O operador "new" é utilizado para criar uma nova instância da classe Pessoa.
// O constructor é executado automaticamente, recebendo "Ana" como nome e 28 como idade.
const pessoa1 = new Pessoa("Ana", 28);


// Aqui criamos outra instância da classe Pessoa. Neste caso com nome = "João" e idade = 35
const pessoa2 = new Pessoa("João", 35);


// Exibe o objeto completo no console.
console.log(pessoa1);


// Acessamos diretamente a propriedade "nome" do objeto pessoa2.
console.log(pessoa2.nome);


// =====================================================
// EXEMPLO 02 - CLASSE COM MÉTODOS
// =====================================================

class Funcionario {

    // Constructor responsável por inicializar os dados de cada funcionário.
    constructor(nome, idade) {

        // "this" representa o funcionário que está sendo criado naquele momento.
        this.nome = nome;
        this.idade = idade;
    }

    // MÉTODO apresentar(): Um método é uma função que pertence à classe.
    // Neste caso, o método apresenta informações sobre o funcionário.
    apresentar() {

        // Usamos "this.nome" para acessar o nome do funcionário atual.
        // Usamos "this.idade" para acessar a idade do funcionário atual.
        console.log(
            `Olá meu nome é ${this.nome} e tenho ${this.idade} anos.`
        );
    }

    envelhecer(anos = 1) {
        this.idade += anos;

        // Exibe a nova idade do funcionário.
        console.log(
            `${this.nome} agora tem ${this.idade} anos.`
        );
    }
}

// Criamos uma nova instância da classe Funcionario.
const funcionario = new Funcionario("Ana", 28);

// Chamamos o método apresentar() do objeto funcionario.
funcionario.apresentar();
funcionario.envelhecer(2);
