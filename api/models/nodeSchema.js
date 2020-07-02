const mongoose = require('../data/nodeData')


/*const subNoSchame = mongoose.Schema({
    'id': Number,
    'nome' : String,
    'custoCp' : number,
    'noPrincipal': String,
    'gerenteDeBase' : String,
    'quantidade': number,
    'date' : {type: Date, default: Date.now}
})*/

// TUDO MINUSCULO...
const nodeSchema = mongoose.Schema({
    'id': Number,
    'nome' : String,
    'regiao' : String,
    'custoCp' : String,
    'gerenteDeBase' : String,
    'url' : String,
    'temp': Number,
    'umidade': Number,
    'agua': Number,
    /*'subnos': [subNoSchame],*/
    'date' : {type: Date, default: Date.now}
})
const Node = mongoose.model('Node', nodeSchema)

module.exports = Node;







