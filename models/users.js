var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mongooseUniqueValidator = require('mongoose-unique-validator');

var schema = new Schema({
    name: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    user: {type: String, required: true},
    password: {type: String, required: true},
    confirmPass: {type: String, required: true}

});

schema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model('Users', schema);

