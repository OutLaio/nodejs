const Sequelize = require('sequelize');
const sequelize = new Sequelize('caelum', 'root', 'zepeto222', {
    host: 'localhost',
    dialect: 'mysql'
});

const Postagem = sequelize.define('postagens',{
    titulo:{
        type: Sequelize.STRING
    },
    conteudo:{
        type: Sequelize.TEXT
    }
});

Postagem.create({
    titulo: "PRIMEIRO",
    conteudo: "Inserindo dados com js"
});

const Usuario = sequelize.define('usuarios',{
    nome: {
        type: Sequelize.STRING
    },
    sobrenome: {
        type: Sequelize.STRING
    },
    idade: {
        type: Sequelize.INTEGER
    },
    email: {
        type: Sequelize.STRING
    }
});

Usuario.create({
    nome: "Laio",
    sobrenome: "Rodrigues",
    idade: 23,
    email: "laio@laio.com"
});


