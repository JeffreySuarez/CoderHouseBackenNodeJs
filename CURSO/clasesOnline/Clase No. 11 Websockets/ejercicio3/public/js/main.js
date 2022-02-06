const socket = io.connect();

const input = document.querySelector("input");

document.querySelector("button").addEventListener("click", () => {
  socket.emit("mensaje", input.value);

  /*

  paso 1:

  El addEvent va a recibir el nombre del evento que es el click y un
  callback que va a realizar otras cosas.

  ese callback va a ejecutar un socket.emit osea cada vez que yo
  haga click en ese boton voy a emitir ese mensaje y el mensaje va 
  a ser el valor de ese input osea voy a tomar el valor de ese input y lo
  voy a emitir al servidor



  */
});

socket.on("mensajes", (msjs) => {
  const mensajesHTML = msjs
    .map((msj) => `SocketId: ${msj.socketid} -> Mensaje: ${msj.mensaje}`)
    .join("<br>");
  document.querySelector("p").innerHTML = mensajesHTML;
});

/*
Paso 5:

ahora cuando me emiten desde el servidor los mensajes guardados
en el array lo voy a capturar.

Le digo cuando llegue esos mensajes tomalos en msjs y vas a hacer un
map de ellos y por cada mensaje que haya vas a poner en mi html la siguiente cadena "`SocketId: ${msj.socketid} -> Mensaje: ${msj.mensajeCliente}`"  
y luego vas a poner un br al final para que el html me incluya un salto de linea

en lo anterior apenas cree el html en la siguiente linea
" const mensajesHTML = msjs
    .map((msj) => `SocketId: ${msj.socketid} -> Mensaje: ${msj.mensajeCliente}`)
    .join("<br>"); "

  falta incluirlo en el parrafo que es lo final
    document.querySelector("p").innerHTML = mensajesHTML;
    aca con document.querySelector('p') obtengo el parrafo del html y luego le inserto con .innerHTML el html que acabe de generar el 
    mensajesHTML



*/
