const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
require('../models/Funcionario')
const CadastroFuncionario = mongoose.model('funcionario')

router.post('/funcionario',async (req,res)=>{
    const novoFuncionario = new CadastroFuncionario({
        nome : req.body.nome,
        sobrenome : req.body.sobrenome,
        cpf : req.body.cpf,
        rg:req.body.rg,
        data_de_nascimento : req.body.data_de_nascimento,
        endereco : req.body.endereco,
        cidade : req.body.cidade,
        telefone : req.body.telefone,
        email : req.body.email
    })
    try {
        savedFuncionario = await novoFuncionario.save()
            res.json(savedFuncionario)
    } catch (error) {
        res.json({message : error})
        console.log('Erro ao salvar o funcionario'+error)
    }
})

module.exports = router