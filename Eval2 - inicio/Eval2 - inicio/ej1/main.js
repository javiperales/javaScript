 $(document).ready(function () {
     crearCubo();
     $(".ocultar").hide();
     mostrar();
 });


 var X = ['perro', 'gato', 'tigre', 'perro', 'cabra', 'oso', 'oso', 'gato', 'tigre', 'leon', 'lobo', 'cabra', 'lobo', 'leon', 'murcielago', 'murcielago']

 function crearCubo() {

     for (m of X) {

         cubo = "<div class='cubo' id='" + m + "'><p class='ocultar'>" + m + "</p></div>"


         $("#contenedor").append(cubo);
     }

 }//crearcubo

$(this).fadeOut('fast', function(){
    $(".ocultar").fadeIn('slow')
    $(".ocultar").removeClass(".ocultar")
})


function comprobar(){
    let aciertos =0;
    
    for(lei i=0; i<X.length;i++){
        if(X[i].seleccion==true){
            aciertos++;
        }
    }
    if(aciertos==X.length){
        alert("ganaste")
    }
}

 
