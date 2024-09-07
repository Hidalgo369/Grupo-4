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
refrescarEstudiante = function(){
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

buscarEstudiante=function(nombre){
     nombre=recuperarTexto("txtBuscar");
    for(let i=0;i<estudiantes.length;i++){
        if(nombre==estudiantes[i].nombre){
            return alert("Estudiante encontrado");
        }
    }
    return alert("Estudiante no encontrado")
}