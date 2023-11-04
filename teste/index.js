const Sequelize = require('sequelize');
const sequelize = new Sequelize('caelum', 'root', 'zepeto222', {
    host: 'localhost',
    dialect: 'mysql'
});

sequelize.authenticate().then(()=>{
    console.log("Conectado com sucesso");
}). catch((e)=>{
    console.log("Falha ao se conectar: " + e.message);
});