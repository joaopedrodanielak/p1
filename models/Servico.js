const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Servico = new Schema({
    cliente : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "cliente"
    },
    nomeservico : {
        type : String,
        required : true
    },
    funcionario : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "funcionario"
    }
})
mongoose.model('servico',Servico)