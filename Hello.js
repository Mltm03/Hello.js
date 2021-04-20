var htttp= require("http");
var manejador = function (solicitud, respuesta){
    console.log("Recibimmos una nueva petición");
    respuesta.end("Hola mundo");
    };

var servidor= http.createServer(manejador);

servidor.listen(8080);