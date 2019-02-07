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

        //console.log(respuesta);
        pintarDatos(respuesta);
        console.log("final Lectura ajax");
    }).fail(function () {
        console.log("Fallo");
    }).always(function () {
        //document.write("<p>Finalizando</p>");
    });
}
var pintarDatos = function (respuesta) {
    var menu = document.getElementById("menu");
    var ul1 = document.createElement("ul");
    for (let m of respuesta.menu) {
        document.write("<ul>")
        document.write("<a href='#'>" + m.denominacion + "</a>" + "<br>")
        document.write("</ul>")
        for (let h of m.hijos) {

            document.write("<li>")
            document.write(h.denominacion);
            document.write(h.url);
            document.write("</li>")

        }

    }

}
