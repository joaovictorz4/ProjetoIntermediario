const mongoose = require('../data/nodeData')

const classeSchema = mongoose.Schema({
    'nome' : String,
    'armaPrincipal': String,
    'armaSecundaria': String,
    'atributoEssencial': String,
    'date' : {type: Date, default: Date.now}
})
const Classe = mongoose.model('Classe', classeSchema)

module.exports = Classe;