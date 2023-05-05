"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// ==> Variáveis [Type Annotations]
let nome = 'Luffy';
console.log(nome);
// ==> Arrays [Type Annotations]
let piratas = ['Zoro', 'Luffy', 'Kaido', 'Sanji', 'Barba branca'];
console.log(piratas);
// ==> Objetos [Type Annotations]
let pessoa;
let pessoa1 = pessoa;
let pessoa2 = pessoa;
pessoa1 = { nome: 'Luffy', idade: 19 };
pessoa2 = { nome: 'Zoro', idade: 21 };
console.log("Pessoa:", pessoa1);
console.log(`Pessoa: ${pessoa2.nome} ${pessoa2.idade}`); //Com template ele se refere ao objeto então precisa passar o objeto e a propriedade
// ==> Functions [Type Annotation]
function multiplicarNumero(num1, num2) {
    return num1 * num2;
}
console.log("Resultado da operação :" + multiplicarNumero(2, 5));
