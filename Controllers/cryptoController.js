var crypto = require('crypto');

var cryptoController = function () {

    //Encripta la contraseña.
    function encryptString(rawData) {
        var ciphertext = crypto.createHash('sha512').update(rawData).digest('hex');
        return ciphertext.toString();
    }

    return {
        encryptString: encryptString
    }

}();

module.exports = cryptoController;