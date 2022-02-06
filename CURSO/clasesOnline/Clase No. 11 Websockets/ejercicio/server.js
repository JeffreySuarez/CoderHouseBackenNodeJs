const express = require("express");

//se inicia el handshake con HTTP
const { Server: HttpServer } = require("http");

// en la anterior constante, las llaves significan o siguiente,ç
//se esta haciendo un destructurin del objeto
//para traerme una propiedad de ese objeto de require('http') en este caso
//solo quiero el server.
//el server esta en mayuscula por que es una clase, y esta separada de dos puntos
//porque le estoy haciendo renombramiento a esa clase.

const { Server: IOServer } = require("socket.io");

const app = express();

//En esta instancia el Servidor Http me va a levantar la aplicacion
const httpServer = new HttpServer(app);

//en lo anterior creo una instancia y le paso a esa nueva instancia mi app
//Se va a basar en la aplicacion y levantada y establecer la comunicacion.
const io = new IOServer(httpServer);
//y a mi instancia IOServer le paso la aplicacion del servidor Http.

// Indicamos que queremos cargar los archivos estáticos que se encuentran en dicha carpeta
app.use(express.static("./public")); //sirve archivos estaticos
// Esta ruta carga nuestro archivo index.html en la raíz de la misma

app.get("/", (req, res) => {
  res.sendFile("index.html", { root: __dirname });
  //el dirname es el directorio que estoy parado en este momento
  //como public se encuentra en la misma linea donde esta mi index por eso solo uso dirname
  //en este app.get solo usamos res.sendFile y no render, debido a que el
  //render se usa para los templates
});

// El servidor funcionando en el puerto 3000
httpServer.listen(3000, () => console.log("SERVER ON"));
//...

io.on("connection", (socket) => {
  // "connection" se ejecuta la primera vez que se abre una nueva conexión
  console.log("Usuario conectado");
  //cuando un esto se ejecute en el puerto 3000 dira que un usuario se conecto.
  // Se imprimirá solo la primera vez que se ha abierto la conexión
  socket.emit("evento", "Este es mi mensaje desde el servidor");
  /* Cuando hay una conexion ya establecida se lanza un socket
basicamente se conecto hice un handshake, el socket.emit, puede emitir
eventos o capturar eventos.

lo que va dentro del parentesis del .emit, el primero es el parametro
o evento y el segundo es el mensaje a mostrar.
esto es para recibir un mensaje en nuestro cliente com alert.

socket.on("evento", (data) => {
  alert(data);
  });
este codigo va en mi index.js
ahi dice, cuando recibo un evento la informacion de ese evento
muestrala como un alert.

en resumen aca en mi server.js envio eventos y se captura en index.js
que es el cliente.

*/
});
