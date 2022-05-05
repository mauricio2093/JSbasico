var celular = 1000;
var presupuesto = 10000;
var gasto = 10000*0.2;
if(gasto>= celular){
    console.log("puedes comprar el celular");
}else{
    console.log("no puedes comprar el celular");
}

var numero = 1;
var resultado = numero == 1 ? "Si soy un uno" : "no soy un uno";
console.log(resultado);


var pasword = "1234pc";
var  confirmPasword = "1234pC";
var createPasword = pasword === confirmPasword ? "Contraseña creada" : "Tu contraseña no coincide, intenta de nuevo";
console.log(createPasword);
