const express = require("express");
const { promises: fs } = require("fs");

const app = express();

//definimos el motor de plantillas

app.engine("cte", async (filePath, options, callback) => {
  try {
    const content = await fs.readFile(filePath);
    const rendered = content
      .toString()
      .replace("^^title$$", "" + options.title + "")
      .replace("^^mensaje$$", "" + options.mensaje + "")
      .replace("^^autor$$", "" + options.autor + "")
      .replace("^^version$$", "" + options.version + "");
    return callback(null, rendered);
  } catch (err) {
    return callback(new Error(err));
  }
});
app.engine("cte", async (filePath, options, callback) => {
  try {
    const content = await fs.readFile(filePath);
    const rendered = content
      .toString()
      .replace("^^nombre$$", "" + options.nombre + "")
      .replace("^^apellido$$", "" + options.apellido + "");
    return callback(null, rendered);
  } catch (err) {
    return callback(new Error(err));
  }
});

app.set("views", "./views"); //especificamos el directorio de vistas
app.set("view engine", "cte"); //especificamos el motor de plantilla

app.get("/cte1", (req, res) => {
  const datos = {
    title: "CTE1",
    mensaje: "Mensaje de CTE1",
    autor: "Jeffrey",
    version: "v1.1",
  };
  res.render("plantilla1", datos);
});

app.get("/cte2", (req, res) => {
  const datos = {
    nombre: "Jeffrey",
    apellido: "Suarez",
  };
  res.render("plantilla2", datos);
});

app.listen(8080);
