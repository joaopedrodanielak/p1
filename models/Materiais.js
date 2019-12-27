const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Materiais = new Schema({
    nome : {
        type : String,
        required : true
    },
    preco : {
        type : Number,
        required : true
    },
    estoque : {
        type : Number,
        required : true
    }
})

mongoose.model('materiais',Materiais)