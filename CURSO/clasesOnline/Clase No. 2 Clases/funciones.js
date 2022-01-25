function crearGritarNombre(nombre) {
  const signosDeExclamacion = "!!!";
  return function () {
    console.log(`${nombre} ${signosDeExclamacion}`);
  };
}

const respuesta = crearGritarNombre("CoderHouse");

respuesta();
