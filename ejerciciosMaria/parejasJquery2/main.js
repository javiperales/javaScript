$(function() {
    console.clear()
    cargarAjax("https://codepen.io/mateca/pen/joEYJK.js", false);
})

var animales = [];
let datos;
let cubos = "";
var contadorParejas = 0;
var turno = 1;
var idCarta1 = "";
var idCarta2 = "";

function cargarAjax(web, cacheada) {
    $.ajax({
            url: web,
            cache: cacheada,
            dataType: 'json'
        }).done(function() {
            $('#container').append('TODO BIEN')
        }, cargarDatos)
        .fail(function() {
            $('#container').append('Ha ocurrido un fallo en la carga del JSON')
        });
}

function cargarDatos(obj) {
    //console.log('En cargarAjax')
    datos = obj;
    for (objeto of obj.animales) {
        animales.push(objeto)
    }
    //console.log(animales)
    crearTablero()
} //fin cargarDatos

function crearTablero() {
    //console.log('En crearTablero')
    animales = animales.sort(function() {
        return Math.random() - 0.5
    });
    /*La función Math.random() devuelve un número pseudo-aleatorio entre 0 (incluido) y 1 (excluido), por lo que al restarle 0.5 estamos generando números positivos y negativos de forma aleatoria (entre -0.5 y 0.49999). De esta manera la función Sort reordena el array colocando un elemento delante o detrás de otro de forma aleatoria. */
    for (var k = 0; k < animales.length; k++) {
        cubos += "<div class='cubo'><img id='" + (k) + "' class='fotoOculta' src='" + animales[k] + "'></div>";
    }
    $('#contenedor').append(cubos)
    $(".cubo").on("click", ".fotoOculta", jugar);
} //fin crearTablero

function jugar() {
    var parejasTotal = animales.length / 2
    console.log('Click foto ' + this.id + ' parejas totales ' + parejasTotal)
    if (turno == 1) {
        if (idCarta1 != "") { //si las cartas estan dadas la vuelta
            //$("#" + idCarta1).removeClass("mostrar");
            $("#" + idCarta1).addClass("fotoOculta");
            $("#" + idCarta1).fadeOut();
            //$("#" + idCarta2).removeClass("mostrar");
            $("#" + idCarta2).addClass("fotoOculta");
            $("#" + idCarta2).fadeOut();
        }
        turno++;
        aux = this.src;
        idCarta1 = this.id;
        $("#" + idCarta1).removeClass("fotoOculta");
        $("#" + idCarta1).fadeIn();
        $("#" + idCarta1).css({
            "width": "100",
            "height": "100"
        });
        //$("#" + idCarta1).addClass("mostrar");
    } else { //si estamos en el segundo turno
        if (this.id != idCarta1) {
            idCarta2 = this.id;
            $("#" + idCarta2).removeClass("fotoOculta");
            //$("#" + idCarta2).addClass("mostrar");
            $("#" + idCarta2).fadeIn();
            $("#" + idCarta2).css({
                "width": "100",
                "height": "100"
            });
            // $("#" + idCarta2).show();
            if (this.src == aux) { //si las src/urls son iguales son pareja
                contadorParejas++;
                idCarta2 = "";
                idCarta1 = "";

                //COMPROBAMOS VICTORIA E IMPRIMIMOS CONTADOR DE PAREJAS
                $("#contador").empty();
                $("#contador").append(contadorParejas)
                if (contadorParejas == parejasTotal) {
                    alert('HAS GANADO')
                } //fin
            } else { //si no son pareja
                idCarta2 = this.id;
            } //vuelta a empezar 
            turno = 1;
        }
    }
} //fin jugar

$("#reset").click(function() {
    console.log('Boton reset')
    contadorParejas = 0;
    animales = [];
    datos;
    cubos = "";
    turno = 1;
    idCarta1 = "";
    idCarta2 = "";
    $("#container").empty();
    $("#contador").empty();
    $(".cubo").remove();
    cargarAjax("https://codepen.io/mateca/pen/joEYJK.js", false);
}); //fin reset 