/*======            
Los objetos en JS (objetos, arrays, funciones y básicamente todo lo que no sea un valor primitivo)
se almacenan en la parte de memoria que de llama Memory Heap. 
Los valores primitivos son almacenados en el Call Stack, dentro del 
Scope (Contexto de Ejecución de la función que tenga acceso a esa variable). 
Acceder al Call Stack es mucho más rápido que al Heap.
Además, en el Call Stack también se guardan las referencias, “como si fueran valores primitivos”. 
Cuando se asigna una variable a otra y esta apunta a un objeto, se copia la referencia, como si fuera un valor primitivo. 
Si el objeto tiene atributos como un número por ejemplo, este se guarda en la posición de memoria reservada para ese objeto. 
Los objetos también pueden tener más objetos dentro. En ese caso, 
dentro de la posición de memoria de ese objeto se va a guardar una referencia a otra posición de memoria.
======*/

//Single thread (Synchronous) --> Sincronia que tiene JS: Solo puede hacer una tarea a la vez.

/*======  
        Memory heap                     call Stack
    _________________________       _________________________
    |                       |       |                       |
    |  |_|                  |       |                       |
    |            |_||_|     |       |                       |
    |                       |       |                       |
    |     |_|               |       |                       |   
    |                       |       |                       |
    |        Variables      |       |                       |       
    |            |_|        |       |                       |
    |                       |       |                       |
    |                       |       |                       |
    |                       |       |    _________________  |
    |      |_|              |       |   |_________________| |
    |    |_|                |       |                       |
    |                       |       |    _________________  |
    |      |_|              |       |   |_________________| |
    |            |_||_|     |       |                       |
    |                       |       |    _________________  |
    |      |_|              |       |   |_________________| |
    |                       |       |    _________________  |
    |      |_|              |       |   |_________________| |
    |      |_|              |       |   |___Global Obje___| |
    |_______________________|       |_______________________|

======*/
var nombre = "Mauricio";
const edad = 28;
const carro ={
    marca: "toyota",
    modelo: "2009"
}