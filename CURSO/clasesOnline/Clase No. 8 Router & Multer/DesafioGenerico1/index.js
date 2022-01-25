//Partiendo del ejercicio anterior, generar una carpeta publica "public" en el servidor, la culal tendrá un archivo index.html.

//En ese archivo se encontraran dos formularios: uno que permita ingresr mascotas y otro personas utilizando el metodo post
//Probar el ingreso de datos mediante los formularios y con Postman
//Verificar los datos cargados en cada caso

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

//middleware de validacion

function middlewareValidation(req, res, next) {
  const name = req.body.name;
  if (!name) res.end("name is required");
  next();
}

function middlewarePrefix(req, res, next) {
  const name = req.body.name;
  req.body.name = `La persona ${name}`;
  next();
}

personas.get("/", (req, res) => {
  res.send(listaPersonas);
});
personas.post("/", middlewareValidation, middlewarePrefix, (req, res) => {
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
app.use("/static", express.static("public"));

app.listen(8080);
