const mongoose = require('../data/nodeData')

const classeSchema = mongoose.Schema({
    'nome' : String,
    'nivel' : Number
})
const Classe = mongoose.model('Classe', classeSchema)

module.exports = Classe;