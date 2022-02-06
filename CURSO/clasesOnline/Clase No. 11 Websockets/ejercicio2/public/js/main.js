const socket = io.connect();

const input = document.querySelector("input");
/* 
capturo primero el input, hago un querySelector del input
despues hago un addEventListener del input el va a escuchar
el teclado.

ese evento va a ser in input osea se llama input, con ese input
todo lo que se agrega a ese input voy a enviarlo como mensaje
voy a emitir ese evento con el valor del input

*/
input.addEventListener("input", () => {
  socket.emit("mensajeCliente", input.value);
});

/*
Capturaba los cambios de ese input y los emitia a mi servidor


*/

socket.on("mensajeServidor", (data) => {
  document.querySelector("p").innerText = data;

  /*
  aca capturo ese evento de mensajeServidor y lo que hago
  lo capturo, le digo hey socket, cuando haya un evento mensajeServidor
  coja esa data y va ponerla toda en ese document.querySelector y voy a 
  seleccionar es p y le voy a insertar la data
  */
});
