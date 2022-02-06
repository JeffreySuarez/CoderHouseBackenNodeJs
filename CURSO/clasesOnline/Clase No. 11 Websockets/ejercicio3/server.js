const express = require("express");
const app = express();

const { Server: HttpServer } = require("http");
const { Server: IOServer } = require("socket.io");

const httpServer = new HttpServer(app);
const io = new IOServer(httpServer);

const mensajes = [];

app.use(express.static("./public"));

io.on("connection", (socket) => {
  console.log("Nuevo Cliente Conectado!");

  /*
Paso 2:
ls

hey apenas te conectes decime que hay un nuevo cliente 


*/

  socket.emit("mensajes", mensajes);

  socket.on("mensaje", (data) => {
    mensajes.push({ socketid: socket.id, mensaje: data });
    io.sockets.emit("mensajes", mensajes);
  });

  /*

  Paso 3:
  y despues apenas tenga un mensaje por favor toma la data de ese evento  mensajeCliente y las vas a almacenar en el array mensajes
  */

  /*
  Paso 4:

  Despues de almacenar esos mensajes le digo emitame esos mensajes emitamela con mensajeServidor y la vas a emitir a todos los sockets que esten conectados
  
  */
});

const PORT = 3000;

const connectedServer = httpServer.listen(PORT, () => {
  console.log(
    `Servidor Http con Websockets escuchando en el puerto ${
      connectedServer.address().port
    }`
  );
});

connectedServer.on("error", (error) => {
  console.log(`Error en el Servidor ${error}`);
});
