"use strict";
//Exemplo 01 - Uso simples de Tuplas em TypeScript
let pessoa;
pessoa = ['Luffy', 'Pirata', 19];
console.log(pessoa);
//Exemplo 02 - Acessando o valor da Tupla
let pessoa1;
pessoa1 = ['Luffy', 'Pirata', 19];
console.log(pessoa1[1]);
//Exemplo 03 - Outra forma de usar Tuplas em TypeScrit (com labels)
let pessoa2 = ['Luffy', 'Pirata', 19];
console.log(pessoa2);
//Exemplo 04 - Usando Tuplas com Spread Operator
let listaFrutas = ['🍍', '🍊', '🍎', '🍉', '🥭'];
console.log(...listaFrutas);
//Exemplo 05 - Lista Heterogênea de Tupla:
let listaFrutas2 = [5, true, ...listaFrutas];
console.log(listaFrutas2);
//Exemplo 06 - Uso de função com Tuplas
function listarPessoas(nomes, idades) {
    return [...nomes, ...idades];
}
let resultado = listarPessoas(['Luffy', 'Zoro'], [19, 21]);
console.log(resultado);
function criarPessoa(...nome) {
    return [...nome];
}
console.log(criarPessoa('Luffy', 'Monkey .D'));
console.log(criarPessoa('Luffy', 'Monkey', ' .D'));
