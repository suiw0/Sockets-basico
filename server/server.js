const express = require('express');  
//cargando la libreria de express

const socketIO = require('socket.io'); 
//cargando el paquete

const http = require('http'); 
//permite levantar un servidor, entre otras cosas


const path = require('path'); //cargando libreria del path

const app = express();  
//inicializando express
let server = http.createServer(app); 
//definir el servidor para correr la aplicacion

const publicPath = path.resolve(__dirname, '../public');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

// io es la comunicación con el backend, matiene conexion directa con el servidor
//let io = socketIO(server); //inicializamos el servidor
// cambiamos el let por un moddule para trabajar el io desde sockets.js

module.exports.io = socketIO(server);
require('./sockets/socket');




server.listen(port, (err) => {

    if (err) throw new Error(err);

    console.log(`Servidor corriendo en puerto ${ port }`);

}); 