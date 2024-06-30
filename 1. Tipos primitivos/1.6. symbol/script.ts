// 1. Declaração e Uso Básico
// Vamos criar e usar symbol em um objeto para garantir que a propriedade seja única.
// Um dos principais benefícios dos symbols é que eles criam propriedades únicas, evitando colisões de nomes de propriedades.

// Declaração de um símbolo
const uniqueId = Symbol('uniqueId');

// Uso do símbolo em um objeto
let obj = {
    [uniqueId]: 123,
    name: 'Objeto de Teste'
};

console.log(obj[uniqueId]);
console.log(obj.name);



// Explicação
// Declaração de symbol: Você pode criar um symbol usando Symbol(description), onde description é opcional e é usado apenas para fins de depuração.
// Propriedades Únicas: Símbolos garantem que as propriedades do objeto sejam únicas, evitando conflitos.
// Símbolos Globais: Symbol.for(key) cria um símbolo global que pode ser acessado de qualquer lugar no seu código usando a mesma chave.
