var mongoose = require('mongoose');
var userModel = mongoose.model('user');

var loginDB = function () {
    async function getUser(email) {
        var user = await userModel.findOne({ email: email });
        return user;
    }
    return {
        getUser: getUser
    }
}();

module.exports = loginDB;