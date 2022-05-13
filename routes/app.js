var express = require('express'); 
var router = express.Router();
var userRouter = require('./user')
var messageRouter = require('./messages')


router.use('/user', userRouter)
router.use('/message', messageRouter)

module.exports = router;

// router.get('/', function (req, res, next) {
//     res.render('index');
// });


// router.get('/message', function (req, res, next) {
//     res.render('node', {message: 'Olá, nova rota de mensagem.'});
// });

// router.post('/message', function (req, res, next) {
//     var user = req.headers.user
//     var message = req.body.messageBody;
//     var messageObject =  new Message({
//         content: message,
//         user
//     });
//     messageObject.save();

//     res.send('ok')

//     // res.redirect('/message/' + messageVar)
// });

// router.get('/message/:msgParam', function (req, res, next){
//     res.render('node', {message: req.params.msgParam});
// });



// router.get('../node-mongodb-mongosse-user', function (req, res, next){
//     res.render('node');
// });




// router.post('../node-mongodb-mongosse-user', function (req, res, next){
//     User.findOne({}, function(err, documents){
//         if (err) {
//             return res.send('Erro!! :-(')
//         }
//         res.render('node', {firstNameV: documents});""
//     });
    
// });

