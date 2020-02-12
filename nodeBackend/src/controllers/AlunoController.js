const controllers = {}

// importando modelo e sequelize

const sequelize = require('../model/database')
const Aluno = require('../model/Aluno')

controllers.teste=(req,res)=>{
    const response = sequelize.sync().then(()=>{
        const data = Aluno.findAll()
        return data
    }).catch(error=>error)
    res.json(response) 
}

controllers.test = (req,res)=>{
    const data = {
        name:'João Paulo',
        age:22,
        email:"jpbp@gmail.com"
    }
    console.log('Executando do controle')
    res.json(data)
}
module.exports=controllers