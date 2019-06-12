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
    
    for(c of $(".casillas")){
        $(c).click(function(){
            if($(".casillas").hasClass("blancas")){
                    $(".casillas").each(function(){
                        if($(".casillas").hasClass("blancas")){
                           $(this).addClass("blancas");
                            $(this).removeClass("negras");
                        }else{
                            $(this).addClass("azules")
                            $(this).removeClass("blancas");
                            $(this).removeClass("rojas");
                        }
                    })
                
            }else if($(".casillas".hasClass("negras"))){
                $(".casillas").each(function(){
                    if($(".casillas").hasClass("negras")){
                        $(this).addClass("rojas");
                        $(this).removeClass("negras");
                    }
                })
            }
        })
    }
}