function crearMultiplicador(num1) {
  return function (num2) {
    console.log(num1 / num2);
  };
}

crearMultiplicador(2)(4);

function mostrarLista(lista) {
  if (lista.length > 0) {
    lista.forEach((item) => console.log(item));
  } else {
    console.log("Esta lista esta vacia");
  }
}

const lista = [];

const lista2 = [1, 2, 3];

mostrarLista(lista);
mostrarLista(lista2);
