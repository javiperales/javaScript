$(function () {
    console.log("entrada");
    cargarAjax();
    // console.log("Final");
});
var cadena=""; 

var cargarAjax = function () {
    $.ajax({
        url: "actividad4.json",
        dataType: "json"

    }).done(function (respuesta) {


        pintarDatos(respuesta.menu);

    }).fail(function () {
        console.log("Fallo");
    }).always(function () {

    });
}
var pintarDatos = function (menu) {
     cadena+="<ul>";
    for (let m of menu) {
       cadena+="<li><a href='#'>"+ m.denominacion+ "</a></li>"
        if (comprobarHijos(m.hijos)) {
            pintarDatos(m.hijos)
            
        }
        


       

    }//for
    cadena+="</ul>"
    $("#menu").html(cadena)
    

}//pintardatos

var comprobarHijos = function (hijo) {
    if (hijo != undefined) {
        return true;
    } else {
        return false;
    }
}

