//iniciamento das variaveis (pacotes instalados)
var express = require ('express');
var app = express();
var path = require('path');
var request = require ('request');
var bodyParser = require ('body-parser');

express()
  .use('/public', express.static(path.join(__dirname, 'static')))
  .set('static', path.join(__dirname, 'static'))
  .get('/', (req, res) => res.render('/static/index.html'))

//iniciamento do bodyparse (comandos do express para usar o path)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));
//static -> pasta com html, javascript, imagens
//public -> pasta usada para o client
app.use('/public', express.static(path.join(__dirname, 'static')));
app.use('/scripts', express.static(path.join(__dirname, 'node/bootstrap/dist')))

//homepage index.html
app.get('/', function(req,res){
   res.sendFile(path.join(__dirname + '/static/index.html'));  
});

var uri = 'https://api.fortnitetracker.com/v1/profile/';
var apikey = process.env.APIKEY;

//https://api.fortnitetracker.com/v1/profile/{platform}/{epic-nickname}
//platform = pc, xbl, psn

//post para jQuery postar a informação sobre o usuário (API)
app.post('/', function(req,res){
    console.log(req.body);
    request.get(uri + req.body.opcaoPlat + '/' + req.body.campoNickname,
    {
        headers : {
            'TRN-Api-Key': apikey           
        }}, function (error,response,body){
            console.log(body); 
            res.json(body);
            //manda os dados de volta para o body para o user ver         
    });
});
var port = process.env.PORT || 5000; //port de um servidor externo
app.listen(port);