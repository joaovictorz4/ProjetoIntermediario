const mongoose = require('../data/nodeData')

const mobSchema = mongoose.Schema({
    'nome' : String,
    'nivel' : Number,
    'defesa' : Number,
    'evasao' : Number,
    'Hp' : Number, 
    'descricao' : String
})
const Mob = mongoose.model('Mob', mobSchema)

module.exports = Mob;