$(function () {
    console.log("entrada");
    cargarAjax();
    console.log("Final");
    
});

var pintarMenu = function(respuesta){
   
    for(m of respuesta.menu){
        document.write(m.denominacion+"<br>");
        document.write(m.url+"<br>");
    }
}

var cargarAjax = function () {
    $.ajax({
        url: "actividad4.json",
        dataType: "json"
    }).done(function (respuesta) {
        console.log("Lectura ajax");
        console.log(respuesta);
        pintarMenu(respuesta);
        
        console.log("final Lectura ajax");
    }).fail(function () {
        console.log("Fallo");
    }).always(function () {
        document.write('<p>finalizado</p>');
    });
}
