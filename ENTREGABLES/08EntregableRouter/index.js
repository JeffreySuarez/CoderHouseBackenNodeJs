const express = require("express");
const { Router } = express;
const PORT = 8080;

const app = express();
const productos = Router();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const listaProductos = [];

//Devuelve todos los productos
productos.get("/", (req, res) => {
  res.send(listaProductos);
});

//recibe y agrega un producto con su ID asignado
productos.post("/", (req, res) => {
  const items = {
    nombre: req.body.name,
    edad: req.body.edad,
    genero: req.body.genero,
    celular: req.body.celular,
  };
  const newItems = { ...items, id: listaProductos.length + 1 };

  listaProductos.push(newItems);

  res.send(listaProductos);
});

//devuelve un producto segun su ID
productos.get("/:num", (req, res) => {
  let numID = req.params.num * 1;
  let findID = listaProductos.find((item) => {
    return item.id === numID;
  });

  res.send(findID);
});

//eliminar producto segun su ID
productos.delete("/:num", (req, res) => {
  let numID = req.params.num * 1;
  let eraseID = listaProductos.splice(numID - 1, 1);
  res.send(eraseID);
});

//actualizar un producto segun su ID
productos.put("/:num", (req, res) => {
  let numID = req.params.num - 1;

  listaProductos[numID].nombre = "nuevo nombre";
  res.send(listaProductos);
});

app.use("/productos", productos);
app.use("/static", express.static("public"));
app.listen(PORT, () => {
  console.log(`Servidor http escuchando en http://localhost:${PORT}`);
});
