var express = require('express');
var router = express.Router();
var User = require('../models/user');
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');

router.post('/', async (req, res)=>{
    var {emailTS, passwordTS} = req.body;

    var user = await User.findOne({email:emailTS});

    if(!user || !await bcrypt.compare(passwordTS, user.password))
        return res.status(400).send({error: 'usuário  ou senha incorreto!'});

    var token = jwt.sign({userID: user._id, firstName: user.firstName}, 'angular', {expiresIn: '7d'});   

    res.status(200).json({token});
});


module.exports = router;
