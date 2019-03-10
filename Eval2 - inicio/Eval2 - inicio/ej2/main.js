//El array se deberia sortear aleatoriamente pero esta parte se ha omitido para el examen.
//Se deberia comprobar que el array tiene parejas y demás pero esa parte se ha omitido.

$(function () {
    console.clear()
    cargarAjax("./datos2.json", false);
})
let datos;

function cargarAjax(web, cacheada) {
    $.ajax({
            url: web,
            cache: cacheada,
            dataType: 'json' // para decirle que lo lea como Json.
        }).done(function () {
            $('#container').append('TODO BIEN<br>')
        }, crearCubos)
        .fail(function () {
            $('#container').append('Ha ocurrido un fallo en la carga del JSON')
        });
}

function crearCubos(obj) {
    let cubo = ''
    datos = obj;

    for (objeto in obj) {
        for (atributo of obj[objeto]) {
                
            cubo = "<div class='cubo'><p>" +atributo + "</p></div>"
           $("#contenedor").append(cubo);
        }
        
        
    }
ocultar();
}


function ocultar(){
    $("p").hide(); 
}



