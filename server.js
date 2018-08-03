var commonDB = require('./Adapters/DB/commonDB');
commonDB.connectDB();

var app = require('./app');
var fs = require('fs');
var https = require('https');

var server = https.createServer({
    key: fs.readFileSync('./Resources/Certificates/server.key'),
    cert: fs.readFileSync('./Resources/Certificates/server.cert')
}, app).listen(9670, function() {
    console.log("Servidor iniciado");
}); 

