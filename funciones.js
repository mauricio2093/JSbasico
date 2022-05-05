/*********** Funciones *********/

// Cuando hablamos de funciones en JavaScript, tenemos dos tipos de funciones: Funciones Declarativas (function declaration / function statement) y Expresiones de función (function expression / funciones anónimas).

// Funciones Declarativas: En las funciones declarativas, utilizamos la palabra reservada function al inicio para poder declarar la función:

function miFucion(){
    return 3;
}
console.log(miFucion());

//Expresión de función:En la expresión de función, la declaración se inicia con la palabra reservada var, donde se generará una variable que guardará una función anónima.
//En la expresión de función, la función podría o no llevar nombre, aunque es más común que se hagan anónimas.

var miFucion1 = function(){
    a=1;
    b=2;
    return a + b;
}
console.log(miFucion1());

var miFucion2 = function(a,b){
    return a + b;
}
console.log(miFucion2(1,2));



/******* Ejemplos *********/
function saludarEquipo(persona){
    console.log(`Hola ${persona} Cómo Estas?`);
}
saludarEquipo("Samuel");

function operacion(a,b,c,d){
    var resultado = (a+b)*c/d;
    return resultado;
}
console.log(operacion(1,2,30,6));

function operacion1(a,b,c,d){
    return (a+b)*c/d;
}
console.log(operacion1(1,2,30,6));

//Diferencias:
//A las funciones declarativas se les aplica hoisting, y a la expresión de función, no. Ya que el hoisting solo se aplica en las palabras reservadas var y function.
//Lo que quiere decir que con las funciones declarativas, podemos mandar llamar la función antes de que ésta sea declarada, y con la expresión de función, no, tendríamos que declararla primero, y después mandarla llamar.