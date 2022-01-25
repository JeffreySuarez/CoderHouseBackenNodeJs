class Usuario {
  nombre = "";
  apellido = "";
  libros = {};
  mascotas = [];

  constructor(
    nombre = "Sin nombre",
    apellido = "Sin apellido",
    libros = "Sin libros",
    mascotas = "Sin mascotas"
  ) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.libros = libros;
    this.mascotas = mascotas;
  }

  //primer metodo getFullName
  getFullName() {
    console.log(`El nombre completo es: ${this.nombre} ${this.apellido}`);
  }

  //segundo metodo addMascota
  addMascotas() {
    let arrayDeMascotas = [];
    arrayDeMascotas.push(this.mascotas);
    console.log(arrayDeMascotas);
    return arrayDeMascotas;
  }

  //tercer metodo countMascotas
  countMascotas() {
    let cantidadMascotas = this.mascotas;
    cantidadMascotas = cantidadMascotas.length;

    console.log(
      `La cantidad de mascotas que tiene el usuario son: ${cantidadMascotas}`
    );
    return cantidadMascotas;
  }

  //cuarto metodo addBook
  addBook() {
    let arrayDeLibros = [];
    arrayDeLibros.push(this.libros);
    console.log(arrayDeLibros);
    return arrayDeLibros;
  }

  //quinto metodo getBookNames

  getBookNames() {
    let arrayNombre = [];

    this.libros.forEach((element) => {
      arrayNombre.push(element.titulo);
    });
    console.log(arrayNombre);
  }
}

const usuario1 = new Usuario(
  "Peter",
  "Parker",

  [
    {
      titulo: "Harry Potter",
      autor: "J.K Rowling",
    },
    { titulo: "El Código da Vinci", autor: "de Dan Brown" },
  ],
  ["loro", "perro", "gato", "caballo"]
);

const usuario2 = new Usuario(
  "Tony",
  "Stark",
  [
    { titulo: "Lo que el viento se llevo", autor: "Margaret Mitchell" },
    { titulo: "El Alquimista", autor: "Paulo Coelho" },
  ],
  ["Canario", "Murcielago", "Cocodrilo", "Cacatua", "Tortuga"]
);

console.warn("USUARIO1");
console.log(usuario1);
usuario1.getFullName();
usuario1.addMascotas();
usuario1.countMascotas();
usuario1.addBook();
usuario1.getBookNames();

console.warn("USUARIO2");
console.log(usuario2);
usuario2.getFullName();
usuario2.addMascotas();
usuario2.countMascotas();
usuario2.addBook();
usuario2.getBookNames();
