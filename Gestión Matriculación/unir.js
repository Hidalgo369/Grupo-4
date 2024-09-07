function materiap2() {
    mostrarComponente("angel");
    ocultarComponente("leython");
    ocultarComponente("jose");
    ocultarComponente("edison");
}
function estudiantes1 () {
    ocultarComponente("angel")
    mostrarComponente("leython");
    ocultarComponente("jose");
    ocultarComponente("edison");
}
estudiantes2 = function () {
    mostrarComponente("angel")
    ocultarComponente("leython");
    ocultarComponente("jose");
    ocultarComponente("edison");
}
profesor = function () {
    ocultarComponente("angel")
    ocultarComponente("leython");
    mostrarComponente("jose");
    ocultarComponente("edison");
}


let estudiantes = [
]

crearEstudiante = function () {
    let valorNombre = recuperarTexto("txtNombre");
    let valorCurso = recuperarTexto("txtCurso");
    let valorMatricula = recuperarTexto("txtMatricula");
    let estudiante = {}
    estudiante.nombre = valorNombre;
    estudiante.curso = valorCurso;
    estudiante.matricula = valorMatricula;
    return estudiante;
}

agregarEstudiante = function () {
    let objeto = crearEstudiante();
    estudiantes.push(objeto);
    console.log(estudiantes);
}

refrescarEstudiante = function () {
    let cmpTabla = document.getElementById("tabla");
    let contenidoTabla = "<table><tr>" +
        "<th>NOMBRE</th>" +
        "<th>CURSO</th>" +
        "<th>MATRICULA</th>" +
        "</tr>";
    let elementoEstudiante;
    for (let i = 0; i < estudiantes.length; i++) {
        elementoEstudiante = estudiantes[i];
        contenidoTabla +=
            "<tr><td>" + elementoEstudiante.nombre + "</td>"
            + "<td>" + elementoEstudiante.curso + "</td>"
            + "<td>" + elementoEstudiante.matricula + "</td>"
            + "</tr>";

    }
    contenidoTabla += "</table>";
    cmpTabla.innerHTML = contenidoTabla;
}

buscarEstudiante = function () {
    let idEstudiante = recuperarTexto("idEstudiante");
    let elementoEstudiante;
    let estudianteEncontrado;
    for (let i = 0; i < estudiantes.length; i++) {
        elementoEstudiante = estudiantes[i];
        if (elementoEstudiante.nombre == idEstudiante) {
            estudianteEncontrado = elementoEstudiante;
            return alert("Estudiante encontrado");
        }
    }
    return alert("Estudiante no encontrado");
}

eliminarMateria = function () {
    buscarEliminar = recuperarTexto("txtEliminar");
    let encontrado = false;
    for (let i = 0; i < estudiantes.length; i++) {
        if (estudiantes[i].nombre == buscarEliminar) {
            estudiantes.splice(i, 1);
            alert("Estudiante eliminado exitosamente");
            refrescarEstudiante();
            encontrado = true;
        }
        if (!encontrado) {
            alert("El estudiante no se encontró");
        }
    }
}
let materias = [
    { nombre: "CIENCIAS", codigo: "01", descripcion: "Dirigida por:Mateo" },
    { nombre: "FILOSOFIA", codigo: "02", descripcion: "Dirigida por:Leython" },
    { nombre: "MATEMATICAS", codigo: "03", descripcion: "Dirigida por:Gallón" },
    { nombre: "LITERATURA", codigo: "04", descripcion: "Dirigida por:Diego" }
]


crearMateria = function () {
    materia = {
    }
    nombre_Materia = recuperarTexto("txtMateria")
    codigo_Materia = recuperarTexto("txtCodigo")
    descripcion_Materia = recuperarTexto("txtDescripcion")
    materia.nombre = nombre_Materia
    materia.codigo = codigo_Materia
    materia.descripcion = descripcion_Materia

    return materia
}

agregarMateria = function () {
    materia = crearMateria()
    materias.push(materia)
    console.log(materias)
}

refrescarMaterias = function () {
    let cmp = document.getElementById("tablaMaterias")
    let contenidoTabla = "<table><tr><th>Nombre</th><th>Codigo</th><th>Descripcion</th></tr>"
    for (let i = 0; i < materias.length; i++) {
        materiaIterada = materias[i]
        contenidoTabla += "<tr><td>" + materiaIterada.nombre + "</td><td>" + materiaIterada.codigo + "</td><td>" + materiaIterada.descripcion + "</td></tr>"
    }
    contenidoTabla += "</table>"
    cmp.innerHTML = contenidoTabla
}

buscarMaterias = function () {
    coincidencia = recuperarTexto("txtBuscar")
    let materia_encontrada = null
    for (let i = 0; i < materias.length; i++) {
        materiaIterada = materias[i]
        if (coincidencia == materiaIterada.codigo || coincidencia == materiaIterada.nombre || coincidencia == materiaIterada.descripcion) {
            materia_encontrada = materiaIterada
        }
    }
    if (materia_encontrada == null) {
        alert("MATERIA NO ENCONTRADA")
    } else {
        alert("MATERIA ENCONTRADA")
    }
}

eliminarMateria = function () {
    coincidencia = recuperarTexto("txtEliminar")
    for (let i = 0; i < materias.length; i++) {
        materiaIterada = materias[i]
        if (coincidencia == materiaIterada.codigo || coincidencia == materiaIterada.nombre || coincidencia == materiaIterada.descripcion) {
            materias.splice(i, 1)
        }
    }
    refrescarMaterias()

}

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

estudiantes = [];
crearEstudiante = function () {
    let nombre = recuperarTexto("txtNombre");
    let curso = recuperarTexto("txtCurso");
    let matricula = recuperarTexto("txtMatricula");
    estudiante = [];
    estudiante.nombre = nombre;
    estudiante.curso = curso;
    estudiante.matricula = matricula;
    estudiantes.push(estudiante);
    return estudiante;
}
agregarEstudiante = function () {
    let objetos;
    let objeto = crearEstudiante();
    console.log(objeto);

}
refrescarEstudiante = function () {
    let cmpTabla = document.getElementById("tabla");
    let contenidoTabla = "<table><tr>" +
        "<th>NOMBRE</th>" +
        "<th>CURSO</th>" +
        "<th>MATERIA</th>"
    "</tr>";
    let estudianteAgregar;
    for (let i = 0; i < estudiantes.length; i++) {
        estudianteAgregar = estudiantes[i];
        contenidoTabla +=
            "<tr><td>" + estudianteAgregar.nombre + "</td>"
            + "<td>" + estudianteAgregar.curso + "</td>"
            + "<td>" + estudianteAgregar.matricula + "</td>"
            + "</tr>" //CADA TD ES UNA CELDA, Y COMO ESTA TODO DENTRO DE UN TR VA EN UNA SOLA FILA 
    }
    contenidoTabla += "</table>";
    cmpTabla.innerHTML = contenidoTabla;
}

buscarEstudiante = function (nombre) {
    nombre = recuperarTexto("txtBuscar");
    for (let i = 0; i < estudiantes.length; i++) {
        if (nombre == estudiantes[i].nombre) {
            return alert("Estudiante encontrado");
        }
    }
    return alert("Estudiante no encontrado")
}
limpiar = function () {
    buscar = recuperarTexto("txtEliminar")
    for(let i = 0;i<estudiantes.length;i++){
        buscarEstudiantes = estudiantes[i]
        if(buscar==buscarEstudiantes.nombre||buscar==buscarEstudiantes.curso||buscar==buscarEstudiantes.materias){
            estudiantes.splice(i,1)}
    }
    refrescarEstudiante()
    


}