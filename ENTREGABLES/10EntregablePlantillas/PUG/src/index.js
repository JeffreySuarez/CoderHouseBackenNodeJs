const express = require("express");
const { Router } = express;
const PORT = 8080;

const app = express();
// const productos = Router();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const listaProductos = [];

//configuracion de EJS

app.set("views", "./views");
app.set("view engine", "pug");

app.get("/", (req, res) => {
  res.render("navBar", { listaProductos });
});

app.get("/productos", (req, res) => {
  res.render("historial", { listaProductos });
});

app.post("/productos", (req, res) => {
  listaProductos.push(req.body);
  console.log(listaProductos);
  res.redirect("/");
});

//Devuelve todos los productos
// productos.get("/", (req, res) => {
//   if (listaProductos.length === 0) {
//     res.send({ aviso: "No hay productos" });
//   } else {
//     return res.send(listaProductos);
//   }
// });

//recibe y agrega un producto con su ID asignado
// productos.post("/", (req, res) => {
//   const items = {
//     nombre: req.body.name,
//     edad: req.body.edad,
//     genero: req.body.genero,
//     celular: req.body.celular,
//   };
//   const newItems = { ...items, id: listaProductos.length + 1 };

//   listaProductos.push(newItems);

//   res.send(listaProductos);
// });

//devuelve un producto segun su ID
// productos.get("/:num", (req, res) => {
//   let numID = req.params.num * 1;

//   if (listaProductos.length === 0) {
//     res.send({ aviso: "No hay productos" });
//   } else if (numID > listaProductos.length || numID < 0) {
//     res.send({ Error: "El parámetro esta fuera de rango" });
//   } else if (isNaN(numID)) {
//     res.send({ Error: "El parámetro no es un número" });
//   } else {
//     let findID = listaProductos.find((item) => {
//       return item.id === numID;
//     });

//     res.send(findID);
//   }
// });

//eliminar producto segun su ID
// productos.delete("/:num", (req, res) => {
//   let numID = req.params.num * 1;

//   if (listaProductos.length === 0) {
//     res.send({ aviso: "No hay productos" });
//   } else if (numID > listaProductos.length || numID < 0) {
//     res.send({ Error: "El parámetro esta fuera de rango" });
//   } else if (isNaN(numID)) {
//     res.send({ Error: "El parámetro no es un número" });
//   } else {
//     let eraseID = listaProductos.splice(numID - 1, 1);
//     res.send(eraseID);
//   }
// });

//actualizar un producto segun su ID
// productos.put("/:num", (req, res) => {
//   let numID = req.params.num - 1;

//   if (listaProductos.length === 0) {
//     res.send({ aviso: "No hay productos" });
//   } else if (numID > listaProductos.length || numID < 0) {
//     res.send({ Error: "El parámetro esta fuera de rango" });
//   } else if (isNaN(numID)) {
//     res.send({ Error: "El parámetro no es un número" });
//   } else {
//     //le cambiare el nombre del producto segun su ID que se elija.
//     listaProductos[numID].nombre = "nuevo nombre";
//     res.send(listaProductos);
//   }
// });

// app.use("/productos", productos);
// app.use("/static", express.static("public"));

const server = app.listen(PORT, () => {
  console.log(`Servidor http escuchando en http://localhost:${PORT}`);
});
server.on("error", (error) => console.log(`Error on Server ${error}`));
