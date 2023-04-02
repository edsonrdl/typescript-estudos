"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
    nomeCompleto() {
        return `${this.nome} ${this.sobrenome}`;
    }
}
const pessoa = new Pessoa('Glaucia', 'Lemos');
console.log(pessoa.nomeCompleto());
//Exemplo 02 - Classes (sem constructor)
class Estudante {
}
// Criar um objeto ou a instancia
const estudante = new Estudante();
// Inicializar o objeto:
estudante.codigoEstudante = 8967;
estudante.nomeEstudante = 'Prince Lemos';
// Acessar os campos:
console.log('Código do Estudante...: ' + estudante.codigoEstudante);
console.log('Nome do Estudante...: ' + estudante.nomeEstudante);
//Exemplo 03 - Classes (com constructor)
class Estudante_1 {
    // Definir o Construtor
    constructor(codigoEstudante, nomeEstudante) {
        this.codigoEstudante = codigoEstudante;
        this.nomeEstudante = nomeEstudante;
    }
    // Criar o método
    listarEstudante() {
        console.log('Código do Estudante...: ' + this.codigoEstudante);
        console.log('Nome do Estudante...: ' + this.nomeEstudante);
    }
}
// Acessar os campos:
const estudante_1 = new Estudante_1(9845, 'Prince Lemos');
console.log('Lendo o atributo Código do Estudante...: ' + estudante_1.codigoEstudante);
console.log('Lendo o atributo Nome do Estudante...: ' + estudante_1.nomeEstudante);
