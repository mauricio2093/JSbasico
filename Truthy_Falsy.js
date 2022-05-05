/*¿Que tipos por default son verdaderos y falsos?

Usamos la función de JS que es Boolean() dentro del paréntesis ponemos el valor y nos dice si el mismo el False o True.

–> Falsy

Boolean() —> sin ningun valor es false
Boolean(0) —> false
Boolean(null) —> false
Boolean(NaN) —> false // NaN es Not and Number
Boolean(Undefined) —> false
Boolean(false) —> false
Boolean("") —> false
–> Truthy

Boolean(1) —> true //cualquier numero que no sea igual a cero es true
Boolean(“a”) —> true
Boolean(" ") —> true // siendo un espacio el valor es true
Boolean([]) —> true // un array nos da un true
Boolean({}) —> true // un objeto nos da el valor de true
Boolean(function() {}) —> true //una funcion tambien es true
Boolean(true) —> true
Todo esto lo vamos a usar en condiciones esto valida si es verdadero o falso para ejecutar cierta acción.

Enlaces a documentación en mozilla de Truthy y Falsy:
https://developer.mozilla.org/es/docs/Glossary/Falsy
https://developer.mozilla.org/es/docs/Glossary/Truthy*/



//Ejemplos en los que Boolean devuelve Falso:
var a = Boolean(0); //false
var b = Boolean(-1); // true
var c  = Boolean(1); // true
var abc = Boolean(Number);
var d  = Boolean(null); //false
var e  = Boolean(NaN); //false
var f  = Boolean(undefined); //false
var g  = Boolean(false); //false
var h = Boolean(""); //false

//Ejemplos en los que Boolean devuelve verdadero:
var i  = Boolean(1); //true para 1 o cualquier número diferente de cero (0)
var j  = Boolean("a"); //true para cualquier caracter o espacio en blanco en el string
var k = Boolean([]); //true aunque el array esté vacío
var l  = Boolean({}); //true aunque el objeto esté vacío
var m  = Boolean(function(){}); //Cualquier función es verdadera también
console.log(`${a}\n${b}\n${c}\nNumber:${abc}\n${d}\n${e}\n${f}\n${g}\n${h}\n${i}\n${j}\n${k}\n${l}\n${m}`);
