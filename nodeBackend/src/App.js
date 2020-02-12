// importando express 
const express = require ('express')
const app = express()

//configurando as rotas 

app.set('port',process.env.POST||3000)

// Middlewares 

app.use(express.json())


app.use('/test',(req,res)=>{
    res.send('Testando route')
})
app.use('/',(req,res)=>res.send('Hello World'))




app.listen(app.get('port'),()=>console.log('Iniciado Servidor'))
