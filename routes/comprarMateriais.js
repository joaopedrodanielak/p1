const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const express = require('express')
const router = express.Router()
require("../models/CompraMateriais")
const CompraMateriais = mongoose.model('compramateriais')
router.get('/',(req,res)=>{
    res.json("Aqui é a compra de materiais")
})
router.post('/comprar',(req,res)=>{
    const novaCompra = new CompraMateriais({
        materiais : req.headers.materiais,
        quantidade : req.body.quantidade
        
    })
})