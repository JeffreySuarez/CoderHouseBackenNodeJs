const socket = io.connect();
// inicializamos el puente de comunicacion con el servidor

//recibo la informacion desde el servidor para agregarlo al cliente
//escuchando al servidor
socket.on("mensajeDesdeServidor", (msjs) => {
  const mensajesHTML = msjs
    .map((msj) => `${msj.name} -> ${msj.mensaje}`)
    .join("<br>");
  document.querySelector("#mensaje").innerHTML = mensajesHTML;
});

//envio la informacion capturada desde mi HTMl al servidor para agregarlo
// al array.
function addMessage(e) {
  const mensajeCapturado = {
    name: document.getElementById("name").value,
    mensaje: document.getElementById("text").value,
  };

  socket.emit("mensajeDesdeCliente", mensajeCapturado);
  return false;
}
