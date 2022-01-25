function random(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
//clave valor

function generar() {
  let o = {}; //clave:valor -> clave numero, valor: canitdad
  for (let i = 0; i < 100; i++) {
    let n = random(1, 20);
    if (n in o) o[n]++;
    else o[n] = 1;
  }
  return o;
}
console.log(generar());
let o = {
  nombre: "Pablo",
  edad: "41",
};

console.log(`Mi nombre es: ${o.nombre} y mi edad es ${o.edad}`);
