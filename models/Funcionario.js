const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Funcionario = new Schema({
    nome : {
        type : String,
        required : true
    },
    sobrenome : {
        type : String,
        required : true
    },
    cpf : {
        type : String,
        required : true
    },
    rg : {
        type : String,
        required : true
    },
    data_de_nascimento : {
        type : Date,
        required : true
    },
    endereco : {
        type : String,
        required : true
    },
    cidade : {
        type : String,
        required : true
    },
    telefone : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : false
    },
    date : {
        type : Date,
        default : Date.now()
    }
})
mongoose.model('funcionario',Funcionario)
