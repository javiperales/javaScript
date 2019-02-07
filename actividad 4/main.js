$(function () {
    console.log("entrada");
    cargarAjax();
    // console.log("Final");
});

var cargarAjax = function () {
    $.ajax({
        url: "actividad4.json",
        dataType: "json"

    }).done(function (respuesta) {

       
        pintarDatos(respuesta);
       
    }).fail(function () {
        console.log("Fallo");
    }).always(function () {
       
    });
}
var pintarDatos = function (respuesta) {
    var menu = document.getElementById("menu");
    var ul1 = document.createElement("ul");
    
    for (let m of respuesta.menu) {
        if(comprobarHijos(m.hijos)){
            document.write("<ul>")
        document.write("<a href='#'>" + m.denominacion + "</a>" + "<br>")
        document.write("</ul>")
        }
        
        
//        for (let h of m.hijos) {
//
//            document.write("<li>")
//            document.write(h.denominacion+"<br>");
//            document.write("</li>")
//            
//
//        }

    }

}

var comprobarHijos = function(hijo){
    if(hijo=!undefined){
        return true;
    }else{
        return false;
    }
}
