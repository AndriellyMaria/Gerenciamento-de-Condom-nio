const mysql = require('mysql2');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(express.static('public'));

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'Gerencia_Condominio',
    port:3306
}); 

connection.connect(function(err){
    if(err){
        console.error('Erro', err);
        return
    }

    console.log("Conexão ok");
});

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json())

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html")
    });

app.get("/home", function(req, res){
        res.sendFile(__dirname + "/public/html/home.html")
        });

app.get("/cad_bloco", function(req, res){
            res.sendFile(__dirname + "/public/html/cad-produto.html")
        });
    
        app.listen(4000, function(){ console.log("Servidor rodando na url http://localhost:4000")
        });

        //precisa ajustar algumas coisas e consertar alguns erros antes de continuar