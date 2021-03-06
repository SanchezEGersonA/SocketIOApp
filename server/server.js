const express = require('express');
const socketIO = require('socket.io');
const http = require('http');

const path = require('path');
const { callbackify } = require('util');

const app = express();
let server = http.createServer(app);

const publicPath = path.resolve(__dirname, '../public');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

// IO = ESTA ES LA COMUNICACION DEL BACK-END
module.exports.io = socketIO(server);

require('./sockets/socket');

server.listen(port, (err) => {

    if (err) throw new Error(err);

    console.log(`Servidor corriendo en puerto ${ port }`);

});