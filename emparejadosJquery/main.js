$(function() {
    console.clear()
    cargarAjax('animales.json', false);
})

var animales = [];
let datos;
let contadorParejas=0;
let turno=1;
let carta1;
let carta2;
let idCarta1="";
let idCarta2="";
let idCarta3="";

function cargarAjax(web, cacheada) {
    $.ajax({
            url: web,
            cache: cacheada,
            dataType: 'json'
        }).done(function() {
            $('#container').append('TODO BIEN<br>')
        }, cargarDatos)
        .fail(function() {
            $('#container').append('Ha ocurrido un fallo en la carga del JSON')
        });
}

var cargarDatos = function(obj) {
    console.log('holi1')
  let cad="";
  datos = obj;

  for(m of obj.animales){
    animales.push(m);
    
  }
  crearTablero();

}

var crearTablero = function(){
    let cubos='';
    animales = animales.sort(function() {return Math.random() - 0.5});
    for(i=0; i<animales.length; i++){
        cubos+="<div><div class='cubo'><img id='" +(i)+"' class='foto' src='"+ animales[i]+"'</div></div>";
    }
    
    $('#contenedor').append(cubos);
    $('#contenedor').on("click", ".foto", jugar);
}


var jugar = function(){
   var parejasTotales=animales.length/2;
    console.log('click foto' + this.id);
    if(turno==1){
        if(idCarta1!=""){
            $("#" + idCarta1).removeClass("mostrar");
            $("#"+ idCarta1).addClass("foto");
            $("#" + idCarta2).removeClass("mostrar");
            $("#"+ idCarta2).addClass("foto");
     /*        $("#" + idCarta3).removeClass("mostrar");
            $("#"+ idCarta3).addClass("foto"); */

        }
        turno++;
        aux=this.src;
        idCarta1=this.id;

        $("#" + idCarta1).removeClass("foto");
        $("#"+ idCarta1).addClass("mostrar");
    
        

    }else{
        if(this.id!=idCarta1){
            idCarta2=this.id;
            $("#" + idCarta2).removeClass("foto");
            $("#"+ idCarta2).addClass("mostrar");
            



            if(this.src==aux){
                contadorParejas++;

                idCarta2="";
                idCarta1="";

                if(contadorParejas==parejasTotales){
                    alert("has ganado");
                }
            }else{
                idCarta2=this.idM
            }
            turno=1;
        }
    }
}