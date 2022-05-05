// Los arrrays se representa con []

var frutas = ["Manzana", "Platano", "Cereza", "Fresa"];

console.log(frutas);
console.log(typeof frutas);
console.log(frutas.length);
console.log(frutas[3]);

//   agrgar valores al array
var masFrutas = frutas.push("Uvas");
console.log(frutas);


//se leccionar el ultimo valor
var ultimo = frutas.pop("Uvas");
console.log(ultimo);


var borrarFruta = frutas.shift("Uvas");
console.log(borrarFruta);

var nuevaLongitud = frutas.unshift("Uvas");
console.log(nuevaLongitud);

var posicion =  frutas.indexOf("Cereza");
console.log(posicion);

/*======  Recorrido de Arrays  ======*/

var articulos = [
    { nombre: "Bici", costo: 3000 },
    { nombre: "Tv", costo: 2500 },
    { nombre: "Libro", costo: 1000 },
    { nombre: "Celular", costo: 10000 },
    { nombre: "Laptop", costo: 20000 },
];

var articulosFiltrados = articulos.filter(function(articulo){
    return articulo.costo <= 3000
});
console.log(articulosFiltrados);

/*======  Metodo Map recorre array  ======*/

var nombreArticulo = articulos.map(function(articulo){
    return articulo.nombre;
});
console.log(nombreArticulo);
/*======  Recorriendo Arrays con .find() .forEach() .some()  ======*/
// .find()
var encuentraArticulo = articulos.find(function(articulo){
    return articulo.nombre === "Laptop";
})
console.log(encuentraArticulo);
// forEach
articulos.forEach(function(articulo){
    console.log(articulo.nombre);
});
// .some()
var articulosBaratos = articulos.some(function(articulo){
    return articulo.costo <=3000
});
console.log(articulosBaratos);

/*======  

Diferencia entre find y filter:

-El método find () devuelve el primer valor que coincide de la colección. 
Una vez que coincida con el valor en los resultados, no verificará los valores restantes en la colección de matriz.

-El método filter () devuelve los valores coincidentes en una matriz de la colección. 
Verificará todos los valores de la colección y devolverá los valores coincidentes en una matriz.  

======*/

/*======  Metodo .push()  ======*/
// El método .push() nos permite agregar uno o más elementos al final de un array. 

let numArray = [1,2,3,4,5];

function newNum(){
    // Agrego elemento
    numArray.push(6,7);
    // Reviso los numeros agregados
    console.log(numArray);
    
}
newNum()

/*======  Shift  ======*/
// Ahora pasemos a la otra cara de la moneda donde necesitamos eliminar un elemento del array. .shift() eliminar el primer elemento de un array, es decir, elimina el elemento que esté en el índice 0.

/*======  POP  ======*/
// El método .pop() eliminará el último elemento de un array. En este sentido, si tenemos un array de 5 elementos, pop() eliminará el elemento en el índice 4. Usemos el mismo ejemplo pero usando este método.


