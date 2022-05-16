var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mongooseUniqueValidator = require('mongoose-unique-validator');
var bcrypt = require('bcryptjs');

var schema = new Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    password: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    messages: [{type: Schema.Types.ObjectId, ref: 'Message'}]    
});

schema.pre('save', async function (next){
    const hash = await bcrypt.hash(this.password, 10);
    this.password = hash;

    next();
});

schema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model('User', schema);
