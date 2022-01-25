class Persona {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }

  static saludoCorto = "hola";

  saludoCompleto() {
    console.log(`Buenas, soy ${this.nombre}`);
  }

  saludoEstatico() {
    console.log(Persona.saludoCorto);
  }
}

const jeffrey = new Persona("Jeffrey", 42);
const Juan = new Persona("Juan", 21);

console.log(jeffrey.saludoCompleto());
console.log(jeffrey.saludoEstatico());
