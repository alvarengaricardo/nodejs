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
var mongoose = require('mongoose');
var Produto = require('./app/model/produto');

//URI: mlab
mongoose.connect('mongodb://usuario:camboja@ds014118.mlab.com:14118/node-crud-api');

//banco local: MongoDb
//mongoose.connect('mongodb://localhost/node-crud-api');

// Configuração da variável app para usar o 'bodyParser()':
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// Definindo a porta onde será executada a api:
var port = process.env.port || 8000;

// Rotas da API
// ==========================



// Criando uma instãncia das Rotas via Express:
var router = express.Router();

router.use(function(req, res, next){
    console.log('Acesso rota.');
    next();
});

// Rota de exemplo:
router.get('/', function(req, res){
    res.json({message: 'Funcionando ok.'})
});


//API´s
//===============================================





// Definindo um padrão das rotas prefixadas: '/api'
app.use('/api', router);

//iniciando a aplicação (servidor):
app.listen(port);
console.log("Iniciando a app na porta " + port);
