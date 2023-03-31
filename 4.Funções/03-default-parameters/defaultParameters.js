"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Exemplo 01 - Default Parameters
function descontoCompra(preco, desconto = 0.08) {
    return preco * (1 - desconto);
}
console.log(descontoCompra(100)); //92
//Exemplo 02
function exibirMensagem(mensagem, saudar = 'Fala, pessoal!') {
    return saudar + ' ' + mensagem + '!';
}
console.log(exibirMensagem('JavaScript Developers'));
//Exemplo 03
function exibirNome(nome, sobrenome = 'Lemos') {
    return nome + ' ' + sobrenome;
}
const resultado_1 = exibirNome('luffy');
const resultado_2 = exibirNome('luffy', undefined);
const resultado_4 = exibirNome('luffy', 'Monkey D.');
console.log(resultado_1);
console.log(resultado_2);
console.log(resultado_4);
