const express = require("express");
const app = express();
const PORT = 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const frase = "Frase Inicial";

app.get("/api/frase", function (req, res) {
  res.send({ frase: frase });
});

app.get("/api/palabras/:pos", function (req, res) {
  const palabra = req.params.pos - 1;
  //   let arrayFrase = frase.split(" ");

  if (palabra >= req.body.buscada || palabra < 0) {
    res.send({ mssg: "El parámetro está fuera de rango" });
  } else if (isNaN(palabra)) {
    res.send({ mssg: "El parámetro no es un número" });
  } else {
    res.send(req.body.buscada[palabra]);
    console.log(req.body);
  }
});

app.post("/api/palabras/", function (req, res) {
  const palabraBuscada = req.body.buscada;
  palabraBuscada.push("nuevo");
  res.send(req.body);
  console.log(req.body);
});

app.put("/api/palabras/:pos", function (req, res) {
  let posicion = req.params.pos - 1;
  let objeto = req.body.buscada;
  objeto[posicion] = "cambiada";

  res.send(req.body.buscada);
  console.log(req.body);
});

app.delete("/api/palabras/:pos", function (req, res) {
  let posicion = req.params.pos - 1;
  let objeto = req.body.buscada;
  objeto.splice(posicion, 1);

  res.send(req.body.buscada);
  console.log(req.body);
});

app.listen(PORT, () => {
  console.log(`servidor http escuchando en http://localhost:${PORT}`);
});
