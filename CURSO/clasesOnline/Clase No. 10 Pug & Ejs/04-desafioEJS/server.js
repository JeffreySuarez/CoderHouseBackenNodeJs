/*  1. Realizar un servidor que reciba por query params(
    mediante la ruta get '/datos') el valor que debe representar una barra de medicion
    (usando el tag de html meter)
*/

/*  2. Asimismo recibirá además los valores minimos y maximos permitidos
y el titulo que se pondra por arriba de la barra, en un elemento h1 en color 
azul( debe permitir formato HTML) 


*/

/*
Ejemplo de la peticion

http://localhost:8080/datos?min=10&nivel=15&max=20&titulo=<i>Medidor</i>

*/

/* 
    3. Como respuesta a este request, el servidor devolverá al frontend una
    plantilla armada con los datos recibidos.
*/

/*
    4. Utilizar pug integrado a express, manejando una plantilla comun
    y una particular con la representacion requerida.


*/

const express = require("express");

const app = express();

//configuracion PUG

app.set("view engine", "ejs");
app.set("views", "./views");

//rutas

app.get("/", (req, res) => {
  res.render("nivel.ejs", req.query);
});

app.listen(8080);
