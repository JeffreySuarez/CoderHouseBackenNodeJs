const socket = io.connect();

//socket chat___------------------------//

socket.on("mensajes", (msjs) => {
  const mensajesHTML = msjs
    .map((msj) => `${msj.nameChat} -> ${msj.mensaje}`)
    .join("<br>");
  document.querySelector("p").innerHTML = mensajesHTML;
});

function addMessage(e) {
  const mensaje = {
    nameChat: document.getElementById("nameChat").value,
    mensaje: document.getElementById("text").value,
  };

  socket.emit("mensaje", mensaje);
  return false;
}

//socket productos ---------------------------//

socket.on("listaProductos", (prod) => {
  const mensajesHTML = prod
    .map((prod) => `${msj.nameChat} -> ${msj.mensaje}`)
    .join("<br>");
  document.querySelector("th").innerHTML = mensajesHTML;
});

function mostrarProductos(productos) {
  const productos = {
    name: document.getElementById("name").value,
    edad: document.getElementById("edad").value,
    genero: document.getElementById("gemerp").value,
    celular: document.getElementById("celular").value,
  };

  socket.emit("producto", productos);
  return false;
}
