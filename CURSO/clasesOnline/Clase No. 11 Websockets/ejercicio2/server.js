const express = require("express");

const { Server: HttpServer } = require("http");
const { Server: IOServer } = require("socket.io");

const app = express();

const httpServer = new HttpServer(app);
const io = new IOServer(httpServer);

app.use(express.static("./public"));

io.on("connection", (socket) => {
  console.log("Nuevo Cliente conectado!");
  /*
  En esta parte me va a decir que un nuevo cliente se conecto
  y ademas me va a decir que va a escuchar un evento, en este
  caso el evento se llama mensajeCliente
  y cuando reciba ese evento voy a obtener esa data yvoy a 
  trasmitirlo  a todos los clientes conectados con el
  io.sockets.emit
  */

  /*
  importante el que uso para obtener los datos se llama mensajeCliente y 
  el que uso para emitir se llama mensajeServidor.
  */

  socket.on("mensajeCliente", (data) => {
    io.sockets.emit("mensajeServidor", data);
  });

  /*
  cuando yo recibo este mensaje en mensajeCliente, lo paso a data que es un 
  callback este callback recibe ese parametro de data, hago
  un io.socket.emit y hago evento de emision que se llama mensajeServidor
  y le voy a enviar la data que estoy recibiendo de uno de mis clientes
  
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
