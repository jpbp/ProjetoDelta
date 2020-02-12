const sequelize = require('sequelize')

const sequelize= new sequelize(
    'node', // nome do banco de dados
    'root', // nome do usuario do banco
    '1234', //senha do banco de dados
    {
        host:'localhost',
        dialect:'mysql'
    }
)
module.exports=sequelize
