"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Exemplo 01
class Animal {
    mover(distancia = 0) {
        console.log(`Animal se moveu...: ${distancia} metros.`);
    }
}
class Cachorro extends Animal {
    latir() {
        console.log('Au, Au!');
    }
}
const cachorro = new Cachorro();
cachorro.latir();
cachorro.mover(10);
cachorro.latir();
// ==> Exemplo 02
class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
    retornarNomeCompleto() {
        return `${this.nome} ${this.sobrenome}`;
    }
    apresentarPessoa() {
        return `Meu nome é ${this.nome} ${this.sobrenome}.`;
    }
}
class Funcionario extends Pessoa {
    constructor(nome, sobrenome, funcao) {
        super(nome, sobrenome);
        this.funcao = funcao;
    }
    retornarNome_02() {
        return super.apresentarPessoa() + `E, sou ${this.funcao}`;
    }
}
const funcionario = new Funcionario('Glaucia', 'Lemos', 'Developer Advocate');
console.log(funcionario.apresentarPessoa());
console.log(funcionario.retornarNomeCompleto());
console.log(funcionario.retornarNome_02());
