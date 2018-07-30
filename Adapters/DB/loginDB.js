var mongoose = require('mongoose');
var userModel = mongoose.model('user');

var bcrypt = require('bcrypt');

var loginDB = function () {
    async function getUser(body) {
        console.log("En ejecución: LoginDB.");
        var user = await userModel.findOne({
            email: body.email
        }, function (err, user) {
            if (err) throw err;
            if (!user) {
                response = null;
            } else {
                bcrypt.compare(body.password, user.password, (err, result) => {
                    if (err) {
                        console.log('bcrypt - error - ', err);
                        response = err;
                    } else {
                        if (result) {
                            response = user;
                        } else {
                            response = 'FailPassword';
                        }
                    }
                });
                /*}else{
                  response = user;
                }*/
            }
        })
        return response;

    }

    return {
        getUser: getUser
    }
}();

module.exports = loginDB;