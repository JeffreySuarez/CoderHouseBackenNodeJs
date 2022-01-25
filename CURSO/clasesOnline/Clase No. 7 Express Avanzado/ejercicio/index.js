const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let PORT = 8080;
let frase = "Hola mundo cómo están?";

app.get("/api/frase", function (req, res) {
  res.send({ frase });
});

app.get("/api/letras/:num", function (req, res) {
  let letra = req.params.num - 1;
  console.log(frase.charAt(letra));

  if (letra >= frase.length || letra < 0) {
    res.send({ mssg: "El parámetro está fuera de rango" });
  } else if (isNaN(letra)) {
    res.send({ mssg: "El parámetro no es un número" });
  } else {
    res.send(`<h1>${frase.charAt(letra)}<h1>`);
  }
});

app.get("/api/palabras/:num", function (req, res) {
  let numeroEnviado = req.params.num - 1;
  let palabras = frase.split(" ");
  console.log(palabras);

  if (numeroEnviado >= palabras || numeroEnviado < 0) {
    res.send({ mssg: "El parámetro está fuera de rango" });
  } else if (isNaN(numeroEnviado)) {
    res.send({ mssg: "El parámetro no es un número" });
  } else {
    res.send(`la Palabra es : ${palabras[numeroEnviado]}`);
  }
});

app.listen(PORT, () => {
  console.log(`servidor http escuchando en http://localhost:${PORT}`);
});
