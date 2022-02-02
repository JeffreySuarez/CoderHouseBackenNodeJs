const express = require("express");

const app = express();

//configuracion EJS en la plantilla

app.set("view engine", "ejs");
app.set("views", "./views");

//index pages

app.get("/", (req, res) => {
  let mascotas = [
    { name: "sammy", organization: "DigitalOcean", birth_year: 2012 },
    { name: "Tux", organization: "Linux", birth_year: 1996 },
    { name: "Moby Dick", organization: "Docker", birth_year: 2013 },
  ];
  let tagline =
    "No programing concept is complete without a cute animal mascot.";
  res.render("pages/index", {
    mascotas: mascotas,
    tagline: tagline,
  });
});

//about page
app.get("/about", (req, res) => {
  res.render("pages/about");
});

app.listen(8080);
console.log("8080 is the magic port");

// sintaxis basica (etiquetas)

/*
<%= Incrusta en la plantilla el valor tal cual
<%- Incrusta en la plantilla el valor renderizado como HTML
<% "Scriptlet": Admite instrucciones en JS para declaración de variables y control de flujo.

ejemplo

<% const estilo = "color:black"; %>
<% if (message) { %>
  <h2 style=<%=estilo%>><%= message.name %></h2>

<%}%>


*/
