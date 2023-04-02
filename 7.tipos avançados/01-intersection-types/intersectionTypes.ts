export = {};

//Exemplo 01 - Intersection Types:

interface DadosBancarios {
  conta: number;
  agencia: number;
  banco: string;
}

interface Cliente {
  nome: string;
  email: string;
}

interface DadosPessoaFisica {
  cpf: number;
}

type DadosCliente = DadosBancarios & Cliente & DadosPessoaFisica;

const dadosCliente: DadosCliente = {
  conta: 123456,
  agencia: 123,
  banco: "Banco do Brasil",
  nome: "Monkey D. Luffy",
  email: "luffy@email.com",
  cpf: 92932329,
}

console.log(dadosCliente)

//Exemplo 02 - Intersection Types:

interface IEndereco {
  rua: string;
  bairro: string;
  cidade: string;
}

interface IPessoa {
  nome: string;
  idade: number;
  profissao: string;
}

type IEnderecoPessoa = IEndereco & IPessoa;

const enderecoPessoa: IEnderecoPessoa = {
  nome: 'Monkey D. luffy',
  idade: 36,
  profissao: 'Pirata',
  rua: '',
  bairro: '',
  cidade: '',
};

console.log(enderecoPessoa);
