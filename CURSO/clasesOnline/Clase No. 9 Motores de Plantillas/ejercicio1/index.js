const express = require("express");
const fs = require("fs");

const app = express();

//definimos el motor de plantilla

app.engine("ntl", function (filePath, options, callback) {
  fs.readFile(filePath, function (err, content) {
    if (err) {
      return callback(new Error(err));
    } else {
      const rendered = content
        .toString()
        .replace("#title#", "" + options.title + "")
        .replace("#message#", "" + options.message + "");

      return callback(null, rendered);
    }
  });
});

app.set("views", "./views"); //especifica el directorio de vistas
app.set("view engine", "ntl"); // registra el motor de plantilla

app.get("/", function (req, res) {
  res.render("index", { title: "Greetings", message: "Hello there!" });
  //la finalidad de esto es que se renderice algo, renderice unos elementos dentro del DOM
  //aca digo, el archivo que esta dentro de este views se va a llamar index, y que la data que le voy a pasar es title, message.
});

app.listen(8080);
