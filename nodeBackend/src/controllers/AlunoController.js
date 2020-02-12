const controllers = {}

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