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
//Mongoose
mongoose.Promise = global.Promise
mongoose.connect("mongodb://localhost/p1",{useUnifiedTopology: true,useNewUrlParser : true})
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
