### Meetapp - Uma plataforma para comunidade

*O Meetapp é uma plataforma onde a comunidade pode cadastrar eventos (meetups) e se inscrever para participar destes.*

O objetivo desse projeto foi o desenvolvimento do backend para gerenciamento de todo o sistema e um site para os organizadores de meetups e um app mobile para os usuários.

Ah e é claro que eu não poderia deixar de citar que é um projeto desenvolvido como desafio de certificação do Bootcamp da Rocketseat (GoStack).

### Tecnologias utilizadas:
##### :sparkles: JavaScript foi a linguagem utilizada em todo o projeto :revolving_hearts:

E pra isso é claro que foi utilizado:
* Node.js no backend, com um banco de dados postgreSQL e um Redis (para gerenciamento de fila)

* ReactJS no frontend, com Redux + Redux Saga + Redux Sauce e Immutable.js + Styled Components + UnForm :revolving_hearts:

* React Native no mobile, com Redux + Redux Saga + Redux Sauce e Immutable.js + Styled Components

### Primeiros passos para utilização

* Tenha instalado Node.js v10+
* Também npm ou Yarn :revolving_hearts:
* SDK android e jdk-8+ (para buildar o app mobile android)
* Cocoapods se estiver no Mac para buildar o app mobile ios
* um banco de dados postgreSQL e um Redis ambos configurados

* A primeira coisa é instalar as dependências
  
```js
cd backend && yarn
cd frontend && yarn
cd Meetapp && yarn
```

* Configurar as portas tcp utilizadas pelos bancos e backend em seus devidos lugares:
  * backend/.env
  * frontend/src/services/api/index.js
  * Meetapp/src/services/api/index.js

* Uma coisinha, procure por `http://localhost:3333/` no frontend e no Meetapp e substitua pela url que o seu backend (api) está escutando.

* Não pode esquecer de executar as migrations para o banco de dados
  * Cria um banco de dados com o nome que quiser e adicione esse nome no arquivo `.env` em `DB_NAME`

* Depois disso tudo, agora é só rodar.

```js
cd backend && npx sequelize db:migrate
cd backend && yarn start
cd frontend && yarn start
cd Meetapp && yarn start
cd Meetapp && yarn react-native run-android ou yarn react-native run-ios
```


***

*Se tudo ocorreu bem, agora o sistema inteiro esta rodando e é só aproveitar*