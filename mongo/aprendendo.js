const mongoose = require("mongoose")

// Configurando o mongoose
    mongoose.Promise = global.Promise;
    mongoose.connect("mongodb://localhost/aprendendo",{
        useNewUrlParser: true
    }).then(()=>{
        console.log("Servidor conectado ao mongoDB")
    }).catch((e)=>{
        console.log("Erro: " + e.message)
    })

// Model - Usuários
// Definindo o model
const UsuarioSchema = mongoose.Schema({
        nome: {
            type: String,
            require: true
        },
        sobrenome: {
            type: String,
            require: true
        },
        email: {
            type: String,
            require: true
        },
        idade: {
            type: Number,
            require: true
        },
        pais: {
            type: String
        }
    })

// Colection
    const users = mongoose.model('usuarios', UsuarioSchema)

    users.create({
        nome: "Joao",
        sobrenome: "Ramos",
        email: "joao@joao.com",
        idade: 24,
        pais: "Brasil"
    }).then(() => {
        console.log ("Usuario criado!")
    }).catch((e)=>{
        console.log("Erro: " + e.message)
    })
