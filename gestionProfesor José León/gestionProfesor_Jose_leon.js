let profesores = [];
let esNuevo = true;

function buscarProfesor(nombre){
    for(let i=0; i<profesores.length;i++){
        if(profesores[i].nombre === nombre){
            return profesores[i];
        }
    }
    return null;
}

function agregarProfesor(profesor){
    let resultado = buscarProfesor(profesor.nombre);
    if(resultado === null ){
        profesores.push(profesor);
        alert("Profesor Agregado");
        limpiarCampos();
        ejecutarRegistro();
    }else{
        alert("Ya existe un profesor con nombre: "+profesor.nombre);
    }
}

function crearProfesor(){
    let nombres = recuperarTextoEnCaja("txtNombre");
    let edades = recuperarTextoEnCaja("txtEdad");
    let emailes = recuperarTextoEnCaja("txtEmail");

    /*if(esNuevo){
        
    }*/
    agregarProfesor({
        nombre : nombres,
        edad : edades,
        email : emailes
    });


}

function mostrarCuentas() {
    let cmpTabla1 = document.getElementById("tablaProfesores");

    let contenidoTabla = "<table border='1'><tr>" +
        "<th>NOMBRE</th>" +
        "<th>EDAD</th>" +
        "<th>EMAIL</th>" +
        "</tr>";

    for (let i = 0; i < profesores.length; i++) {
        contenidoTabla +=
            "<tr><td>" + profesores[i].nombre + "</td>" +
            "<td>" + profesores[i].edad + "</td>" +
            "<td>" + profesores[i].email + "</td>" +
            "</tr>";
    }
    contenidoTabla += "</table>";
    cmpTabla1.innerHTML = contenidoTabla;
}

function limpiarCampos() {
    mostrarTextoEnCaja("txtNombre", "");
    mostrarTextoEnCaja("txtEdad", "");
    mostrarTextoEnCaja("txtEmail", "");
}

function buscarPorNombre(){
    let nombreBuscar = recuperarTextoEnCaja("txtBuscarProfesor");
    let profesor = buscarProfesor(nombreBuscar);

    if(profesor){
        mostrarTextoEnCaja("txtNombre", profesor.nombre);
        mostrarTextoEnCaja("txtEdad", profesor.edad);
        mostrarTextoEnCaja("txtEmail", profesor.email);
        esNuevo = false;
    }else{
        alert("No se encontro el nombre: "+nombreBuscar);
    }
}

function ejecutarNuevoProfesor(){
    mostrarComponente("divRegistrar");
    ocultarComponente("divTabla");
} 

function ejecutarRegistro(){
    mostrarComponente("divTabla");
    mostrarCuentas();
    ocultarComponente("divRegistrar");
}

function eliminar(){
    let nombre = recuperarTexto("txtNombre")
    for(let i = 0;i<profesores.length;i++){
        buscarProfesor = profesores[i]
        if(nombre== buscarProfesor.nombre||nombre== buscarProfesor.edad||nombre== buscarProfesor.email){
            profesores.splice(i,1)}
    }
    ejecutarRegistro();
}