const express = require("express");

//cargamos el modulo handlebars

const app = express();

//establecemos el motor de plantilla que se utiliZA
app.set("view ingine", "pug");
//establecemos directorio donde se encuentran los archivos de la plantilla
app.set("views", "views");

app.get("/", (req, res) => {
  res.render("hello.pug", {
    nombre: "Jeffrey",
    apellido: "Suarez",
    edad: 42,
    email: "jasr7221@gmail.com",
    telefono: 3124216951,
  });
});

app.listen(8080);
