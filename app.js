//Entradas
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const express = require('express')
const app = express()
const path = require('path')
const cadastroCliente = require('./routes/cadastroCliente')
const cadastroServico = require('./routes/cadastroServico')
const cadastroFuncionario = require('./routes/cadastroFuncionario')
const cadastroMateriais = require('./routes/cadastroMateriais')
const comprarMateriais = require('./routes/comprarMateriais')
app.use(bodyParser.urlencoded({extended : true}))
app.use(bodyParser.json())

//Rotas
app.use('/cadastroCliente',cadastroCliente)
app.use('/cadastroServico',cadastroServico)
app.use('/cadastroFuncionario',cadastroFuncionario)
app.use('/cadastroMateriais',cadastroMateriais)
app.use('/comprarMateriais',comprarMateriais)
//Mongoose
mongoose.Promise = global.Promise
mongoose.connect("mongodb+srv://joao:<password>@cluster0-iduzy.mongodb.net/test?retryWrites=true&w=majority",{useUnifiedTopology: true,useNewUrlParser : true})
.then(()=>{
    console.log("conectado ao banco de dados com sucesso")
}).catch((err)=>{
    console.log("erro ao conectar ao banco de dados :" +err)
})


//Conexao
const PORT = 1707
app.listen(PORT,()=>{
    console.log(`servidor rodando em ${PORT}`)
})
