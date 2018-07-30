var mongoose = require('mongoose');

var commonDB = function () {

  function connectDB() {
    var mongoDBConnectionString = "mongodb://testqq:4cuadrasTest@cluster0-shard-00-00-wud1w.mongodb.net:27017,cluster0-shard-00-01-wud1w.mongodb.net:27017,cluster0-shard-00-02-wud1w.mongodb.net:27017/login?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true"//"Poner aca un connection string"
    var options = {
      keepAlive: 1,
      connectTimeoutMS: 30000, reconnectTries: 30, reconnectInterval: 5000
    }

    mongoose.connect(mongoDBConnectionString, options);
    // Setea Mongoose para utilizar la biblioteca de promises global
    mongoose.Promise = global.Promise;

    var db = mongoose.connection;

    //Bindea conexion con eventos de error.
    db.on('error', console.error.bind(console, 'MongoDB connection error:'));
    // Si se termina el proceso Node, se cierra la conexion

    // When the connection is disconnected
    db.on('disconnected', function () {
      console.log('Mongoose default connection disconnected');
    });

    process.on('SIGINT', function () {
      db.close(function () {
        console.log('Conexion cerrada debido a que se cerro la aplicacion');
        process.exit(0);
      });
    });

    process.on('SIGTERM', function () {
      db.close(function () {
        console.log('Conexion cerrada debido a que se cerro la aplicacion');
        process.exit(0);
      });
    });

    return db;
  }
  return {
    //Listado de funciones publicas
    connectDB: connectDB
  }

}();

require('./Models/userModel');
module.exports = commonDB;