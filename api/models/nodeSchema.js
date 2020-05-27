const mongoose = require('../data/nodeData')

const nodeSchema = mongoose.Schema({
    'nome' : String,
    'regiao' : String,
    'custo' : String,
    'gerenteDeBase' : String,
    'date' : {type: Date, default: Date.now}
})
const Node = mongoose.model('Node', nodeSchema)

module.exports = Node;







