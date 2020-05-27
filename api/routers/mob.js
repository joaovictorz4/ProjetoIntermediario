const express = require('express')
const router = express.Router()
const Mob = require('../models/mobSchema')

router.use(express.json())

router.get("/", (req, res)=>{
    var limit = Number(req.query.limit)
    Mob.find().limit(limit).then((doc)=>{
        res.status(200).json(doc)
    }).catch((err)=>{
        console.error(err)
        res.status(400).json({ "erro": "Erro de busca" })
    })
})

router.get("/:id", (req, res)=>{
    Mob.findById(req.params.id, (err, doc)=>{
        if(err) {
            res.status(400).json({ "erro": "dado não encontrado" })
        }else{
            res.status(200).json(doc)
        }
    })
})

router.post("/", (req, res)=>{
    var mob = new Mob(req.body)
    
    mob.save((err, doc)=>{
        if(err){
            res.status(400).json({ "erro": "Não foi possivel salvar os dados" })
        }else{
            res.status(200).json(doc)
        }
        
    })
})

router.put("/:id", (req, res)=>{

    Mob.findByIdAndUpdate(req.params.id, req.body, (err, doc)=>{
        if(err){
            res.status(400).json({ "erro": "Não fo possvel modificar os dados" })
        }else{
            res.status(200).json(doc)
        }
    })
})

router.delete("/:id", (req, res)=>{
    
    Mob.findByIdAndDelete(req.params.id, (err, doc)=>{
        if(err){
            res.status(400).json({ "erro": "Não foi possivel excluir os dados" })
        }else{
            res.status(200).json(doc)
        }
    })
})

module.exports = router