$(function () {
    console.log("entrada");
    cargarAjax();
});
var cargarAjax = function () {
    $.ajax({
        url: "actividad4.json",
        dataType: "json"

    }).done(function (respuesta) {

        pintarDatos(respuesta.menu, null);
        // desplegar();
        $(" button ").click((e) => {
            //console.log($($(e.target).parent().get(0)).children("ul")); 
            $($(e.target).parent().get(0)).children("ul").toggle();
        });

    }).fail(function () {
        console.log("Fallo");
    }).always(function () {

    });
}
var pintarDatos = function (menu) {

    var main = $("#menu")
    console.log(main)
    var cad = "<ul>"
    var li = ""
    var button =""
    for (m of menu) {
        cad += "<li>"+m.denominacion+"<button>"+'->'+"</button></li>"
        if(comprobarHijos(m.hijos)){
            let ulli = pintarDatos(m.hijos);
            li.appendChild(ulli);
        }else{
            ul.append(li);
            main.append(ul);
        }
       
    }
    cad += "</ul>"
    main.append(cad)

    // var main = document.getElementById("menu");

    // let ul = document.createElement("ul");
    //let li = null;
    //for (let m of menu) {

       // li = document.createElement("li");
        //let button = document.createElement("button");
        //button.setAttribute("class", "click" + m.denominacion.replace(" ", "-"));
        //button.setAttribute("value", "->");
        //button.innerHTML = "->";
        //li.setAttribute("class", "list li" + m.denominacion.replace(" ", "-"));
        //let a = document.createElement("a");
        //a.setAttribute("href", m.url);
        //m.hasOwnProperty("target") ? a.setAttribute("target", m.target) : null;
        //a.setAttribute("class", "link");

        //a.innerHTML = m.denominacion.replace(" ", "-");

        //li.append(a);
       // li.append(button)
       // if (comprobarHijos(m.hijos)) {
           // let ulli = pintarDatos(m.hijos);
           // ulli.setAttribute("class", "ul" + m.denominacion.replace(" ", "-"));
           // li.appendChild(ulli);

      //  } else {
            // ul.append(li);
         //   main.append(ul);
       // }

        //ul.appendChild(li);
       // console.log("entro en for");
        //main.append(ul);

    //} //for
    //return ul;
} //pintardatos


var comprobarHijos = function (hijo) {
    if (hijo != undefined) {
        return true;
    } else {
        return false;
    }
}
