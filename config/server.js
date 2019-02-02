//importar módulos a serem usados no projeto
var express = require('express'); //framework express
var consign = require('consign'); //módulo consign (autoloader)
var bodyParser = require('body-parser'); //módulo body-parser (analisador body da msg)
var expressValidator = require('express-validator'); //módulo express-validator (validações)

//iniciar o objeto express
var application = express();

//configurando variáveis "view engine" e "views" do express
application.set('view engine', 'ejs');
application.set('views', './app/views');

//configurando middleware express.static
application.use(express.static('./app/public'));

//configurando middleware body-parse (permite recuperar as requisições em json)
application.use(bodyParser.urlencoded({extended: true}));

//configurando middleware express-validator
application.use(expressValidator());

//configurando consign (autoload de rotas, models, views e controllers para obj application)
consign()
    .include('app/routes')
    .then('app/models')
    .then('app/controllers')
    .into(application);

//exportando o objeto app
module.exports = application;