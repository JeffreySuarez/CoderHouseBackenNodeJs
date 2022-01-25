const express = require("express");

const app = express();
let PORT = 8080;

let visitas = 0;
let date = new Date();

app.get("/", function (req, res) {
  res.send(`<h1>Bienvenidos al servidor express<h1>`);
});

app.get("/visitas", function (req, res) {
  res.send(`Numero de visitas : ${visitas++}`);
});

app.get("/fechaYhora", function (req, res) {
  res.send(
    `Hoy es: ${date.getDate()} del mes de: ${date.getMonth()} Son las : ${date.getHours()} : ${date.getMinutes()}`
  );
});

app.listen(PORT, () => {
  console.log(`servidor http escuchando en http://localhost:${PORT}`);
});
