var socket = io(); // es una funcion que aparece pq en el script de arriba permite importamos la libreria



// el on es para escuchar
socket.on('connect', function(){ //nos va a decir cuando haya un canal de comunicacion abierto entre cliente-servidor

    console.log('Conectado al servidor');
});

socket.on('disconnect', function() {

    console.log('Perdimos conexión con el servidor');

});


// el emit envia informacion
socket.emit('enviarMensaje', {
    usuario: 'Sui',
    mensaje: 'Hola mundo'

}, function(resp){

        console.log('respuesta server:', resp);

}); //normalmente se envia un objeto, para enviar una gran cantidad de informacion en un solo envio

//escuchando info
socket.on('enviarMensaje', function(mensaje){

    console.log('Servidor', mensaje);

});