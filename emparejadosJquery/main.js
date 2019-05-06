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
    click();
}

var click = function(){
    $('.foto').each(function(){
        $(this).click(function(){
            jugar();
            
        });
    });
}

var jugar = function(){
   var parejasTotales=animales.length/2;

   if(turno==1){
    if (idCarta1 != "") {//si las cartas estan dadas la vuelta
       $('idcarta1').fadeOut();
       $('idcarta2').fadeOut();
        
    }

    turno++;
        aux = this.src;
        idCarta1 = this.id;
        $('idcrta1').show();
       
   }else {//si estamos en el segundo turno
    if (this.id != idCarta1) {
            $(this).show();
        if (this.src == aux) {//si las src/urls son iguales son pareja
            //this.onclick = null;
            //document.getElementById(idCarta2).onclick = null;

            contadorParejas++;
          
            idCarta2 = "";
            idCarta1 = "";

            //COMPROBAMOS VICTORIA E IMPRIMIMOS CONTADOR DE PAREJAS
            $('#contadorParejas').append(contenedor);

            if (contadorParejas == parejasTotal) {
                alert('HAS GANADO')
            }//fin

        } else {//si no son pareja
            idCarta2 = this.id;
        }//vuelta a empezar 
        turno = 1;
    }
}
}