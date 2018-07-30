var commonDB = require('./Adapters/DB/commonDB');
commonDB.connectDB();

var app = require('./app');
var fs = require('fs');
var https = require('https');

//Servidor escuchando al puerto 9670
var server = https.createServer({
    key: fs.readFileSync('server.key'),
    cert: fs.readFileSync('server.cert')
}, app).listen(9670, function() {
    console.log("Iniciando el servidor app_node https://localhost:9670 !!!");
}); 

