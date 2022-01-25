const promediar = (a, b) => (a + b) / 2;
const p = promediar(4, 8);
console.log(p);

const example = () => ({ name: "CoderHouse" });

console.log(example());

//CALLBACKS:  se ven cuando pasamos funciones como parametros a otras funciones.. tambien son funciones que son parametros de otra funcion..son funciones como parametros.

// const ejecutar = (unaFuncion) => unaFuncion();
// const saludar = () => console.log("Saludar");
// ejecutar(saludar);

const ejecutar = (cualquierFuncion) => cualquierFuncion();

const decirHi = () => console.log("Hi");

ejecutar(() => console.log("Hola"));
ejecutar(decirHi);

const funcion1 = (funcion2, params) => funcion2(params);
const funcion3 = (publicoASaludar) => console.log(`Hola ${publicoASaludar}`);

funcion1(funcion3, "Estudiantes Coder House");

const operacion = (a, b, func) => func(a, b);

const sumar = (a, b) => a + b;

const suma = operacion(4, 5, sumar);

console.log(suma);
