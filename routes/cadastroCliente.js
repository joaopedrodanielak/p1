const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
require('../models/Cliente')
const CadastroCliente = mongoose.model('cliente')

//Rotas//
router.get('/',(req,res)=>{
    res.send('Pagina de Cadastro')
})
router.post('/cadastrar/cliente', async (req,res)=>{
    const NovoCliente = new CadastroCliente ({
        nome : req.body.nome,
        sobrenome : req.body.sobrenome,
        cpf : req.body.cpf,
        rg:req.body.rg,
        data_de_nascimento : req.body.data_de_nascimento,
        endereco : req.body.endereco,
        cidade : req.body.cidade,
        telefone : req.body.telefone,
        email : req.body.email 
    });
    try {
        const ClienteSalvo = await NovoCliente.save()
        res.json(ClienteSalvo)
    } catch (error) {
        res.json({message : error})
    }
})
module.exports = router