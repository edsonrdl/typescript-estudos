//Exemplo 01 - Interfaces com extends
interface Animal_01 {
  nome: string;
  idade: number;
  porte: string;
}

interface Cachorro_01 extends Animal_01 {
  raca: string;
}

const cachorro: Cachorro_01 = {
  nome: 'Prince',
  idade: 2,
  porte: 'Médio',
  raca: 'Spiz Alemao',
};

console.log(cachorro);

//Exemplo 02 - Extensão de Múltiplas Interfaces

interface Cachorro {
  nome: string;
}

interface Gato {
  nome: string;
}

interface Animal extends Cachorro, Gato {
  idade: number;
}

const animal: Animal = {
  nome: 'Farofa',
  idade: 5,
};

console.log(animal);

// ==> Exemplo 03 - Uso do Omit

interface Funcionario {
  id: number;
  nome: string;
  salario: number;
}

interface Desenvolvedor extends Omit<Funcionario, 'id' | 'salario'> {
  id: string;
  recompensa: string;
  funcao: string;
}

const desenvolvedor: Desenvolvedor = {
  id: '123',
  nome: 'Moneky D. Luffy',
  recompensa: '30.0000.000',
  funcao: 'Capitão',
}

console.log(desenvolvedor)

