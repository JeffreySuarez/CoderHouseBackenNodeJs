"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

// obtenemos los numeros aleatorios entre 0 a 255

/*
El Math.floor == aca nos dice hey no tems los numeros con sus decimales, que solo toma los enteros.
El Math.random va aleatorio de 0 a 1, por eso lo multiplicamos por 256 para que nos quede un numero que sea superior a eso.

*/
var getNum0to255 = function getNum0to255() {
  return Math.floor(Math.random() * 256);
}; //realizamos la clase


var Color = /*#__PURE__*/function () {
  function Color() {
    _classCallCheck(this, Color);
  }

  _createClass(Color, [{
    key: "get",
    value: //metodos
    function get() {
      //definimos el color con una constante.
      //genero mi string RGB.
      var color = "rgb(".concat(getNum0to255(), ", ").concat(getNum0to255(), ", ").concat(getNum0to255(), ")");
      return color;
    }
  }]);

  return Color;
}();
/*
vamos a tratar de obtener un color de la clase Color
*/


var color = new Color();
console.log(color.get());
