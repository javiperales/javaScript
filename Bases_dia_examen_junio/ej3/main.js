$(function () {
    cargarAjax("./datos2.json", false);
})
let X=[];
let conta=0;
let ganado=0;
function cargarAjax(web, cacheada) {
    $.ajax({
            url: web,
            cache: cacheada,
            dataType: 'json' // para decirle que lo lea como Json.
        }).done(function(datos){
        X=datos.casillas;
        console.log(X)
        crearCuadros()
    })
        .fail("se ha cargado mal");
    
}

var crearCuadros = function(){
    let c = ''
    console.log(X);
    for (i = 0; i < X; i++) {
        c += "<div class='cubo' id=" + conta + "><p class='contenido'></p></div>"
        conta++;
    }
    $('#contenedor').append(c);

    
    $(".cubo").click(function(){
            $(this).css("background-color", "orange");
        
            

        ganado++;
        if(ganado==X){
            alert("has ganado");
        }
        
        console.log($(this).next("id"));

        if(ganado==X){
            alert("has ganado");
        }
      
        if($(this).css("background-color", "orange")){
            $(this).off();
        }
        
    })
}