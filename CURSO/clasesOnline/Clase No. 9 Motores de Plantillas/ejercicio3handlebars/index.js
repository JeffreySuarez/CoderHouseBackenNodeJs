const express = require("express");

//cargamos el modulo handlebars

const app = express();
const exphbs = require("express-handlebars");

//configuramos handlebars
app.engine(
  "hbs", //Nombre referencia a la plantilla(se usa luego en set)
  exphbs.engine({
    //funcion de configuracion  handlebars
    extname: "hbs", //extension a utilizar
    defaultLayout: "index.hbs", //plantilla principal
    // layoutsDir: __dirname + "/views/layouts", //ruta de plantilla principal
    // partialsDir: __dirname + "/views/partials/", //ruta a las plantillas parciales
  })
);

//establecemos el motor de plantilla que se utiliZA
app.set("view ingine", "hbs");
//establecemos directorio donde se encuentran los archivos de la plantilla
app.set("views", "public");

app.get("/", (req, res) => {
  res.render("datos.hbs", {
    nombre: "Jeffrey",
    apellido: "Suarez",
    edad: 42,
    email: "jasr7221@gmail.com",
    telefono: 3124216951,
  });
});

//espacio publico del servidor
app.use(express.static("public"));

app.listen(8080);
