// importando express 
const express = require ('express')
const app = express()

//configurando as rotas 

app.set('port',process.env.POST||3000)

// Middlewares 

app.use(express.json())


// Configurar cabeçalhos e cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});



//importando rotas

const alunoRouters = require('./router/AlunoRouter')

// rota

app.use('/aluno',alunoRouters)

app.use('/test',(req,res)=>{
    res.send('Testando route')
})
app.use('/',(req,res)=>res.send('Hello World'))




app.listen(app.get('port'),()=>console.log('Iniciado Servidor'))
