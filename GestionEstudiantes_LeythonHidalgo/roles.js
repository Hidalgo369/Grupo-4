let empleados = [
    { cedula: "1714616123", nombre: "JOHN", apellido: "CENA", sueldo: 500.0 },
    { cedula: "0914632123", nombre: "LUISA", apellido: "GONZALEZ", sueldo: 900.0 },
    { cedula: "0987654321", nombre: "DANIEL", apellido: "PINTADO", sueldo: 5000.0 }
]

mostrarOpcionEmpleado = function () {
    mostrarComponente("divEmpleado");
    ocultarComponente("divRol");
    ocultarComponente("divResumen");
    mostrarEmpleados();
}

mostrarOpcionRol = function () {
    ocultarComponente("divEmpleado");
    mostrarComponente("divRol");
    ocultarComponente("divResumen");
    deshabilitarComponente("btnGuardarRol");
    mostrarRoles();
    mostrarTotales();
}

mostrarOpcionResumen = function () {
    ocultarComponente("divEmpleado");
    ocultarComponente("divRol");
    mostrarComponente("divResumen");
}

mostrarEmpleados = function () {
    mostrarComponente("tablaEmpleados");
    let cmpTabla = document.getElementById("tablaEmpleados");
    let contenidoTabla = "<table><tr>" +
        "<th>CEDULA</th>" +
        "<th>NOMBRE</th>" +
        "<th>APELLIDO</th>" +
        "<th>SUELDO</th>" +
        "</tr>";
    let elementoEmpleado;
    for (let i = 0; i < empleados.length; i++) {
        elementoEmpleado = empleados[i];
        contenidoTabla +=
            "<tr><td>" + elementoEmpleado.cedula + "</td>"
            + "<td>" + elementoEmpleado.nombre + "</td>"
            + "<td>" + elementoEmpleado.apellido + "</td>"
            + "<td>" + elementoEmpleado.sueldo + "</td>"
            + "</tr>";

    }
    contenidoTabla += "</table>";
    cmpTabla.innerHTML = contenidoTabla;
    deshabilitarCmpPrincipales();
}

let esNuevo = false;

ejecutarNuevo = function () {
    esNuevo = true;
    habilitarCmpPrincipales();
}

buscarEmpleado = function (cedula) {
    let elementoEmpleado;
    let empleadoEncontrado = null;
    for (let i = 0; i < empleados.length; i++) {
        elementoEmpleado = empleados[i];
        if (elementoEmpleado.cedula == cedula) {
            empleadoEncontrado = elementoEmpleado;
        }
    }
    return empleadoEncontrado;
}

agregarEmpleado = function (empleado) {
    let resultado = buscarEmpleado(empleado.cedula);
    if (resultado == null) {
        empleados.push(empleado);
        return true;
    } else {
        return false;
    }
}

guardar = function () {
    let valorCedula = recuperarTexto("txtCedula");
    let valorNombre = recuperarTexto("txtNombre");
    let valorApellido = recuperarTexto("txtApellido");
    let valorSueldo = recuperarFloat("txtSueldo");
    limpiarErrores();
    let validaciones = 0;
    if (valorCedula.length == 10 && esDigito(valorCedula)) {
        validaciones++;
    } else {
        mostrarTexto("lblErrorCedula", "Cédula no válida, debe contener 10 dígitos");
    }
    if (valorNombre.length >= 3 && esMayuscula(valorNombre)) {
        validaciones++;
    } else {
        mostrarTexto("lblErrorNombre", "El nombre debe estar en mayúscula y al menos tener 3 caracteres");
    }
    if (valorApellido.length >= 3 && esMayuscula(valorApellido)) {
        validaciones++;
    } else {
        mostrarTexto("lblErrorApellido", "El apellido debe estar en mayúscula y al menos tener 3 caracteres");
    }
    if (recuperarFloat("txtSueldo") && valorSueldo >= 400 && valorSueldo <= 5000) {
        validaciones++;
    } else {
        mostrarTexto("lblErrorSueldo", "Solo se admiten numeros decimales entre 400 y 5000");
    }

    if (validaciones == 4) {
        if (esNuevo == true) {
            let objetoEmpleado = {};
            objetoEmpleado.cedula = valorCedula;
            objetoEmpleado.nombre = valorNombre;
            objetoEmpleado.apellido = valorApellido;
            objetoEmpleado.sueldo = valorSueldo;
            let nuevoEmpleado = agregarEmpleado(objetoEmpleado);
            if (nuevoEmpleado == true) {
                esNuevo = false;
                alert("Cliente agregado");
                mostrarEmpleados();
                deshabilitarCmpPrincipales();
            } else {
                alert("Ya existe el cliente con la cedula: " + objetoEmpleado.cedula);
            }
        } else {
            let cmpBuscar = recuperarTexto("txtBusquedaCedula");
            let busqueda = buscarEmpleado(cmpBuscar);
            busqueda.nombre = recuperarTexto("txtNombre");
            busqueda.apellido = recuperarTexto("txtApellido");
            busqueda.sueldo = recuperarTexto("txtSueldo");
            alert("Empleado modificado exitosamente");
            mostrarEmpleados();
            deshabilitarCmpPrincipales();
        }
    }
}

limpiarErrores = function () {
    mostrarTexto("lblErrorCedula", "");
    mostrarTexto("lblErrorNombre", "");
    mostrarTexto("lblErrorApellido", "");
    mostrarTexto("lblErrorSueldo", "");
}

deshabilitarCmpPrincipales = function () {
    deshabilitarComponente("txtCedula");
    deshabilitarComponente("txtNombre");
    deshabilitarComponente("txtApellido");
    deshabilitarComponente("txtSueldo");
    deshabilitarComponente("btnGuardar");
}

habilitarCmpPrincipales = function () {
    habilitarComponente("txtCedula");
    habilitarComponente("txtNombre");
    habilitarComponente("txtApellido");
    habilitarComponente("txtSueldo");
    habilitarComponente("btnGuardar");
}

ejecutarBusqueda = function () {
    let cmpBuscar = recuperarTexto("txtBusquedaCedula");
    let busqueda = buscarEmpleado(cmpBuscar);
    if (busqueda == null) {
        alert("Empleado no existe");
    }
    else {
        mostrarTextoEnCaja("txtCedula", busqueda.cedula);
        mostrarTextoEnCaja("txtNombre", busqueda.nombre);
        mostrarTextoEnCaja("txtApellido", busqueda.apellido);
        mostrarTextoEnCaja("txtSueldo", busqueda.sueldo);
        habilitarCmpPrincipales();
    }
}

btnLimpiar = function () {
    mostrarTextoEnCaja("txtCedula", "");
    mostrarTextoEnCaja("txtNombre", "");
    mostrarTextoEnCaja("txtApellido", "");
    mostrarTextoEnCaja("txtSueldo", "");
    esNuevo = false;
    deshabilitarCmpPrincipales();
}

buscarPorRol = function () {
    let cmpBuscar = recuperarTexto("txtBusquedaCedulaRol");
    let busqueda = buscarEmpleado(cmpBuscar);
    if (busqueda == null) {
        alert("Empleado no existe");
    } else {
        mostrarTexto("infoCedula", busqueda.cedula);
        mostrarTexto("infoNombre", busqueda.nombre + " " + busqueda.apellido);
        mostrarTexto("infoSueldo", busqueda.sueldo);
    }
}

calcularAporteEmpleado = function (sueldo) {
    let valorAporte = parseFloat(sueldo * (9.45 / 100));
    return valorAporte;
}

calcularValorAPagar = function (sueldo, aporteIess, descuento) {
    let valorAPagar = sueldo - (aporteIess + descuento);
    return valorAPagar;
}

calcularRol = function () {
    mostrarTexto("lblErrorDescuentos", "");
    mostrarTexto("infoIESS", "");
    mostrarTexto("infoPago", "");
    let sueldo = parseFloat(recuperarTextoDiv("infoSueldo"));
    let descuento = recuperarFloat("txtDescuentos")
    if (!isNaN(descuento) && descuento >= 0 && descuento <= sueldo) {
        let aporteIess = calcularAporteEmpleado(sueldo);
        let total = calcularValorAPagar(sueldo, aporteIess, descuento);
        mostrarTexto("infoIESS", aporteIess.toFixed(2));
        mostrarTexto("infoPago", total.toFixed(2));
        habilitarComponente("btnGuardarRol");
    } else {
        mostrarTexto("lblErrorDescuentos", "Descuento inválido: deben ser un número, menor al sueldo");
    }
}

let roles = [];

buscarRol = function (cedula) {
    let elementoRol;
    let rolEncontrado = null;
    for (let i = 0; i < roles.length; i++) {
        elementoRol = roles[i];
        if (elementoRol.cedula == cedula) {
            rolEncontrado = elementoRol;
        }
    }
    return rolEncontrado;
}

agregarRol = function (rol) {
    let resultado = buscarRol(rol.cedula);
    if (resultado == null) {
        roles.push(rol);
        return true;
    } else {
        return false;
    }
}

calcularAporteEmpleador = function (sueldo) {
    let pagarEmpleador = parseFloat(sueldo * (11.15 / 100));
    return pagarEmpleador;
}

guardarRol = function () {
    let valorCedula = recuperarTextoDiv("infoCedula")
    let valorNombre = recuperarTextoDiv("infoNombre");
    let valorSueldo = recuperarFloatDiv("infoSueldo");
    let valorIess = recuperarFloatDiv("infoIESS");
    let valorPagar = recuperarFloatDiv("infoPago");
    let valorAporteEmpleador = calcularAporteEmpleador(valorSueldo);
    let objetoRol = {};
    objetoRol.cedula = valorCedula;
    objetoRol.nombre = valorNombre;
    objetoRol.sueldo = valorSueldo.toFixed(2);
    objetoRol.iess = valorIess.toFixed(2);
    objetoRol.aporte = valorAporteEmpleador.toFixed(2);
    objetoRol.pagar = valorPagar.toFixed(2);
    let nuevoRol = agregarRol(objetoRol);
    if (nuevoRol == true) {
        alert("La información se guardó con éxito");
        deshabilitarComponente("btnGuardarRol");
        mostrarRoles();
        mostrarTotales();
    }
}

mostrarRoles = function () {
    mostrarComponente("tablaResumen");
    let cmpTabla = document.getElementById("tablaResumen");
    let contenidoTabla = "<table><tr>" +
        "<th>CEDULA</th>" +
        "<th>NOMBRE</th>" +
        "<th>VALOR A PAGAR</th>" +
        "<th>APORTE EMPLEADO</th>" +
        "<th>APORTE EMPLEADOR</th>" +
        "</tr>";
    let elementoRol;
    for (let i = 0; i < roles.length; i++) {
        elementoRol = roles[i];
        contenidoTabla +=
            "<tr><td>" + elementoRol.cedula + "</td>"
            + "<td>" + elementoRol.nombre + "</td>"
            + "<td>" + elementoRol.pagar + "</td>"
            + "<td>" + elementoRol.iess + "</td>"
            + "<td>" + elementoRol.aporte + "</td>"
            + "</tr>";

    }
    contenidoTabla += "</table>";
    cmpTabla.innerHTML = contenidoTabla;
}

mostrarTotales = function () {
    let totalEmpleado = 0;
    let totalEmpleador = 0;
    let totalAPagar = 0;
    for (let i = 0; i < roles.length; i++) {
        totalEmpleado += parseFloat(roles[i].iess);
        totalEmpleador += parseFloat(roles[i].aporte);
        totalAPagar += parseFloat(roles[i].pagar);
    }
    mostrarTexto("infoTotalPago", totalAPagar.toFixed(2));
    mostrarTexto("infoAporteEmpresa", totalEmpleado.toFixed(2));
    mostrarTexto("infoAporteEmpleado", totalEmpleador.toFixed(2));

    let totalNomina = totalEmpleado + totalEmpleador + totalAPagar;
    mostrarTexto("infoNomina", totalNomina.toFixed(2));
}