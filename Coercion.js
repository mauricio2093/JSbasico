var a = 4 + "7"; // esto esta concatenando, "juntando dos valores distintos"
console.log(" var a = 4 + '7'; su valor es = "+ a +" , es de tipo " + typeof a); // coercion implicita

var b = 4 * "7"; // esto es una operacion"
console.log(" var b = 4 * '7'; su valor es = "+ b +" , es de tipo " + typeof b); // coercion implicita

var c = 40; // esto es una operacion"
var d = c + " ";
console.log(" var c = 4; var d = c + '7'; su valor es = "+ d +" , es de tipo " + typeof d); // coercion implicita

var e = String(c); // esto es una coercion explicita
console.log(`el tipo de c es ${typeof c}, var e = String(c); el valor de e = ${e} y ahora el tipo de c es ${typeof e}`);

var f = Number(e);
console.log(`el tipo de e es ${typeof e}, var f = Number(c); el valor de e = ${f} y ahora el tipo de e es ${typeof f}`);

