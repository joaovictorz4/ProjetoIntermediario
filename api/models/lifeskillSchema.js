const mongoose = require('../data/nodeData')

const lifeSkillSchema = mongoose.Schema({
    'nome' : String,
    'url': String,
    'descricao' : String,
    'date' : {type: Date, default: Date.now}
})
const LifeSkill = mongoose.model('LifeSkill', lifeSkillSchema)

module.exports = LifeSkill;