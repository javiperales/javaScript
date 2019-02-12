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
        desplegar();

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
        button = document.createElement("button");
        button.setAttribute("class" , "click"+m.denominacion.replace(" ", "-"));
        button.setAttribute("value", "->");
        button.innerHTML="->";
        li.setAttribute("class", "list li" + m.denominacion.replace(" ", "-"));
        let a = document.createElement("a");
        //a.setAttribute("href", "#");
        //a.setAttribute("class", "link");

        a.innerHTML = m.denominacion.replace(" ", "-");
      
        li.append(a);
          li.append(button)
        if (comprobarHijos(m.hijos)) {
            let ulli = pintarDatos(m.hijos);
            ulli.setAttribute("class", "ul" + m.denominacion.replace(" ", "-"));
            li.appendChild(ulli);

            $(li).click(function () {
                $(ulli).toggle("fast");
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


var comprobarHijos = function (hijo) {
    if (hijo != undefined) {
        return true;
    } else {
        return false;
    }
}


var desplegar = function () {

        $(".click"+m.denominacion.replace(" ", "-")).click(function () {
            $(this).children().toggle("slow", function(){
                $(this).stop();
            });
        });
}


