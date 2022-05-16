var express = require('express');
var router = express.Router();

var User = require('../models/user');

var Users = require('../models/users');

router.get('/node-mongodb-user-busca', (req, res, next)=> {
    User.findOne({}, (err, documents)=> {
        if(err){
            return res.send('Error!!');
        }
        res.render('node', {firstNameV: documents.firstName,
                            lastNameV: documents.lastName,
                            emailV: documents.email,
                            passwordV: documents.password,
                            messagesV: documents.messages});
    });
});

router.get('/node-mongodb-user', (req, res) => {
    res.render('node');
});

router.post('/node-mongodb-user', (req,res,next) => {

    var emailVar = req.body.emailBody;

    var userObject = new User({
        firstName: 'Aluno',
        lastName: 'alunoUVV',
        password: 'Pass',
        email: emailVar
    });
    userObject.save();

    res.send('cadastrado');

});



router.get('/', (req, res, next) => {
    res.render('index');
});


router.get('/registro-usuario-salvar', (req, res) => {
    res.render('registro-usuario-salvar');
});

router.post('/registro-usuario-salvar', (req, res) => {
    var {name, email, user, password, confirmPass} = req.body;

    var userObject = new Users({
        name,
        email,
        user,
        password,
        confirmPass
    });

    userObject.save();

    res.send('cadastrado');
    
});

router.get('/registro-usuario-busca', (req, res) => {
    Users.findOne({}, (err, documents) => {
        if(err){
            return res.send('Erro');
        }
        var {user, email} = documents;
        res.render('registro-usuario-busca', {
            user,
            email
        });
    });
});






module.exports = router;
