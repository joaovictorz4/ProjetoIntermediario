const mongoose = require('../data/nodeData')

const lifeSkillSchema = mongoose.Schema({
    'nome' : String,
    'descricao' : String
})
const LifeSkill = mongoose.model('LifeSkill', lifeSkillSchema)

module.exports = LifeSkill;