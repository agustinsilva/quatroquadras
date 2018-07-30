const bodyParser = require('body-parser');

const express = require('express');
const app = express();
//var User   = require('./app/models/user');

const login = require('./APIs/loginAPI');

app.use(bodyParser.json());
app.use(login);
module.exports= app;