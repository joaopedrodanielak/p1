const express = require('express')
const bodyparser = require('body-parser')
const router = express.Router()
const mongoose = require('mongoose')
require("../models/ItemServicos")
const ItemServicos = mongoose.model('itemservico')

router.get('/',(req,res)=>{
    ItemServicos.find().then((ItemServicos)=>{
        res.json(ItemServicos)
    })
})

router.post('/gerenciarServico',async (req,res)=>{
    const NovogerenciamentoServico = new ItemServicos({
        materiais : req.headers.materiais,
        servico : req.headers.servico,
        quantidade : req.body.quantidade,
        subtotal : req.body.subtotal
    })
    try {
        const gerencimentoSalvo = await NovogerenciamentoServico.save()
        res.json(gerencimentoSalvo)
    } catch (error) {
        res.json(gerencimentoSalvo)
        console.log('Erro:',+error)
    }
})