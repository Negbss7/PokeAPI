# Mini Pokédex — Angular + PokéAPI

## Sobre o projeto

Este projeto foi desenvolvido para a atividade prática de Angular, com o objetivo de aprender a consumir dados de uma API e mostrar essas informações em uma página.

A aplicação funciona como uma pequena Pokédex, onde é possível visualizar os 20 primeiros Pokémon e clicar em qualquer um deles para ver mais informações.

Para buscar os dados, utilizei a [PokéAPI](https://pokeapi.co/), que disponibiliza informações dos Pokémon gratuitamente.

## Tecnologias utilizadas

- Angular 20
- TypeScript
- HTML e CSS
- HttpClient
- Angular Router
- PokéAPI

## Como executar

Primeiro, é necessário ter o Node.js instalado no computador.

Depois, basta abrir a pasta do projeto no VS Code, entrar no terminal e executar:

```bash
npm install
```

Esse comando instala as dependências necessárias para o projeto funcionar.

Após a instalação, execute:

```bash
npm start
```

Com a aplicação iniciada, acesse:

http://localhost:4200

Caso o PowerShell bloqueie o comando `npm`, é possível utilizar `npm.cmd install` e `npm.cmd start`.

## Funcionamento da aplicação

Na página inicial, são apresentados os 20 primeiros Pokémon, mostrando o nome, a imagem e o número de cada um.

Ao clicar em um Pokémon, o usuário é direcionado para outra página, onde consegue visualizar informações mais completas, como:

- Nome e imagem
- Número do Pokémon
- Altura
- Peso
- Tipo
- Habilidades

Também foi adicionado um botão para voltar à página inicial e escolher outro Pokémon.

## Consumo da API

Todas as informações são buscadas diretamente da PokéAPI, sem precisar cadastrar os Pokémon manualmente.

Para buscar os 20 primeiros Pokémon, utilizei:

`https://pokeapi.co/api/v2/pokemon?limit=20`

Para consultar os detalhes de um Pokémon específico:

`https://pokeapi.co/api/v2/pokemon/{id}`

As requisições são feitas por meio de um service do Angular, utilizando o HttpClient.

Separei a listagem e a página de detalhes em componentes diferentes para deixar o código mais organizado.

## Organização do projeto

Os principais arquivos são:

- `pokemon.service.ts` — responsável por buscar os dados na API.
- `pokemon-list` — componente que mostra os 20 Pokémon.
- `pokemon-detail` — componente que apresenta os detalhes do Pokémon selecionado.
- `app.routes.ts` — responsável pela navegação entre as páginas.
- `pokemon.model.ts` — contém as interfaces utilizadas para organizar os dados.

## Conclusão

Com essa atividade, consegui colocar em prática o consumo de uma API REST utilizando Angular.

O projeto permitiu trabalhar com requisições HTTP, componentes, services e navegação entre páginas.

A aplicação busca as informações diretamente da PokéAPI e permite que o usuário consulte diferentes Pokémon de forma simples.
