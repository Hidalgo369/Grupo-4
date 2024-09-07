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