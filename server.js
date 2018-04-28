/*
*
*Arquivo: server.js
*Descrição:
*Autor:
*Data: 28/04/2018
*
*/

// configurar setup App:

// Chamadas dos pacotes
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

// Configuração da variável app para usar o 'bodyParser()':
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// Definindo a porta onde será executada a api:
var port = process.env.port || 8000;

// Criando uma instãncia das Rotas via Express:
var router = express.Router();

// Rota de exemplo:
router.get('/', function(req, res){
    res.json({message: 'Funcionando OK! KKK = 3xPotássio'})
});

// Definindo um padrão das rotas prefixadas: '/api'
app.use('/api', router);

//iniciando a aplicação (servidor):
app.listen(port);
console.log("Iniciando a app na porta " + port);
