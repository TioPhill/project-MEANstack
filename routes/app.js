var express = require('express'); 
const user = require('../models/user');
var router = express.Router();
var User = require('../models/user') // não sei se é aqui que importa, perguntar pg 28/35

router.get('/', function (req, res, next) {
    res.render('index');
});
var appRoutes = require('./routes/app');
var messageRoutes = require('./routes/messages');

var app - express();
mongoose.connect('mongodb://localhost:27017/node-angular');

router.get('/message', function (req, res, next) {
    res.render('node', {message: 'Olá, nova rota de mensagem.'});
});

router.post('/message', function(req, res, next) {
    var messageVar = req.boby.messageBoby;
    res.redirect('/message/' + messageVar)
});

router.get('/message/:msgParam', function (req, res, next){
    res.render('node', {message: req.params.msgParam});
});


module.exports = router;

router.get('../node-mongodb-mongosse-user', function (req, res, next){
    res.render('node');
});

app.use('/message', messageRoutes);
app.use('/', appRoutes);

router.post('../node-mongodb-mongosse-user', function (req, res, next){
    var emailVar = req.body.emailBody;
    var userObject =  new User({
        firsName: 'Phillipe',
        lastName: 'Espíndula',
        password: 'Segredo',
        email: emailVar
    });
    userObject.save();

    res.redirect('../node-mongodb-mongosse-user');
});

router.post('../node-mongodb-mongosse-user', function (req, res, next){
   User.findOne({}, function(err, documents){
       if (err) {
           return res.send('Erro!! :-(')
       }
       res.render('node', {firstNameV: documents});""
   });
    
});
