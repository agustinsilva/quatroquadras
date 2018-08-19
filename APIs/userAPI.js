const express = require('express');
const userAPI = express();
const userController = require('../Controllers/userController');

//Espera {email}
userAPI.delete('/user/:email', async function (req, res) {
    try {
        var userInput = req.params;
        var user = await userController.deleteUser(userInput);
        res.status(200).send(user)
    }
    catch (error) {
        res.status(400).send({message:error.message});
    }
});

// Req: Usuario: name, lastname, password, mail, password, role
userAPI.post('/users/', async function (req, res) {
    try {
        var userInput = req.body;
        var user = await userController.saveUser(userInput);
        res.status(201).send(user)
    }
    catch (error) {
        console.log("Error API... ", error);
        res.status(400).send({message:error.message});
    }
});

module.exports = userAPI;