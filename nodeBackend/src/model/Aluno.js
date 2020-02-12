const Sequelize = require('sequelize')
const sequelize = require('./database')


const nameTable = 'Alunos'
const Aluno = sequelize.define(nameTable,{
    id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    nome: Sequelize.STRING,
    endereco:Sequelize.STRING,
    imagem: {
        type: Sequelize.BLOB('long')
    }
})

module.exports=Aluno