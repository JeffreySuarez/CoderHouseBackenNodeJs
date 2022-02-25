"use strict";

var lista = [2, 3, 5, 7];
lista
  .map(function (x) {
    return x * x;
  })
  .forEach(function (x) {
    return console.log(x);
  });

//ejemplo importante

var data = {};
console.log(data === null || data === void 0 ? void 0 : data.name);
