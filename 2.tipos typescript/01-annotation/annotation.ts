export { };
// ==> Variáveis [Type Annotations]
let nome: string = 'Luffy';
console.log(nome);

// ==> Arrays [Type Annotations]
let piratas: string[] = ['Zoro', 'Luffy', 'Kaido', 'Sanji', 'Barba branca'];
console.log(piratas);

// ==> Objetos [Type Annotations]

let pessoa: {
  nome: string;
  idade: number;
};

let pessoa1=pessoa
let pessoa2=pessoa

pessoa1 = { nome:'Luffy', idade: 19 };
pessoa2={ nome:'Zoro', idade: 21 }

console.log("Pessoa:",pessoa1);
console.log(`Pessoa: ${pessoa2.nome} ${pessoa2.idade}`);//Com template ele se refere ao objeto então precisa passar o objeto e a propriedade


// ==> Functions [Type Annotation]
function multiplicarNumero(num1: number, num2: number) {
  return num1 * num2;
}

console.log("Resultado da operação :" + multiplicarNumero(2,5));
