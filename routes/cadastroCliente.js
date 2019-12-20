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
router.get('/visualizar/clientes', async (req,res)=>{
    CadastroCliente.find().then((CadastroCliente)=>{
        res.send(CadastroCliente)
    })
})

router.delete('/deletar/:id', async (req,res)=>{
    try {
        const removedCliente  = await CadastroCliente.deleteOne({_id : req.params.id})
        res.json(removedCliente)
        console.log("deletado com sucesso")
    } catch (error) {
        res.json({message : error})
    }
})
router.patch('/editar/:id', async(req,res)=>{
    let data = {
        nome : req.body.nome,
        sobrenome : req.body.sobrenome,
        cpf : req.body.cpf,
        rg:req.body.rg,
        data_de_nascimento : req.body.data_de_nascimento,
        endereco : req.body.endereco,
        cidade : req.body.cidade,
        telefone : req.body.telefone,
        email : req.body.email 
    }
    try {
        const updatedCliente = await CadastroCliente.updateOne({_id: req.params.id},{$set:{ nome :req.body.nome}})
        res.json(updatedCliente)
        console.log("Atualizado com sucesso")
    } catch (error) {
        res.json({message : error})
        console.log("Erro ao editar"+error)
    }
})
module.exports = router