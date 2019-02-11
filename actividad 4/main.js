$(function () {
    console.log("entrada");
    cargarAjax();
    // console.log("Final");
});
var cadena = "";

var cargarAjax = function () {
    $.ajax({
        url: "actividad4.json",
        dataType: "json"

    }).done(function (respuesta) {

        pintarDatos(respuesta.menu, null);

    }).fail(function () {
        console.log("Fallo");
    }).always(function () {

    });
}
var pintarDatos = function (menu) {

    //cadena += "<ul>";
    var main = document.getElementById("menu");
    let ul = document.createElement("ul");

    let li = null;

    for (let m of menu) {
        li = document.createElement("li");
        li.setAttribute("class", "list li"+m.denominacion.replace(" ", "-"));
        let a = document.createElement("a");
        a.setAttribute("href", "#");
        a.setAttribute("class", "link");

        a.innerHTML = m.denominacion.replace(" ", "-");
        li.append(a);
        
        if (comprobarHijos(m.hijos)) {
            let ulli = pintarDatos(m.hijos);
            ulli.setAttribute("class","ul"+ m.denominacion.replace(" ", "-"));
            li.appendChild(ulli);
            
             $(li).click(function () {
            $("ul"+ m.denominacion.replace(" ", "-")).toggle("fast");
                 console.log("clicar");

        });

        } else {
            // ul.append(li);
            main.append(ul);
        }
       

        ul.appendChild(li);
        console.log("entro en for");
        main.append(ul);

    } //for
    return ul;
} //pintardatos


    cadena += "<ul>";
   
    for (let m of menu) {
         mostrar();
        cadena += "<li class='list'><a href='#'>" + m.denominacion + "</a></li>"
        if (comprobarHijos(m.hijos)) {
            pintarDatos(m.hijos)

        }
    } //for
    cadena += "</ul>"
    $("#menu").html(cadena)


} //pintardatos


var comprobarHijos = function (hijo) {
    if (hijo != undefined) {
        return true;
    } else {
        return false;
    }
}


var desplegar = function () {

    $(".list").click(function () {
        $(".list ul").toggle("slow");
    });

var mostrar = function () {
    $(".list").click(function () {
        $(this).hide("fast");
    })

}
