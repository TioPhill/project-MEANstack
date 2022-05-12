var express = require('express');
const { default: mongoose } = require('mongoose');
const { Schema } = require('mongoose');
const { stringify } = require('querystring');
const message = require('../models/message');
const { schema } = require('../models/message');
var router = express.router();

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
    var message = new Message({
        content: req.body.content
    });
});

message.save(function(err, result){
    if(err){
        return res.status(500).json({
            myErroTitle: 'Um erro aconteceu na hora de Salvar',
            myError: err
        });
    }
    res.status(201).json({
        myMsgSucess: "Mensagem salva com sucesso",
        objMessageSave : result
    });
}

)

module.exports = router;

var schema = new schema({
    content: {type: stringify, required: true},
    user: {type: Schema.Types.ObjectId, ref: 'User'}
});
module.exports = mongoose.model('Message', schema);