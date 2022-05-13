const express = require('express')
const { appendFile } = require('fs')
const router = express.Router()
const mongoose = require('mongoose')
const User = require('../models/user')
const usuario = mongoose.model("usuarios", User.schema)

router.get("/registro", (req, res) =>
{
    res.render("usuarios/registro")
})

router.post("/registro", (req, res) => {
    var erros = []

    if(!req.body.firstName || typeof req.body.firstName == undefined || req.body.firstName == null){
        erros.push({texto: "nome invalido"})
    }

    if(!req.body.email || typeof req.body.email == undefined || req.body.email == null){
        erros.push({texto: "email invalido"})
    }

    if(!req.body.pass || typeof req.body.pass == undefined || req.body.pass == null){
        erros.push({texto: "senha invalida"})
    }
})

module.exports = router
