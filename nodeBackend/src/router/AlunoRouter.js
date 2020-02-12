const express = require('express')
const router = express.Router()
const AlunosController=require('../controllers/AlunoController')

router.get('/list',AlunosController.list)

//teste do programa
// router.get('/datatest',AlunosController.datatest)
// router.get('/test',AlunosController.test)
// router.get('/save',(req,res)=>res.json({status:'Aluno salvo'}))

module.exports=router