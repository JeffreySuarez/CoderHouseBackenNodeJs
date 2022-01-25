const express = require("express");
const { Router } = express;
const PORT = 8080;
const app = express();
const personas = Router();
const mascotas = Router();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let listaPersonas = ["Juan", "Pedro", "Alvaro", "Palacios"];
let listaMascotas = ["Aidi", "Beagle", "Bichon Frise", " Shih Tzu"];

personas.get("/", (req, res) => {
  res.send(listaPersonas);
});
personas.post("/", (req, res) => {
  const datosPersonas = req.body.name;
  listaPersonas.push(datosPersonas);

  res.send(listaPersonas);
});

mascotas.get("/", (req, res) => {
  res.send(listaMascotas);
});
mascotas.post("/", (req, res) => {
  const datosMascotas = req.body.nameMascota;
  listaMascotas.push(datosMascotas);

  res.send(listaMascotas);
});

app.use("/personas", personas);
app.use("/mascotas", mascotas);

app.listen(8080);
