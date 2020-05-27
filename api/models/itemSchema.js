const mongoose = require('../data/nodeData')

const itemSchema = mongoose.Schema({
    'nome' : String,
    'peso' : Number,
    'preco' : Number,
    'descricao' : String
})
const Item = mongoose.model('Item', itemSchema)

module.exports = Item;