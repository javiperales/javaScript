
let click = 0;
let cartas = [];
let conta = 0;
let ganado = 0;
let X=[];

$(function () {
    cargarAjax("./datos2.json", false);
})

function cargarAjax(web, cacheada) {
    $.ajax({
            url: web,
            cache: cacheada,
            dataType: 'json' // para decirle que lo lea como Json.
        }).done(function(datos){
        X=datos.bichos;
        console.log(X)
        crearCuadros()
    })
        .fail("se ha cargado mal");
    
}
function crearCuadros() {
    let c = ''
    for (i = 0; i < X.length; i++) {
        c += "<div class='cubo' id=" + conta + "><p class='contenido'>" + X[i] + "</p></div>"
        conta++;
    }
    $('#contenedor').append(c)
     $(".contenido").hide();

    /////////////////////////////
    $(".cubo").click(function () {
        let objeto;
        objeto = $(this).children();
        $(this).children().toggle();
        //console.log($(this).children().text());
        cartas[click] = objeto;
        click++;
        console.log(cartas)

        if (click == 2) {
            if (cartas[0].text() == cartas[1].text()) {
                for (m of cartas) {
                    m.show();
                    ganado++;
                    if (ganado == X.length) {
                        alert("has ganado");
                    }
                }
            } else {
                for (m of cartas) {
                    //window.setTimeout(m.hide(), 1000);
                    m.fadeOut("10000");
                }
            }
            click = 0;
        }
    })
}
