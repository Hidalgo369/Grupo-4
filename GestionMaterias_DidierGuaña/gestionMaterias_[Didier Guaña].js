let materias = []


crearMateria = function(){
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

agregarMateria = function(){
    materia=crearMateria()
    materias.push(materia)
    console.log(materias)
}

refrescarMaterias = function(){
    let cmp = document.getElementById("tablaMaterias")
    let contenidoTabla = "<table><tr><th>Nombre</th><th>Codigo</th><th>Descripcion</th></tr>"
    for(let i =0;i<materias.length;i++){
        materiaIterada = materias[i]
        contenidoTabla+= "<tr><td>"+materiaIterada.nombre+"</td><td>"+materiaIterada.codigo+"</td><td>"+materiaIterada.descripcion+"</td></tr>"
    }
    contenidoTabla+="</table>"
    cmp.innerHTML=contenidoTabla
}

buscarMaterias = function(){
    coincidencia = recuperarTexto("txtBuscar")
    let materia_encontrada = null
    for(let i = 0;i<materias.length;i++){
        materiaIterada = materias[i]
        if(coincidencia==materiaIterada.codigo||coincidencia==materiaIterada.nombre||coincidencia==materiaIterada.descripcion){
            materia_encontrada = materiaIterada
        }
    }
    if(materia_encontrada==null){
        alert("MATERIA NO ENCONTRADA")
    }else{
        alert("MATERIA ENCONTRADA")
    }
}