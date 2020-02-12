const Sequelize = require('sequelize')

const sequelize= new Sequelize(
    'node', // nome do banco de dados
    'root', // nome do usuario do banco
    '1234', //senha do banco de dados
    {
        host:'localhost',
        dialect:'mysql'
    }
)
sequelize.authenticate().then(()=>console.log("banco de dados, conectado com sucesso")).catch((error)=>console.log("falha ao conectar com o banco!"+error))
module.exports=sequelize
