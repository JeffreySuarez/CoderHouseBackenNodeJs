const express = require("express");
const fs = require("fs");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
let PORT = 8080 || process.env.PORT;
class Contenedor {
  constructor() {
    this.productos = [];
  }
  leerArray() {
    const leer = fs.readFileSync("productos.txt", "utf-8");
    const contenido = JSON.stringify(leer);
    console.log(contenido);
    return contenido;
  }
  leerArrayRandom() {
    const items = JSON.parse(fs.readFileSync("productos.txt", "utf-8"));
    const quantity = items.length;
    const item = items[Math.floor(Math.random() * quantity)];
    return item;
  }
}
const listarProductos = new Contenedor();
listarProductos.leerArrayRandom();
app.get("/", function (req, res) {
  res.send("<h1>LISTA DE PRODUCTOS<h1>");
});
app.get("/productos", function (req, res) {
  res.send(`Listado de productos: ${listarProductos.leerArray()}`);
});
app.get("/productosRamdom", function (req, res) {
  const aleatorio = listarProductos.leerArrayRandom();
  res.json({ "El producto seleccionado": aleatorio });
});
app.listen(PORT, () => {
  console.log(`Servidor http escuchando en http://localhost:${PORT}`);
});
