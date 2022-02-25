//-----------------------------------------//
//---------INICIO-------------------//

const express = require("express");
const { Server: HttpServer } = require("http");
const { Server: IOServer } = require("socket.io");
//creamos nuestro servidor http y de socket

const app = express(); //inicializamos la aplicacion

const httpServer = new HttpServer(app);
//creamos una nueva instancia del servidor HTTP y el app
//va a estar servida en el servidor HTTP.

const io = new IOServer(httpServer);
// vamos a sevir nuestro servidor de http y abrimos un puente
// de comunicacion con el servidor io.

//----------------------------finalizamos lo basico al inicio----//

//------------Inicio--Cuerpo------------------------//

const mensajesGuardados = [];

app.use(express.static("./public"));

io.on("connection", (socket) => {
  //-----------------------------------//
  //aca me dice hey, la coneccion esta ya lista mira tu socket//
  console.log("Cliente conectado");
  //con este socket vamos a hacer todo
  //cada vez que hay una conexion de un cliente esta el socket

  //este socket me permite escuchar eventos en el cliente en este caso
  // estaria escuchando al index.js y al index.html
  //---------------------//

  socket.emit("mensajeDesdeServidor", mensajesGuardados);
  //aca decimos apenas haya un cliente conectado le vas a enviar
  // todos los mensajes que yo tenga en mensajesGuardados
  //con emit enviamos los mensajes al cliente.

  //----------------------------------------//

  //escuchando al cliente
  socket.on("mensajeDesdeCliente", (data) => {
    //recibo el mensaje del cliente lo guardo en data
    mensajesGuardados.push(data);
    console.log(mensajesGuardados);
    //lo guardo en el array de mensajesGuardados
    io.sockets.emit("mensajeDesdeServidor", mensajesGuardados);
    //despues de guardarlos, lo voy a trasmitir a todos los clientes o a
    // todos los sockets que esten conectados
    //se lo envio con io.sockets.emit, si deseara solo enviarselo a uno
    // utilizaria solo emit.
  });

  //aca escucho los eventos desde el cliente socket.on
  //recibo por mensaje
});
//------------Fin--Cuerpo------------------------//

//----------------Terminacion del servicor --------------//

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
