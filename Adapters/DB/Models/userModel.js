var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    name: String,
    email: String,
    admin: Boolean,
    password: String
});



var user = module.exports = mongoose.model('user', userSchema);