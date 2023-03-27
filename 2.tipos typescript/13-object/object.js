"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Exemplo 01 -> Exemplo básico do uso do Type Object
const pessoa = {
    nome: 'Luffy',
    sobrenome: 'Monkey D.',
    idade: 19,
    funcao: 'Capitão'
};
console.log(pessoa);
//Exemplo 02 -> object como parâmetros de função (eles podem ser anônimos)
function onboarding01(funcionario) {
    return 'Seja bem-vinda ' + funcionario.nome;
}
console.log(onboarding01({ nome: 'Monkey D. Luffy' }));
function onboarding02(pessoa) {
    return ('Seja bem-vinda ' +
        pessoa.nome +
        '!' +
        ' Sua função aqui na empresa será ' +
        pessoa.funcao +
        '.');
}
console.log(onboarding02({ nome: 'Monkey D. Luffy', funcao: 'Capitão' }));
function onboarding03(pessoa) {
    return ('Seja bem-vinda ' +
        pessoa.nome +
        '!' +
        ' Sua função aqui no bando será ' +
        pessoa.funcao +
        '.' +
        ' Você trabalhará como pirata ' +
        pessoa.linguagem +
        '.');
}
console.log(onboarding03({ nome: 'Monkey D. Luffy', funcao: 'Capitão', linguagem: 'JavaScript/Typescript' }));
function onboarding04(pessoa) {
    return ('Seja bem-vinda ' +
        pessoa.nome +
        '!' +
        ' Sua função aqui na empresa será ' +
        pessoa.funcao +
        '.' +
        ' Você trabalhará com a linguagem ' +
        pessoa.linguagem +
        '.');
}
console.log(onboarding04({ nome: 'Monkey D. Luffy', funcao: 'Capitão', linguagem: 'JavaScript/Typescript' }));
function onboarding05(pessoa) {
    return ('Seja bem-vinda ' +
        pessoa.nome +
        '!' +
        ' Sua função aqui na empresa será ' +
        pessoa.funcao +
        '.' +
        ' Você trabalhará com a linguagem ' +
        pessoa.linguagem +
        '.' +
        ' Seu e-mail será ' +
        pessoa.email);
}
console.log(onboarding05({
    nome: 'Monkey D. Luffy',
    funcao: 'Capitão',
    linguagem: 'JavaScript/Typescript',
    email: 'monkeyDLuffy@gmail.com'
}));
const filha = {
    nome: 'Luffy',
    sobrenome: 'Monkey D.',
    idade: 19
};
console.log(filha);
const usuario = {
    nome: 'Monkey D. luffy',
    email: 'monkeyDLuffy@gmail.com'
};
const admin = {
    nome: 'Monkey D. luffy',
    email: 'monkeyDLuffy@gmail.com',
    admin: true
};
function acessarSistema(usuario) {
    return usuario;
}
console.log(acessarSistema(usuario));
console.log(acessarSistema(admin));
/*function acessarSistema(usuario: Usuario): Usuario {
  return usuario;
};*/
// console.log(acessarSistema(usuario));
