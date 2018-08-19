var loginDB = require('../Adapters/DB/loginDB');
var cryptoController = require('./cryptoController');

var loginController = function () {

    //Retorna un usuario de base de datos segun un email.
    async function getUser(email) {
        var user = await loginDB.getUser(email);
        return user;
    }

    //Retorna un usuario si logea correctamente.
    async function getLoginObject(userLoginData) {
        var user = await getUser(userLoginData.email);
        if (!user) { userNotExist(); }
        var encryptedPassword = cryptoController.encryptString(userLoginData.password);
        var result = (encryptedPassword !== user.password) ? passwordError() : user;
        return result;
    }

    //Lanza error si el usuario no existe
    function userNotExist() {
        throw (new Error('Autenticación Fallida.El usuario no existe.'));
    }

    //Lanza error si el password es incorrecto
    function passwordError() {
        throw (new Error('Autenticación Fallida. Contraseña incorrecta.'));
    }

    return {
        getUser: getUser,
        getLoginObject: getLoginObject
    }
}();

module.exports = loginController;