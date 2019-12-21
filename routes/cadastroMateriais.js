const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
require("../models/Materiais")
const CadastroMateriais = mongoose.model('materiais')

router.post('/materiais',async (req,res)=>{
    const novoMateriais = new CadastroMateriais({
        nome : req.body.nome,
        preco : req.body.preco
    })
    try {
        const savedMateriais = await novoMateriais.save()
        res.json(savedMateriais)
    } catch (error) {
        res.json(error)
    }
})
module.exports = router