## Sobre o Projeto

O **FavMovies** é um sistema de gerenciamento de catálogos de filmes dos estudios Marvel, Ghibli e Pixar. 

Onde receberemos cadastros de títulos(filmes e séries) referenciando cada estúdio criador. 

```
"Relacionamento" no MongoDB? Como é isso?
- ref no model
- populate do find (eager loading)
```

## Tecnologias que vamos usar:
| Ferramenta | Descrição |
| --- | --- |
| `javascript` | Linguagem de programação |
| `nodejs` | Ambiente de execução do javascript|
| `express` | Framework NodeJS |
| `dotenv` | Dependência para proteger dados sensíveis do projeto|
| `mongoose` | Dependência que interage com o MongoDB para a conexão da database, criação do model e das collections|
| `nodemon` | Dependência que observa as atualizações realizadas nos documentos para rodar o servidor automaticamente|
| `npm ou yarn` | Gerenciador de pacotes|
| `MongoDb` | Banco de dado não relacional orietado a documentos|
| `MongoDb Compass ou Robo 3T` | Interface gráfica para verificar se os dados foram persistidos|
 `Insomnia ou Postman` | Interface gráfica para realizar os testes|

<br>
<br>

## 📁 Arquitetura 

```
 📁 FavMovies
   |
   |-  📁 src
   |    |
   |    |- 📁 data
   |         |- 📄 database.js
   |
   |    |- 📁 controllers
   |         |- 📄 tituloController.js
   |         |- 📄 estudioController.js
   |
   |    |- 📁 models
   |         |- 📄 titulo.js
   |         |- 📄 estudio.js
   |
   |    |- 📁 routes
   |         |- 📄 tituloRoutes.js 
   |         |- 📄 estudioRoutes.js 
   |
   |
   |- 📄 .env
   |- 📄 .env.example
   |- 📄 .gitignore
   |- 📄 package
   |- 📄 server.js

```

<br>
<br>

## Contrato
Acesse o board para conferir as informações de forma visual: https://miro.com/app/board/o9J_lA7Nns8=/

### Requisitos
TITULOS - ROTAS
{GET} 
- [x]  **"/titulos/marvel"** Deverá retornar todos os títulos com o estudio Marvel
- [x]  **"/titulos/ghibli"** Deverá retornar todos os títulos com o estudio Ghibli
- [x]  **"/titulos/pixar"** Deverá retornar todos os títulos com o estudio Pixar
- [x] **"/titulos"** Deverá retornar todos os títulos cadastrados, cada um fazendo referencia ao seu respectivo estudio
- [x] **"/titulos/[ID]"** Deverá retornar os estudios cadastrados por ID

{POST}
- [x]  **"/titulos"**  Deverá criar um título 

{PATCH}
- [ ]  **"/titulos/[ID]"** Deverá alterar informação específica dentro de um titulo por id específico e retorna o título alterado

{DELETE}
- [ ]  **"/titulos/[ID]"** Deverá deletar titulo por id específico e retorna mensagem amigável

ESTUDIOS - ROTAS
{GET}
- [x]  **"/estudios"** Deverá retornar todos os estudios cadastrados
- [ ] **"/estudios/[ID]"** Deverá retornar os estudios cadastrados por ID

{POST}
- [x]  "**/estudios**" Deverá criar um estudio

{PATCH}
- [x]  **"/estudios/[ID]"** Deverá alterar informação específica dentro de um estudio por id específico e retorna o título alterado

{DELETE}
- [ ]  **"/estudios/[ID]"** Deverá deletar estudio por id específico e retorna mensagem amigável


### Regras de negócio

- [x]  Não deverá ser possível criar estudio com o mesmo nome
- [ ]  Não deverá ser possível criar título com o mesmo nome
- [x]  Para criar um novo título, deverá vincular no momento da criação a um estudio já existente no sistema, utilizando o numero do id do estudio correspondente no corpo da requisição

<br>
<br>

### Dados para Collection Estudios

- id: autogerado e obrigatório
- nome: texto e obrigatório
- criadoEm: data gerada automaticamente e obrigatório


### API deve retornar seguinte JSON:

```jsx
[
    {
    "criadoEm": "2021-06-05T01:27:40.886Z",
    "_id": "60bad38c8c299c285d2685e7",
    "nome": "Marvel",
    "__v": 0
    },
    {
    "criadoEm": "2021-06-05T01:27:40.886Z",
    "_id": "60bad33d8c299c285d2685e5",
    "nome": "Ghibli",
    "__v": 0
  },
  {
    "criadoEm": "2021-06-05T01:27:40.886Z",
    "_id": "60bad33d8c299c285d2685e5",
    "nome": "Pixar",
    "__v": 0
  }
]
```
<br>
<br>

### Dados para Collection Titulos

- id: autogerado e obrigatório
- nome: texto e obrigatório
- genero: texto e obrigatório
- descricao: texto e obrigatório
- criadoEm: data gerada automaticamente e obrigatório
- estudio: referencia do estudio cadastrado previamente obrigatório


### API deve retornar seguinte JSON:

```jsx
[
  {
    "criadoEm": "2021-06-05T01:27:40.892Z",
    "_id": "60bad3568c299c285d2685e6",
    "nome": "Spirited Away",
    "genero": "romance",
    "descricao": "SPIRITED AWAY é uma fantasia maravilhosa sobre uma jovem garota, Chihiro, presa em um estranho mundo novo de espíritos. Quando seus pais passam por uma transformação misteriosa, ela deve invocar a coragem que ela nunca soube que tinha para se libertar e retornar sua família para o mundo exterior. Uma história inesquecível e cheia de criatividade, SPIRITED AWAY o levará em uma jornada além da sua imaginação.",
    "estudio": {
      "criadoEm": "2021-06-05T01:27:40.886Z",
      "_id": "60bad33d8c299c285d2685e5",
      "nome": "Ghibli",
    }
  }
]
```