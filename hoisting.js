/************* Hoisting ***********/

/************* Hoisting en Variables ********/
var miNombre; // declarando variable
miNombre = "Diego" // se inicializa

/******Prueba*********/
//Que valor da?

console.log(valor) // Su valor es = undefined

var valor = false;

//Respuesta:  llamamos una variable antes de declararla por lo que se genera un valor undefine

// Que valor da?

var valor1 = undefined;

console.log(valor1 + " Soy ese hoisting"); // Su valor es = undefine soy ese hosting

valor1 = "Entero";

console.log(valor1); // Su valor es = Entero

/************* Hoisting en Funciones ****************/
function hey(){
    console.log("Soy ese hoisting")
}
hey();

/*****Prueba*******/

// Que valor da?
hey1();           // llamo la funcion
function hey1(){  // Inicializo la funcion 
    console.log("hola soy "+miNombre)  // el valor es = hola soy Diego
}
// Respuesta las funciones se pueden llamar antes de ser declaradas

// Que valor da?
hey2();           // llamo la funcion
function hey2(){  // Inicializo la funcion 
    console.log("hola soy "+ miNombre1)  // el valor es = hola soy undefined
}
var miNombre1 = "Mauricio"; //declaro la variable
// Respuesta las variables no se pueden declarar luego de declarar la funcion, primero se declara la variable y luego se declara la funcion

// Que valor da?
hey3();           // llamo la funcion
var miNombre1 = "Mauricio"; //declaro la variable
function hey3(){  // Inicializo la funcion 
    console.log("hola soy "+ miNombre1)  // el valor es = hola soy Mauricio
}
// Respuesta las variables no se pueden declarar luego de declarar la funcion, primero se declara la variable y luego se declara la funcion

