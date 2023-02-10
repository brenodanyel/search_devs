# [Search Devs](https://search-devs-omega.vercel.app)
Search Devs é uma ferramenta que permite encontrar desenvolvedores no Github com facilidade. Basta inserir o nome de usuário do desenvolvedor e você terá acesso a todas as informações e projetos publicados por ele em sua conta do Github.

_____

## Desenvolvimento
##### Requisitos:
- [NodeJS](https://nodejs.org/en/)

##### Para rodar o projeto localmente, siga os passos abaixo:
- Clone o repositório: `git clone git@github.com:brenodanyel/search_devs.git`
- Entre na pasta do projeto: `cd search_devs`
- Instale as dependências: `npm install`
- Inicie o servidor de desenvolvimento: `npm run dev`

##### Se desejar fazer a build do projeto, basta seguir os seguintes passos:

- Clone o repositório: `git clone git@github.com:brenodanyel/search_devs.git`
- Entre na pasta do projeto: `cd search_devs`
- Instale as dependências: `npm install`
- Execute o comando para fazer a build: `npm run build`

_____

## Tecnologias Utilizadas
- React
- TypeScript
- MUI (Material UI)
- Axios
- React Router DOM

____
## Estrutura do projeto:
##### O projeto está organizado na seguinte estrutura de pastas, para facilitar o entendimento e a manutenção.

- /src
  - /Components: armazena componentes que são utilizados em várias páginas do projeto.
  - /Pages: pasta que contém todas as páginas da aplicação.
    - /NomeDaPagina: pasta individual que armazena os recursos relacionados a uma página específica.
      - /Components: armazena os componentes específicos da página.
      - /Hooks: armazena os hooks utilizados na página.
      - /Mocks: armazena os mocks utilizados na página.
      - /Types: armazena os tipos utilizados na página.
      - /...: armazena outros recursos utilizados na página.
      - index.tsx: arquivo principal da página, onde está o conteúdo principal.
    - Ou, se for uma página simples, o arquivo NomeDaPagina.tsx pode ser armazenada diretamente, sem a necessidade de uma nova pasta.
    - Obs: Essa lógica também pode ser utilizada em casos de componentes individuais mais complexos.
  - /Providers: armazena componentes que servem como encapsuladores para outros componentes, passando propriedades para eles.
  - /Services: armazena funções e recursos auxiliares que podem ser utilizados em várias partes do projeto.
  
