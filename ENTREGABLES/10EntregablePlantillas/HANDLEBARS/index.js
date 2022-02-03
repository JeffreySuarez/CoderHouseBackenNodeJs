const express = require("express");

//cargamos el modulo handlebars

const app = express();
const exphbs = require("express-handlebars");
const PORT = 8080;
//configuramos handlebars
app.engine(
  "hbs", //Nombre referencia a la plantilla(se usa luego en set)
  exphbs.engine({
    //funcion de configuracion  handlebars
    extname: "hbs", //extension a utilizar
    defaultLayout: "index.hbs", //plantilla principal
    layoutsDir: __dirname + "/public/layouts", //ruta de plantilla principal
    partialsDir: __dirname + "/public/partials/", //ruta a las plantillas parciales
  })
);

const listaProductos = [];

//establecemos el motor de plantilla que se utiliZA
app.set("view ingine", "hbs");
//establecemos directorio donde se encuentran los archivos de la plantilla
app.set("views", "public");

app.get("/", (req, res) => {
  res.render("datos.hbs", { listaProductos });
});

app.get("/productos", (req, res) => {
  res.render("datos1.hbs", { listaProductos });
});

app.post("/productos", (req, res) => {
  listaProductos.push(req.body);
  console.log(listaProductos);
  res.redirect("/");
});

//espacio publico del servidor
app.use(express.static("public"));

const server = app.listen(PORT, () => {
  console.log(`Servidor http escuchando en http://localhost:${PORT}`);
});
server.on("error", (error) => console.log(`Error on Server ${error}`));
