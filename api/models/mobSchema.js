const mongoose = require('../data/nodeData')

const mobSchema = mongoose.Schema({
    '_id': Number,
    'nome' : String,
    'nivel' : Number,
    'hp' : Number, 
    'defesa' : Number,
    'evasao' : Number,
    'reducaodano': Number,
    'xp': Number,
    'skillxp': Number,
    'karma': Number,
    'conhecimento': Number,
    'url': String,
    'descricao' : String,
    'date' : {type: Date, default: Date.now}
})
const Mob = mongoose.model('Mob', mobSchema)

module.exports = Mob;