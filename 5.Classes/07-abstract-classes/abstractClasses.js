"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Funcionario {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
    get retornarNomeCompleto() {
        return `${this.nome} ${this.sobrenome}`;
    }
    emitirContraCheque() {
        return `${this.retornarNomeCompleto} - Salário: ${this.retornarSalario()}`;
    }
}
class FuncionarioCLT extends Funcionario {
    constructor(nome, sobrenome, salario) {
        super(nome, sobrenome);
        this.salario = salario;
    }
    retornarSalario() {
        return this.salario;
    }
}
class FuncionarioPJ extends Funcionario {
    constructor(nome, sobrenome, valorHora, horasTrabalhadas) {
        super(nome, sobrenome);
        this.valorHora = valorHora;
        this.horasTrabalhadas = horasTrabalhadas;
    }
    retornarSalario() {
        return this.valorHora * this.horasTrabalhadas;
    }
}
const Luffy = new FuncionarioCLT('Luffy', 'Monkey D.', 18000);
const ace = new FuncionarioPJ('Ace', 'Portgas', 150, 160);
console.log(Luffy.emitirContraCheque());
console.log(ace.emitirContraCheque());
