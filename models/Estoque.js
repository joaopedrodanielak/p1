const mongoose = require('mongoose')
const Schema = mongoose.Schema()

const Estoque = new Schema({
    materiais : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'materiais'
    },
    quantidade : {
        type : Number,
        required : true
    }
})
mongoose.model('estoque',Estoque)
