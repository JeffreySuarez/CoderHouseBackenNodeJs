const express = require("express");

const app = express();
let PORT = 8080;

let visitas = 0;
let date = new Date();

app.get("/", function (req, res) {
  //codigo que vamos a utilizar
  res.send(`<h1>Bienvenidos al servidor express!!<h1>`);
});

app.get("/visitas/:id", function (req, res) {
  console.log(`Numero de visitas con el id ${req.params.id} ${visitas++}`);
  res.send(`Numero de visitas con el id ${req.params.id} ${visitas++}`);
});

app.get("/fechaYhora", function (req, res) {
  res.send(
    ` Hola ${
      req.query.name
    },  Hoy es: ${date.getDate()} del mes de: ${date.getMonth()} Son las : ${date.getHours()} : ${date.getMinutes()}`
  );
});

app.get("/api/mensajes", function (req, res) {
  console.log("GET request recibido");
  console.log(req.query);

  if (Object.entries(req.query).length > 0) {
    res.send({
      result: "get with query params: ok",
      query: req.query,
    });
  } else {
    res.send({
      result: "get all: ok",
    });
  }
});

app.listen(PORT, () => {
  console.log(`servidor http escuchando en http://localhost:${PORT}`);
});
