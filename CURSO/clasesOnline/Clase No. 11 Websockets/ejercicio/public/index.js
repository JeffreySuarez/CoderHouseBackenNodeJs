const socket = io(); // Ya podemos empezar a usar los sockets desde el cliente :)

socket.on("evento", (data) => {
  alert(data);
  // socket.emit("notificacion", "mensaje recibido exitosamente");

  //aca capturamos el evento que viene desde server.js
  /*

en el socket.on, me dice, tome ese evento llamado evento
toma la data de ese evento y muestramelo en un alert.

 */

  /*

Basicamente lo que hemos realizado hasta el momento en este ejercicio
es la comunicacion basica entre un cliente y un servidor.

Enviando datos desde el servidor al cliente y cliente servidor
bidireccional.

*/
});
