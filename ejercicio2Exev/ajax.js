$(function () {
    console.log("entrada");
    cargarAjax("https://codepen.io/chabisoriano/pen/gEaKJQ.js",false);
    console.log("Final");
});

var cargarAjax = function (web ,cacheada) {
    $.ajax({
        url: web,
        cache: cacheada,
        dataType: "json"
       
    }).done(cargarDatos).fail(console.log("esto esta feo"))

}

 function cargarDatos(respuesta){
    for(datos of respuesta.archivos){
        cargarAjax2(datos.link)
    } 
}//cargarDatos

var cargarAjax2 = function(link){
    
    $.ajax({
        url: link ,
        dataType: "json"
    }).done(function(){
        $("#container").append(link+" se ha cargado bien")
          $("#container").append("<br>")
        //cargarDatos(link)
     
       
    },mostrarDatos).fail(function(){
        
    $("#container").append(link+" se ha cargado mal")
    })
    
}

function mostrarDatos(obj){
    for(objeto in obj){// recorro objeto
        for(color of obj[objeto]){//recorro array
            for( propiedad in color){//recorro objeto dentro de array
                $("#container").append("<strong>"+propiedad+"</strong>"+"<strong>"+ color[propiedad]+"</strong><br>")
            }
        }
    }
    
    
}//mostrarDatos
