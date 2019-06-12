  $(function() { 
    console.log("esto va")
    cargarAjax('gatos.json',false);
    
})

var objeto;
  function cargarAjax(web, cacheada) {
    $.ajax({
            url: web,
            cache: cacheada,
            dataType: 'json'
        }).done(function(respuesta) {
            $('#container').append('TODO BIEN')
            objeto=respuesta;
        }, cargarDatos)
        .fail(function() {
            $('#container').append('Ha ocurrido un fallo en la carga del JSON')
            console.log(web)
        });
} //cargarAjax




var cargarDatos = function(datos){
    let cadena='';
    
   
for(let m of datos.gatos){
   cadena+='<div class="fichaGato" id="'
   cadena+=m.id + '">'
   for(let y of m.img){
       cadena+='<img src="'+y+'" class="imgGato"/>'
   }
   cadena+='<p>Nombre: <b>'+m.nombre+
        '</b><br>Sexo: <b>'+m.sexo+
        '</b><br>Edad: <b>'+m.edad+
        '</b><br>Raza: <b>'+m.raza+
        '</b><br>Castrado: <b>'+m.castrado
      
      cadena+='</b></div>'
}
    $("#contenedor").append(cadena);
    cargarForm(datos);
}

var cargarForm = function(datos){
    
    let c="";
    for(let i=0; i<20; i++){
        c+="<option value="+i+">"+i+"</option>";
        
    }

    $('#edad1').append(c);
    $("#edad2").append(c);
    let k="";

    for(m of datos.gatos){
        k+="<option value="+m.raza+">"+m.raza+"</option>";
    }

    $('#raza').append(k); 
}

var cumpleCond = function(datos){
    $('form[name="f1"]');
    console.log( $('form[name="f1"]'))
    if(!$('form[name="f1"]').val('')){
      
      
    }



   /*  if(F.nombre.value!=''){
        let indice = gato.nombre.indexOf(F.nombre.value);
        if(indice<0){
            return false; //si no tiene valor me devuelve falso
        }//if hijo
    }//if padre */
}
