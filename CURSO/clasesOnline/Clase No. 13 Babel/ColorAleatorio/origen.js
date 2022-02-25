// obtenemos los numeros aleatorios entre 0 a 255
/*
El Math.floor == aca nos dice hey no tems los numeros con sus decimales, que solo toma los enteros.
El Math.random va aleatorio de 0 a 1, por eso lo multiplicamos por 256 para que nos quede un numero que sea superior a eso.

*/

const getNum0to255 = () => Math.floor(Math.random() * 256);

//realizamos la clase

class Color {
  //metodos

  get() {
    //definimos el color con una constante.
    //genero mi string RGB.
    const color = `rgb(${getNum0to255()}, ${getNum0to255()}, ${getNum0to255()})`;

    return color;
  }
}

/*
vamos a tratar de obtener un color de la clase Color
*/

const color = new Color();

console.log(color.get());
