const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
require("../models/Servico")
const CadastroServico = mongoose.model('servico')
// Routes
router.get('/', (req,res)=>{
    CadastroServico.find().then((CadastroServico)=>{
        res.send(CadastroServico)
    })
})
router.post('/servico', async (req,res)=>{
    const NovoServico = new CadastroServico ({
        cliente : req.headers.cliente,
        nomeservico : req.body.nomeservico,
        funcionario : req.headers.funcionario,
    })
    try {
        const ServicoSalvo = await NovoServico.save()
        res.json(ServicoSalvo)
    } catch (error) {
        res.json({message : error})
        console.log('Erro ao fazer o serviço:'+error)
    }
})
module.exports = router