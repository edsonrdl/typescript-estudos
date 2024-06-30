//Exemplo 01: Null

let varNull = null;

let varUndefined;

console.log(`O vaor da variável varUndefined é :${varUndefined}`);
console.log(`O Tipo do valor da variável varUndefined é : ${typeof varUndefined}`);

//Diferenças e Similaridades: Null vs Undefined

console.log('Operadção lógica de valor:', null == undefined);
//O operador de igualdade abstrata (==) compara valores após converter os tipos para um tipo comum. null e undefined são considerados iguais neste contexto porque ambos representam "ausência de valor".
console.log('Operadção lógica de tipo e valor:', null === undefined);
//O operador de igualdade estrita (===) compara valores sem realizar qualquer conversão de tipo. Como null é um tipo object e undefined é um tipo undefined, eles não são considerados iguais.