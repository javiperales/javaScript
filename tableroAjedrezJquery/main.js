$(document).ready(function(){
    crearTablero();
    asignarEventos();
})

var crearTablero = function(){
    let j=false;
    let cad="";
    for( i= 1; i <= 64; i++) {
        cad += "<div id='" + i + "' class='casillas "
        cad += (j ? 'negras' : 'blancas')
        cad += "' ></div>"
        if (i % 8 != 0) j = !j
    }

    $("#tablero").append(cad); 
  
} 


var asignarEventos =function(){
    console.log('en function 2');
    $('.blancas').on("click", blancas);
     $('.negras').on("click", negras);
   
}

var blancas = function(){
    console.log('EN BLANCAS')
    casillasBlancas = $('.blancas')
    casillasNegras = $('.negras')
    casillasRojas = $('.rojas')

    if ($('.casillas').hasClass("blancas")) {
        console.log("cambiando blancas por negras")
        for (c1 of casillasBlancas) {
            $(c1).removeClass('blancas')
            $(c1).addClass('negras')
        }
        for(c5 of casillasRojas){
            $(c5).removeClass('rojas');
            $(c5).addClass("azules");
        }

        for (c2 of casillasNegras) {
            $(c2).removeClass('negras')
            $(c2).addClass('azules')
        }
    } else  if($('.casillas').hasClass("negras")) {
        console.log("cambiando negras por rojas")
        for (c3 of casillasNegras) {
            $(c3).removeClass('negras')
            $(c3).addClass('rojas')
        }
        for (c4 of casillasRojas) {
            $(c4).removeClass('rojas')
            $(c4).addClass('azules')
        }
    }

    
}

function negras() { //Las celdas NEGRAS=ROJAS
    console.log('EN NEGRAS')
    casillasNegras = $('.negras')

    for (c2 of casillasNegras) {
        $(c2).removeClass('negras')
        $(c2).addClass('rojas')
    }
    

}//fin