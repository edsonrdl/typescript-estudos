//Exemplo 01: Tipo Any
const a: any = 34;
const b: any = ['Luffy'];

const result = a + b;
console.log(result);

//Exemplo 02: Quando o tipo 'any' é inferido implícitamente
/*let frase;
frase = 'Oi, pessoal! Tudo bem?';

console.log(frase);*/

//Exemplo 03: Quando devemos usar o tipo any?!

const formulario: { [campoFomulario: string]: any } = {
  nome: 'Luffy',
  sobrenome: 'Monkey .D',
  idade: 19,
};

console.log(formulario);
