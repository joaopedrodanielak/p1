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
    },
    date : {
        type : Date,
        default : Date.now()
    },
    status : {
        type : Boolean,
        default : true
    },
    horas : {
        type : Number,
        required : false
    }
})
mongoose.model('servico',Servico)