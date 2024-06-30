# typescript-estudos
Repositório para estudos de TypeScript
Requisitos:
  Conhecimento em javascript
  Pré-processador node instalado
## Para executar os arquivos(Isso é necessário só na hora de criar o projeto ,como esse projeto já está criado e levantado no repositório remoto não é necessário!)
  Instalar o pacote typescript => npm install -g typescript
  Para fazer  a instalação do tsconfig.json e copilar as pastas ts,basta instalar na raiz do arquivo usando o terminal e digitando tsc --init
  E para executar npm i -D sucrase
  Depois só usar o terminal e usar  dessa forma como exemplo npx sucrase-node 1.introdução/app.ts
  instalando a extensao e criando a o arquivo .vscode se n existir e criando o arquivo settings.json e adicionando  dessa forma a instrução lá

  {
    "code-runner.executorMap": {
      "typescript":"npx sucrase-node"
    }
  }
Você pode utilizar o code runner para executar os arquivos individualmente para estudos sem precisar criar projetos ,podendo executar arquivos unitários do tipo ts
