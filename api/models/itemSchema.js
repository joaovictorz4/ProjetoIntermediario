const mongoose = require('../data/nodeData')

const itemSchema = mongoose.Schema({
    'id': Number,
    'nome' : String,
    'peso' : Number,
    'precoCompra' : Number,
    'precoVenda' : Number,
    'descricao' : String,
    'date' : {type: Date, default: Date.now}
})
const Item = mongoose.model('Item', itemSchema)

module.exports = Item;