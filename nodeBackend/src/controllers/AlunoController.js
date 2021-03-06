const fs = require('fs')
const controllers = {}

// importando modelo e sequelize


const sequelize = require('../model/database')
const Aluno = require('../model/Aluno')


sequelize.sync()

controllers.list=async(req,res)=>{
    const data = await Aluno.findAll().then(function(data){
        return data
    }).catch(error=>{
        return error
    }
    )
    res.json({sucess:true,data:data})
}

controllers.create=async(req,res)=>{
    // DATA 
    const {nome,endereco,imagem}= req.body
    
    //create
    
    const data = await Aluno.create({
        nome:nome,
        endereco:endereco,
        imagem:imagem
    }).then(function(data){
        return data
    }).catch(error=>{
        console.log(error)
        return error
    })
    res.status(200).json({
        sucess:true,
        mensagem:'Salvo com sucesso',
        data:data
    })
}


//teste do prograa
controllers.datatest= async(req,res)=>{
    const response = await sequelize.sync().then(function(){
        fs.openSync('C:\\john.jpeg')
        const img = fs.readFileSync('C:\\john.jpeg')
        console.log('foi')
        Aluno.create({
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
    res.json({sucess:true, data:response})
}
// controllers.test = (req,res)=>{
//     const data = {
//         name:'João Paulo',
//         age:22,
//         email:"jpbp@gmail.com"
//     }
//     console.log('Executando do controle')
//     res.json(data)
// }
module.exports=controllers