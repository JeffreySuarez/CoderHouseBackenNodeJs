// obtenemos los numeros aleatorios entre 0 a 255
/*
El Math.floor == aca nos dice hey no tems los numeros con sus decimales, que solo toma los enteros.
El Math.random va aleatorio de 0 a 1, por eso lo multiplicamos por 256 para que nos quede un numero que sea superior a eso.

*/
var getNum0to255 = function () { return Math.floor(Math.random() * 256); };
//realizamos la clase
var Color = /** @class */ (function () {
    function Color() {
    }
    //metodos
    Color.prototype.get = function () {
        //definimos el color con una constante.
        //genero mi string RGB.
        var color = "rgb(".concat(getNum0to255(), ", ").concat(getNum0to255(), ", ").concat(getNum0to255(), ")");
        return color;
    };
    return Color;
}());
/*
vamos a tratar de obtener un color de la clase Color
*/
var color = new Color();
console.log(color.get());
