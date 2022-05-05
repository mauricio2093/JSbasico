//operadores suma, resta, multiplicacion, divicion
//operaciones matematicas - operadores binarios
var suma = 3+2;
var resta = 3-2;
var multiplicacion = 3*2;
var divicion = 3/2;
var modulo = 13 % 5;
var exponente = 3**4;
console.log(`3**4 = ${exponente}\n13%5 = ${modulo}\n3+2 = ${suma}\n3-2 = ${resta}\n3*2 = ${multiplicacion}\n3/2 = ${divicion}`);

//operador de asignacion
var a = 1;
//Operador +
var sumStr = "Mauricio " + " Cadena" ;
console.log(sumStr);

//Operadores lógicos
var negacion = !false;
var and = 1 && 2;
var or = 1 || 2;

// Operadores de comparacion
var igualdad = 3=="3"; // validar el contenido  comparando solo el valor
var igualdad1 = 3==="3"; // valida que el tipo y el valor sean iguales
console.log(igualdad + "\n" + igualdad1)

var desigualdad = 3!="3";
var desigualdad1 = 3!=="3";
console.log(desigualdad + "\n" + desigualdad1)

var mayor = 2>3;
var mayorIgual = 3>=2;
var menor = 3<4;
var menorIgual = 8<=4
console.log(mayor+"\n"+mayorIgual+"\n"+menor+"\n"+menorIgual)

// Operador de aumento y decremento
var años = 40;
console.log(++años)
console.log(años += 2)
var edad = 40;
console.log(--edad)
console.log(edad -= 2)