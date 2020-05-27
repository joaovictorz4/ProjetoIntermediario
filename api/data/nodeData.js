const mongoose = require('mongoose')

mongoose.connection.on('connected', ()=>{
    console.log("Conexão com MongoDB realizada com sucesso!")
})

var options = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

mongoose.connect('mongodb://localhost:27017/teste', options).catch((err)=>{
    console.log(err)
})

module.exports = mongoose