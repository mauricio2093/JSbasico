
/**************** Variable VAR ****************/
/*Var: Era la forma en que se declaraban las variables hasta ECMAScript 5. Casi ya no se usa porque es de forma 
global y tiene las siguientes características:*/

//- Se puede reinicializar: osea todas las variables se inicializan, por ejemplo:

var pokemonType = "electric"; //entonces reinicializar es:
var pokemonType = "grass" //osea la misma variable con diferentes datos el último dato predomina.
console.log(pokemonType);
//- Se puede reasignar: osea la variable ya inicializada le reasignamos otro valor por ejemplo: 

/*inicializamos la variable:*/ var pokemonType = "electric";
/*ahora la reasignamos*/  pokemonType = "grass"; //ya no va var
console.log(pokemonType);
/*- Su alcance es función global: osea inicializamos la variable, pero la podemos llamar desde cualquier 
bloque (una llave abierta y una cerrada {}) pero hay que tener mucho cuidado con ello ya que puede haber 
peligro, no es recomendable usar VAR.*/

/************** Otras Variables*****************/
//const y let es la forma en que se declaran las variables a partir de ECMAScript 6,

/*************** Variable Const *******************/ 
//const: sirve para declarar variables que nunca van a ser modificadas:

//- No se puede reinicilizar: es una const única no puede haber otra inicializada con el mismo nombre. 
const pokemonType1 = "electric"; //no puede haber:
//const pokemonType1 = "grass";

//-No se pude re asignar: una vez que la hayamos inicializado no la podemos reasignar solo con su nombre: 
const pokemonType2 = "electric"; //no puede ejecutarse:
//pokemonType2 = "grass";
console.log(pokemonType2);
//-No es inmutable: osea no puede cambiar con objetos:


/************* Variable Let ********************/
//Let: Son variables que pueden ser modificadas, se pueden cambiar:
//- No se puede reinicilizar: es una const única no puede haber otra inicializada con el mismo nombre. 
let pokemonType3 = "electric"; //no puede haber:
//let pokemonType3 = "grass";

//-Se puede reasignar: Osea la variable ya inicializada le reasignamos otro valor por ejemplo: inicializamos la variable: 
let pokemonType4 = "electric"; // ahora la reasignamos 
pokemonType4 = "grass";
console.log(pokemonType4);

//- Su contexto es de bloque: Solo funciona dentro de un bloque {}, fuera de ello no.

/******************** Ejemplo **********************/

var nombre = "Mauricio";
console.log(nombre);

//declarar
var edad;
console.log(edad);

//inicializar variable
edad=30;
console.log(edad);

var elementos = ["computadora", "celular"];
console.log(elementos);
console.log(elementos[0]);

var persona = {
    nombre: "Diego",
    edad: 30,
    sexo: "Masculino",
    soltero: false
};
console.log(persona);
console.log(persona.nombre);
console.log(`${persona.nombre} tiene ${persona.edad} años`);