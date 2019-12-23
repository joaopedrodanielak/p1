const mongoose = require('mongoose')
const Schema = mongoose.Schema()

const Faturamento = new Schema({
    servico : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'servico'
    },
    valor : {
        type : Number,
        required : true
    }
})

mongoose.model('faturamento',Faturamento)