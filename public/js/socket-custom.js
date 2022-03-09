var socket = io();

// ESCUCHAR 
socket.on('connect', function() {
    console.log('Conectado al servidor');
});

socket.on('disconnect', function() {
    console.log('Perdimos conexión con el servidor');
});

// ENVIAR INFORMACION
socket.emit('enviarMensaje', {
    usuario: 'Gerson',
    mensaje: 'Hola Mundo'
}, function(resp) {
    console.log('Respuesta Server: ', resp);
});

// ESCUCHAR INFORMACION
socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor: ', mensaje);
});