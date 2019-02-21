var cadena = "";
var conta = 1; 
var jsonCompleto;
const mySet = new Set();

$(function(){
 	cargarAjax()

 });

 var cargarAjax = function (){
 	$.ajax({
 		url: './JSON.json',
 		dataType: 'json'
 	}).done(function(respuesta){

 		pintar(respuesta.datos);		

 	}).fail(function(){
 		console.log('fallo')
 	}

 )}
 //cargar json

 function pintar(respuesta){
	 console.log(respuesta)
	 jsonCompleto = respuesta 

	cadena += "<ul>"

 	for (variable of respuesta) {
 			cadena += "<li> <a> " + variable.CENTRO + " " +conta  + " " + variable.CURSO_ACADEMICO+"</a> "
 			mySet.add(variable.CENTRO);
            
 			
 			conta += 1
 		cadena += "</li>"
 	}
 	cadena += "</ul>"

 	$("#contenedor").append(cadena);

 	for (variable of mySet) {
 		//console.log(variable)
 	$("#b1").append('<option name="' + variable + '">' + variable + '</option>');

 	}

 	click()
 }

function click(){
$("#b1").on("change",function(){
	cadena = " "
	 $("#contenedor").html(cadena);
    

	 
	 
	 console.log(this.value)
	for (variable of jsonCompleto) {

		if (variable.CENTRO == this.value) {
			//clear()
			cadena += "<li> <a> " + variable.CENTRO  + " " + variable.LOCALIDAD + " "+ variable.PLAZAS_OFERTADAS +"</a> "
			console.log(variable)
		}
	}

  $("#contenedor").append(cadena);
});

$("#b2").click(function(){
	var conta = 1; 
	cadena = " "
	 $("#contenedor").html(cadena);
	 
	for (variable of jsonCompleto) {
 			cadena += "<li> <a> " + variable.CENTRO + " " +conta  + "</a> "
 			mySet.add(variable.CENTRO);
 			
 			conta += 1
		cadena += "</li>"
 	}
	//alert("HOLIWIS")
	$("#contenedor").append(cadena);
});

}


