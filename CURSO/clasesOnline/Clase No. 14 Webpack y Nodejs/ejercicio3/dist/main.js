(()=>{"use strict";var e={287:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=class{static cuadrado(e){return 4*e}static rectangulo(e,t){return 2*e+2*t}static circulo(e){return 2*Math.PI*e}}},728:function(e,t,r){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const u=o(r(860)),a=o(r(287)),s=(0,u.default)();s.get("/perimetro/cuadrado",((e,t)=>{const{lado:r}=e.query;let o;o=a.default.cuadrado(Number(r)),t.json({calculo:"perimetro",figura:"cuadrado",resultado:o})})),s.listen(8080,(()=>{console.log("conectando el puerto: 8080")}))},860:e=>{e.exports=require("express")}},t={};!function r(o){var u=t[o];if(void 0!==u)return u.exports;var a=t[o]={exports:{}};return e[o].call(a.exports,a,a.exports,r),a.exports}(728)})();