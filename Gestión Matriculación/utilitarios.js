
mostrarImagen = function (idComponente, rutaImagen) {
    let componente;
    componente = document.getElementById(idComponente);
    componente.src = rutaImagen;
}
mostrarTexto = function (idComponente, mensaje) {
    let componente;
    componente = document.getElementById(idComponente);
    componente.innerText = mensaje;
}
mostrarTextoEnCaja = function (idComponente, mensaje) {
    let componente;
    componente = document.getElementById(idComponente);
    componente.value = mensaje;
}

recuperarTexto = function (idComponente) {
    let componente;
    let valorIngresado;
    componente = document.getElementById(idComponente);
    valorIngresado = componente.value;
    return valorIngresado;
}

recuperarInt = function (idComponente) {
    let valorCaja = recuperarTexto(idComponente);
    let valorEntero = parseInt(valorCaja);
    return valorEntero;
}

recuperarFloat = function (idComponente) {
    let valorCaja = recuperarTexto(idComponente);
    let valorFlotante = parseFloat(valorCaja);
    return valorFlotante;
}

recuperarTextoDiv = function (idComponente) {
    let componente;
    let valorIngresado;
    componente = document.getElementById(idComponente);
    valorIngresado = componente.textContent;
    return valorIngresado;
}

recuperarIntDiv = function (idComponente) {
    let valorCaja = recuperarTextoDiv(idComponente);
    let valorEntero = parseInt(valorCaja);
    return valorEntero;
}

recuperarFloatDiv = function (idComponente) {
    let valorCaja = recuperarTextoDiv(idComponente);
    let valorFlotante = parseFloat(valorCaja);
    return valorFlotante;
}

mostrarComponente = function (idComponente) {
    document.getElementById(idComponente).style.display = "block";
}

ocultarComponente = function (idComponente) {
    document.getElementById(idComponente).style.display = "none";
}

deshabilitarComponente = function (idComponente) {
    document.getElementById(idComponente).disabled = true;
}

habilitarComponente = function (idComponente) {
    document.getElementById(idComponente).disabled = false;
}

//Extras
esDigito = function (numeros) {
    for (let i = 0; i < numeros.length; i++) {
        let codigoAscii = numeros.charCodeAt(i);
        if (codigoAscii < 48 || codigoAscii > 57) {
            return false;
        }
    }
    return true;
}


esMayuscula = function (palabra) {
    for (let i = 0; i < palabra.length; i++) {
        let codigoAscci = palabra.charCodeAt(i);
        if (codigoAscci < 65 || codigoAscci > 90) {
            return false;
        }
    }
    return true;
}
