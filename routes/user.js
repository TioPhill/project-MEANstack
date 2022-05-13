const express = require('express');
const router = express.Router();
const User = require('../models/user');

router.get("/registro", (req, res) =>
{
    // res.render("usuarios/registro")
})

router.post("/registro", async(req, res) => {
    var { lastName, firstName, password, email } = req.body;

    if(!firstName){
        throw new Error("firstName é obrigatório");
    }
    if(!lastName){
        throw new Error("lastName é obrigatório");
    }
    if(!password){
        throw new Error("Uma senha é obrigatória");
    }
    if(!email){
        throw new Error("Email é obrigatório");
    }
    var user = await User.findOne({ email });
    
    if(user){
        throw new Error("E-mail já utilizado");
    }

    var userObject = new User({
        firstName,
        lastName,
        password,
        email
    });
    userObject.save();

    res.send('Usuário criado');
})

router.post('/signin', async (req, res) => {
    var { email, password } = req.body;
    
    var user = await User.findOne({ email, password });
    
    if (!user) {
        throw new Error('O usuário não existe!')
    }

    res.status(200).json({userId: user.id})
})


module.exports = router
