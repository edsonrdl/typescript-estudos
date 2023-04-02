"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function exibirNome(pessoa) {
    return `
    Nome...: ${pessoa.nome}
    Sobrenome...: ${pessoa.sobrenome}
    Idade...: ${pessoa.idade}
  `;
}
const luffy = {
    nome: 'Luffy',
    sobrenome: 'Moneky D.',
    idade: 19,
};
console.log(exibirNome(luffy));
const livro = {
    titulo: 'Clean Code',
    autor: 'Robert C. Martin',
};
console.log(livro);
const carro = {
    modelo: 'Fusca',
    ano: 1969,
};
// carro.modelo = 'Fusca 2.0';
console.log(carro);
class Gato {
    constructor(nome, idade, estaVivo) {
        this.nome = nome;
        this.idade = idade;
        this.estaVivo = estaVivo;
    }
    comer(tipoComida) {
        console.log(`O gato ${this.nome} está comendo ${tipoComida}`);
    }
}
const gato = new Gato('Totó', 10, true);
console.log(gato);
gato.comer('Ração');
