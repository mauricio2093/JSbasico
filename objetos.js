var miAuto = {
    marca: "Toyota",
    modelo: "Corolla",
    año: 2020,
    detalleDelAuto: function(){
        console.log(`Auto ${this.modelo} ${this.año}`);
    }
};
console.log(miAuto);
console.log(miAuto.modelo);
console.log(miAuto.marca);
miAuto.detalleDelAuto();
