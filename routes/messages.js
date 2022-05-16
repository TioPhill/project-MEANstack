var express = require('express');
var router = express.Router();

var Message = require('../models/message');
var User = require('../models/user');

router.delete('/:id', function (req, res, next){
    Message.findById(req.params.id, function (err, resultMsgRecuperada){
        if(err){
            return res.status(500).json({
                myErroTitle: 'Um erro aconteceu na hora de buscar a msg pelo ID p/ deletar',
                myError: err
            })
        } 
        if(!resultMsgRecuperada){
            return res.status(500).json({
                myErroTitle: 'Não encontrou a mensagem para deletar',
                myErro: {info: "Não encontrou a mensagem para deletar com o ID: "+ req.params.id}
            });
        }
        resultMsgRecuperada.remove(function(err, resultMsgDeletada){
            if(err){
                return res.status(500).json({
                    myErroTitle: 'um erro aconteceu na hora de deletar a msg',
                    myError: err
                });
            }
            res.status(200).json({
                myMsgSucess: 'Mensagem deletada com sucesso',
                objMessageApagada: resultMsgDeletada
            });
        });        
    });
});

router.patch('/:id', function(req,res,next){
    Message.findById(req.params.id, function(err, resultMsgRecuperada){
        if (err){
            return res.status(500).json({
                myErroTitle: 'Um erro aconteceu na hora de buscar a msg pelo ID',
                myError: err
            });
        }
        if(!resultMsgRecuperada){
            return res.status(500).json({
                myErroTitle: 'Não encontrou a mesagem',
                myError: {info: 'Não encontrou a mensagem com o ID: ' + req.params.id}
            });
        }

        resultMsgRecuperada.content = req.body.content;
        
        resultMsgRecuperada.save(function (err, resultMsgAlterada){
            if(err){
                return res.status(500).json({
                    myErroTitle: 'Um erro aconteceu na hora de buscar a msg pelo ID',
                    myError: err
                });
            }
            res.status(200).json({
                myMsgSucess: "Mensagem atualizada com sucesso",
                objMessageAtualizado: resultMsgAlterada
            });
        });
    });
});


router.get('/', async function (req, res, next) {
    const users = await User.find((err, users) => users)

    Message.find()
        .exec(function (err, result){
            if (err){
                return res.status(500).json({
                    myErroTitle: 'Um erro aconteceu na hora de buscar a mensagem',
                    myError: err
                });
            }

            const newMessages = result.map(msg => {
                for (let user of users) {
                    if (user.id == msg.user) {
                       msg.user = user.firstName
                   }
                }
                return msg
            })

            res.status(200).json({
                myMsgSucess: "Mensagem recuperada com sucesso",
                objMessageSRecuperados: newMessages
            });
        });
});



router.post('/', function (req, res, next){
    
User.findById(req.body.userId, function (err, resultUserRecuperado){     

    var message = new Message({

        content: req.body.content,
        user: resultUserRecuperado
    });



    message.save(function(err, result){
        if(err){
            return res.status(500).json({
                myErroTitle: 'Um Erro ocorreu na hora de salvar',
                myError: err
            });
        }
        res.status(201).json({
            myMsgSucess: "Mensagem salva com sucesso no mongoDB",
            objMessageSave: result
        });

    });
});

});

module.exports = router;
