const express = require('express')
const router = express.Router()
router.get('/save',(req,res)=>res.json({status:'Aluno salvo'}))

module.exports=router