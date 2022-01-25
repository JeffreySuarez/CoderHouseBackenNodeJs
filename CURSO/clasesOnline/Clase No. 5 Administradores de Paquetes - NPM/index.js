let productos = [
  { id: 1, nombre: "televisor", precio: 600 },
  { id: 2, nombre: "camara", precio: 250 },
  { id: 3, nombre: "computador", precio: 1200 },
  { id: 4, nombre: "teclado", precio: 200 },
  { id: 5, nombre: "mouse", precio: 50 },
  { id: 6, nombre: "monitor", precio: 300 },
  { id: 7, nombre: "microfono", precio: 120 },
  { id: 8, nombre: "mousepad", precio: 30 },
];

const nombres = productos.map((e) => e.nombre).join(", ");

const total = productos.map((e) => e.precio).reduce((a, b) => a + b, 0);
let total1 = 0;

productos.forEach((e) => {
  total1 += e.precio;
});

console.log(total);
console.log(total1);

const promedio = total / productos.length;

console.log(promedio);

const ordenar = productos.sort((a, b) => (a.precio > b.precio ? -1 : 1));
console.log(ordenar);

const maximo = ordenar[0];
const minimo = ordenar[productos.length - 1];

console.log(` El producto maximo es: 
  ${Math.max.apply(
    null,
    productos.map((e) => e.precio)
  )}`);
console.log(
  `El producto minimo es: ${Math.min.apply(
    null,
    productos.map((e) => e.precio)
  )}`
);

console.log(maximo, minimo);

const obj = {
  nombre: "",
  total: "",
  promedio: "",
  max: "",
  min: "",
};

console.log(obj);
