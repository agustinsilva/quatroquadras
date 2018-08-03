const express = require('express');
const loginAPI = express();
const loginController = require('../Controllers/loginController');

//Login
//Espera en body {email,password}
loginAPI.post('/login', async function (req, res) {
    try{
    var loginInput = req.body;
    var user = await loginController.getLoginObject(loginInput);
    res.status(200).send(user)
    }
    catch(error){
        res.status(400).send(error);
    }
});

module.exports = loginAPI;