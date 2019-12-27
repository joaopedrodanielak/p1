const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const CompraMateriais = new Schema({
    data : {
        type : Date,
        default : Date.now()
    },
    materiais : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'materiais'
    },
    quantidade : {
        type : Number,
        required : true
    }
})
mongoose.model('compramateriais',CompraMateriais)