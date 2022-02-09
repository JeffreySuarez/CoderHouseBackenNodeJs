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
  const productoName = prod.map((prod) => {
    `${prod.name}`;
    document.querySelector(".nombre").innerHTML = productoName;
  });
  const productoEdad = prod.map((prod) => {
    `${prod.edad}`;
    document.querySelector(".edad").innerText = productoEdad;
  });
  const productoGenero = prod.map((prod) => {
    `${prod.genero}`;
    document.querySelector(".genero").innerText = productoGenero;
  });
  const productoCelular = prod.map((prod) => {
    `${prod.celular}`;
    document.querySelector(".celular").innerText = productoCelular;
  });
});

function mostrarProductos(e) {
  const productos = {
    name: document.getElementById("name").value,
    edad: document.getElementById("edad").value,
    genero: document.getElementById("gemero").value,
    celular: document.getElementById("celular").value,
  };

  socket.emit("producto", productos);
  return false;
}
