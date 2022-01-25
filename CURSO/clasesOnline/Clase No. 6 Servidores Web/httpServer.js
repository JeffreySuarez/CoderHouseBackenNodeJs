//invocamos los metodos para crear un servidor con HTTP
const http = require("http");

//Creamos el servidor
const server = http.createServer((req, res) => {
  let hora = new Date().getHours();
  console.log(hora);

  if (hora >= 6 && hora <= 12) {
    res.end("buenos dias");
  } else if (hora >= 13 && hora <= 19) {
    res.end("Buenas tardes");
  } else {
    res.end("buenas noches");
  }
});

//Le decimos al servidor que escuche en el puerto indicado  en este caso en el 8080
const connectedServer = server.listen(8080, () => {
  console.log(
    `Servidor Http escuchando en el puerto ${connectedServer.address().port}`
  );
});
