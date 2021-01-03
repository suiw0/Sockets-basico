//importo la variable io
const{ io } = require('../server');

io.on('connection', (client) => {

    console.log('Usuario conectado');

    client.emit('enviarMensaje',{
        usuario: 'Administrador',
        mensaje: 'Bienvenido a esta aplicacion'
    });


    client.on('disconnect', ()=>{
        console.log('Usuario desconectado')
    });



    // aqui vamos a esuchar al cliente
    client.on('enviarMensaje', (data, callback) =>{

        console.log(data);

        client.broadcast.emit('enviarMensaje', data);
        //la propiedad broadcast se encarga de que todos los usuarios conectados al servidor escuchen lo que un usuario envie

        //if(mensaje.usuario){
        //   callback({
        //        resp: 'TODO SALIO BIEN!'
        //    });
        //}else{
        //    callback({
        //        resp: 'TODO SALIO MAL!   ))):'
        //    });
        //}

        //callback(); 
        //funcion que llamamos cuando todo sale bien, es la confirmacion

    }); // en mensaje azul estamos recibiendo el objeto

}); //usamos una funcion de flecha, esto nos indica cuando un cliente se conecte
