var mongoose = require('mongoose');
var userModel = mongoose.model('user');

var userDB = function () {
    //Función encargada de salvar un usuario en la BDD
    async function saveUser(objectUser) {
        var user = new userModel(objectUser);
        await user.save({});
        return user;
    }

    //Función encargada de eliminar un usuario en la BDD
    async function deleteUser(email) {
        var user = await userModel.findOneAndRemove({ email: email });
        return user;
    }


    return {
        deleteUser: deleteUser,
        saveUser: saveUser
    }

}();

module.exports = userDB;