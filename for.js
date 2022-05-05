/*======  For y For....of ======*/
var estudiantes = ["Maria", "sergio", "Rosa", "Daniel"];
function saludarEstudiantes(estudiante){
    console.log(`Hola ${estudiante}`);
};

for(var i = 0; i < estudiantes.length; i++){
    saludarEstudiantes(estudiantes[i]);
}

for(var estudiante of estudiantes){
    saludarEstudiantes(estudiante);
}