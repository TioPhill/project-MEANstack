const express = require('express');
const router = express.Router();
var Message = require('../models/message');

router.get('/', function (req, res, next){
    Message.find()
        .exec(function(err, result){
            if(err){
                return res.status(500).json({
                    myErroTitle: 'Um erro aconteceu na hora de buscar a mensagem',
                    myError: err
                });
            }
            res.status(200).json({
                myMsgSucess: "Mensagem recuperada com sucesso",
                objSMessageSRecuperadoS : result
            });
        });
});

router.post('/', function (req, res, next) {
    var user = req.headers.user
    var message = req.body.messageBody;
    var messageObject =  new Message({
        content: message,
        user
    });
    messageObject.save();

    res.send('ok')
});

// message.save(function(err, result){
//     if(err){
//         return res.status(500).json({
//             myErroTitle: 'Um erro aconteceu na hora de Salvar',
//             myError: err
//         });
//     }
//     res.status(201).json({
//         myMsgSucess: "Mensagem salva com sucesso",
//         objMessageSave : result
//     });
// }
// )




module.exports = router;

