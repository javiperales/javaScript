var X = ['perro', 'gato', 'tigre', 'perro', 'cabra', 'oso', 'oso', 'gato', 'tigre', 'leon', 'lobo', 'cabra', 'lobo', 'leon', 'murcielago', 'murcielago']

let click = 0;
let cartas = [];
let conta = 0;
let ganado = 0;

$(function () {
    crearCuadros()

    $(".contenido").hide();
})
function crearCuadros() {
    let c = ''
    for (i = 0; i < X.length; i++) {
        c += "<div class='cubo' id=" + conta + "><p class='contenido'>" + X[i] + "</p></div>"
        conta++;
    }
    $('#contenedor').append(c)

    /////////////////////////////
    $(".cubo").click(function () {
        let objeto;
        objeto = $(this).children();
        $(this).children().show();
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
