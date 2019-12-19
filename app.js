//Entradas
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const express = require('express')
const app = express()
const path = require('path')
const cadastro = require('./routes/cadastroCliente')

app.use(bodyParser.urlencoded({extended : true}))
app.use(bodyParser.json())

//Rotas
app.use('/cadastro',cadastro)


//Conexao
const PORT = 1707
app.listen(PORT,()=>{
    console.log(`servidor rodando em ${PORT}`)
})
