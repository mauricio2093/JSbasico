/*El Scope o ámbito es lo que define el tiempo de vida de una variable, en que partes de nuestro código pueden ser usadas.
Global Scope
Variables disponibles de forma global se usa la palabra var, son accesibles por todos los scripts que se cargan en la página y se declaran fuera de una función o bloque. Aquí hay mucho riesgo de sobreescritura.
l Local Scope: se refiere a la variable o funcion que esta dentro de un bloque o funcion especifica. Solo se pueden acceder a ellas (ejecutar o llamar) dentro del entrono en donde conviven.

El ambito lexico: se refiere a que una funcion puede acceder a una funcion o variable fuera de ella.Cada nivel interno puede acceder a sus niveles externos hasta poder alcanzarlas.
Function Scope
Variables declaradas dentro de una función utilizando var sólo visibles dentro de ella misma (incluyendo los argumentos que se pasan a la función).
Block Scope
Variables definidas dentro de un bloque, por ejemplo variables declaradas dentro un loop while o for. Se usa let y const para declarar este tipo de variables.
Module Scope
Cuando se denota un script de tipo module con el atributo type="module las variables son limitadas al archivo en el que están declaradas.*/

var nombre = "Mauricio"; //Scope Global

function fun(){
    var apellido = "Cadena"; //Scope Local
    return `Mi nombre es ${nombre} ${apellido}`;
}

console.log(fun());

/*********** Ejemplo ***********/

var miNombre = "Diego";

function nombreCompleto(){
    var miApellido = "De Granada";
    console.log(`${miNombre} ${miApellido}`);
}

nombreCompleto();