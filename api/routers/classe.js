const express = require('express')
const router = express.Router()
const Classe = require('../models/classeSchema')

router.use(express.json())

router.get("/", (req, res)=>{
    var limit = Number(req.query.limit)
    Classe.find().limit(limit).then((doc)=>{
        res.status(200).json(doc)
    }).catch((err)=>{
        console.error(err)
        res.status(400).json({ "erro": "Erro de busca" })
    })
})

router.get("/:id", (req, res)=>{
    Classe.findById(req.params.id, (err, doc)=>{
        if(err) {
            res.status(400).json({ "erro": "dado não encontrado" })
        }else{
            res.status(200).json(doc)
        }
    })
})

router.post("/", (req, res)=>{
    var ls = new Classe(req.body)
    
    ls.save((err, doc)=>{
        if(err){
            res.status(400).json({ "erro": "Não foi possivel salvar os dados" })
        }else{
            res.status(200).json(doc)
        }
        
    })
})

router.put("/:id", (req, res)=>{

    Classe.findByIdAndUpdate(req.params.id, req.body, (err, doc)=>{
        if(err){
            res.status(400).json({ "erro": "Não fo possvel modificar os dados" })
        }else{
            res.status(200).json(doc)
        }
    })
})

router.delete("/:id", (req, res)=>{
    
    Classe.findByIdAndDelete(req.params.id, (err, doc)=>{
        if(err){
            res.status(400).json({ "erro": "Não foi possivel excluir os dados" })
        }else{
            res.status(200).json(doc)
        }
    })
})

module.exports = router