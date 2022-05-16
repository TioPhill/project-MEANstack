var express = require('express');
var router = express.Router();

var User = require('../models/user');

router.post('/', (req, res) => {
    var {firstName, lastName, password, email} = req.body;

    var userObject = new User({
        firstName,
        lastName,
        password,
        email
    });

    userObject.save((err, result) => {
        if(err){            
            return res.status(500).json({
                myErroTitle: 'Um Erro ocorreu na hora de salvar',
                myError: err
            });
        }
        res.status(201).json({
            myUserSucess: "Usuário cadastrado",
            objUserSave: result
        })
    });
})

module.exports = router;
