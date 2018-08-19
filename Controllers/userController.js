var userDB = require('../Adapters/DB/userDB');
var loginDB = require('../Adapters/DB/loginDB');
var cryptoController = require('./cryptoController');

var userController = function () {

    //Retorna un usuario de base de datos segun un email.
    async function getUser(email) {
        var user = await loginDB.getUser(email);
        return user;
    }

    //Retorna un objeto de tipo usuario almacenado en la BD
    async function saveUser(userData) {
        var mail = await getUser(userData.email);
        if (mail) { userExist(); }
        var encryptedPassword = cryptoController.encryptString(userData.password);
        userData["password"] = encryptedPassword;
        var user = await userDB.saveUser(userData);
        if (!user) { userNotSave(); }
        return user;
    }

    //Lanza error si el usuario existe
    function userExist() {
        throw (new Error('Creación Fallida. El usuario existe.'));
    }

    
    //Lanza error si el usuario existe
    function userNotExist() {
        throw (new Error('El usuario no existe.'));
    }


    //Lanza error si el usuario no existe
    function userNotSave() {
        throw (new Error('Falla al guardar un usuario.'));
    }

        //Retorna un objeto de tipo usuario almacenado en la BD
        async function deleteUser(userData) {
            var mail = userData.email;
            var user = await userDB.deleteUser(mail);
            if (!user) { userNotExist(); }
            return user;
        }

    return {
        saveUser: saveUser,
        deleteUser: deleteUser

    }
}();

module.exports = userController;