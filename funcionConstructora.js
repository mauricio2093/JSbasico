function auto1(marca, modelo, año){
    this.marca = marca;
    this.modelo = modelo;
    this.año = año;
}

var auto1Nuevo = new auto1("Tesla", "Model 3", 2020);
console.log(auto1Nuevo);

var auto1Nuevo2 = new auto1("Tesla", "Modelo X", 2018);
console.log(auto1Nuevo2);

/*======  Ejemplo  ======*/
function auto (MARCA, MODELO, ANNIO){
    this.marca = MARCA;
    this.modelo = MODELO;
    this.annio = ANNIO;
    }
    var cantidadAutos = prompt("Ingresa la cantidad de autos");
    var autos = [];
    for(let i = 0 ; i < cantidadAutos ; i++){
        var marca = prompt("Ingresa la marca del auto");
        var modelo = prompt("Ingresa el modelo del auto");
        var annio = prompt("Ingresa el año del auto");
        autos.push(new auto (marca, modelo, annio));
    }
    
    for(let i = 0 ; i < autos.length ; i++){
        console.log(autos[i]);
    }

// asd
