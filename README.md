# AZ-QUESTIONS-APP

> Deploy in https://az-questions-app.herokuapp.com/

Este é um app com questões de simulados das prova AZ 900 da azure. As questões foram coletadas no seguintes sites:
https://www.itexams.com/exam/AZ-900
https://www.examtopics.com/exams/microsoft/az-900/view/
https://www.dumpsolutions.com/AZ-900-dumps/

## Versão 1.0

### Roteiro de Implementação

> npm init
> npm install --save express
> npm install --save password-generator (Utilizado apena para teste)
> npm uninstall -S password-generator
> npm install --save-dev nodemon

#### Config Scripts

"scripts": {
  "start": "node index.js",
  "dev": "nodemon index.js"
},

#### Create Index.js

Index.js is a server file, thats run in http://localhost:5000

#### Teste API

API runs in http://localhost:5000/api/passwords


## Deploy Heroku
> Referência: https://www.freecodecamp.org/news/how-to-deploy-a-nodejs-app-to-heroku-from-github-without-installing-heroku-on-your-machine-433bec770efe/

> Hospedar o app no github.
https://github.com/Jonathan-geo/az-questions-app

> Criar app no Heroku: Create new app.

> Ir na opção: Connect to GitHub.

> Encontrar e conectar com o GitHub repository.

> Enable Automatic Deploys.

> Ir em  Settings, Buildpacks e clicar em  “Add buildpack”.

> Selecionar nodejs.

> Ir na aba Deploy e ir em Deploy Branch.

> Na aba Activity ver o log de sucesso.




## Versão 2.0

### Simulando Banco de Dados NoSQL

> npm i --save body-parser
> npm i --save fs-extra
> npm i --save jsonfile (https://www.npmjs.com/package/jsonfile)

### Referencias

> https://medium.com/@febatista107/como-converter-os-dados-de-uma-requisi%C3%A7%C3%A3o-com-o-body-parser-2b5b93100f00

> https://flaviocopes.com/node-writing-files/


## Versão 3.0

### Usando o SQLite 

> Criar um arquivo.db na solução 

> npm i --save sqlite3

> utilizar o SQLite online para criar as tables: https://sqliteonline.com/

> melhor referência: https://github.com/Carleon/node-js-sqlite

```sql
CREATE TABLE thistorico (
	id INTEGER PRIMARY KEY,
	nome TEXT NOT NULL,
	tdata TEXT NOT NULL,
  acerto INT NOT NULL,
  erro INT NOT NULL
);
```







## Versão 3.0

#### React App

> npx create-react-app client

#### Config Proxy

Add "proxy": "http://localhost:5000" in package.json in client directory.
This goes in client/package.json, not in the Express app’s package.json

Like this: 

```json
{
  "name": "client",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "react": "^16.3.2",
    "react-dom": "^16.3.2",
    "react-scripts": "1.1.4"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test --env=jsdom",
    "eject": "react-scripts eject"
  },
  "proxy": "http://localhost:5000"
}

```





#### References 
```javaScript
{
    "https://daveceddia.com/deploy-react-express-app-heroku/"
    "https://github.com/dceddia/rando"
}
```