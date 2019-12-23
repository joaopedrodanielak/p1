const mongoose = require('mongoose')
const Schema = mongoose.Schema()

const ItemServico = new Schema({
    materiais : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'materiais'
    },
    servico : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'servico'
    },
    quantidade : {
        type : Number,
        required : false
    },
    subtotal : {
        type : Number,
        required : false
    }
})
mongoose.model('itemservico',ItemServico)