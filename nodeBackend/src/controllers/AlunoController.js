const fs = require('fs')
const controllers = {}

// importando modelo e sequelize


const sequelize = require('../model/database')
const Aluno = require('../model/Aluno')


controllers.datatest= async(req,res)=>{
    const response = await sequelize.sync().then(function(){
        fs.openSync('C:\desafioDelta.jpeg')
        const img = fs.readFileSync('C:\desafioDelta.jpeg')
        console.log('foi')
        Aluno.create({
            id:8,
            nome:'João Paulo',
            endereco:'Rua joaquim manoel',
            imagem: img
        }).catch(error=>{
            return error
        })
        

        const data= Aluno.findAll()
        return data
    }).catch(error=>{
        console.log(error)
        return error
    })
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