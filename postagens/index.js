const express = require("express");
const app = express();
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const Post = require('./models/Post')

// Config
    // Template engine
        app.engine('handlebars', handlebars.engine({
            defaultLayout: 'main',
            runtimeOptions: {
                allowProtoPropertiesByDefault: true,
                allowProtoMethodsByDefault: true
            }
        }));
        app.set('view engine' , 'handlebars');
    // Body Parser
        app.use(bodyParser.urlencoded({extended: false}));
        app.use(bodyParser.json());

// Rotas

    app.get('/', function(req, res) {
        Post.findAll({order: [['id', 'DESC']]}).then((p)=>{
            res.render('home', {posts: p});
        });
    });
    
    app.get('/cad', function(req, res){
        res.render('formulario');
    });

    app.get('/deletar/:id', function(req, res){
        Post.destroy({where: {'id': req.params.id}}).then(()=>{
            res.send("Postagem deletada com sucesso!");
        }).catch((e)=>{
            res.send("Erro: " + e.message);
        });
    });

    app.post('/add', function(req, res){
        Post.create({
            titulo: req.body.titulo,
            conteudo: req.body.conteudo
        }).then(()=>{
            res.redirect('/');
        }).catch((e)=>{
            res.send("Houve um erro: " + e.message);
        });
    });


app.listen(8081, ()=>{
    console.log('Servidor rodando na url http://localhost:8081');
});