var loginDB = require('../Adapters/DB/loginDB');

var usersController = function(){

    async function getUser(body){
        var user = await loginDB.getUser(body);
        return await user;
    }

    return {
        getUser: getUser
    }
}();

module.exports= usersController;