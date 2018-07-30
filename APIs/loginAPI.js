const express = require('express');
const loginAPI = express();
const loginController = require('../Controllers/loginController');

loginAPI.get('/', (req, res) => {
    res.send({ message: "Hello!" }).status(200);
});

loginAPI.post('/login', async function (req, res) {
    var user = await loginController.getUser(req.body);
    if (user != null) {
        if (user == 'FailPassword') {
            res.json({ success: false, message: 'Autenticación Fallida. Contraseña incorrecta.' });
        }else{
            res.send(user).status(200);
        }
    } else {
        res.json({ success: false, message: 'Autenticación Fallida. Usuario no existe.' });
    }

});

module.exports = loginAPI;