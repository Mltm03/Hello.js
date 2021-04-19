var htttp= require("http");var http = require("http");

var manejador = function (solicitud, respuesta){
    console.log("Hola mundo");
    respuesta.end();
    };

var servidor= http.createServer(manejador);

servidor.listen(8080);