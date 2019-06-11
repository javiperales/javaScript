window.onload = function () {
    funciones();
}


var Arraynombre=[];
var Arrayapellido=[];
var Arraycorreo=[];
var Arrayboton=[];
var elemento;
var div;


function funciones() {
    var boton = document.getElementById("btn1");
    boton.addEventListener("click", cargarDatos, false);

}

function cargarDatos(){
    nombre = document.getElementById("nombre").value;
    apellido = document.getElementById("apellidos").value;
    email = document.getElementById("email").value;

    Arraynombre.push(nombre);
    Arrayapellido.push(apellido);
    Arraycorreo.push(email);
    Arrayboton.push((Arraynombre.length -1));
    pintar();
   
}
function pintar(){
 
     var imprimir="";
    for(var i=0; i<Arraynombre.length; i++){
       var nombre=Arraynombre[i];
       var apellido=Arrayapellido[i];
       var  email=Arraycorreo[i];
       var boton=Arrayboton[i];
        elemento = "<div class='contenedor' id=" + boton + ">";
         

         var nombrePrint = "<p><strong>nombre:<strong>" + nombre + "</p>";
        var appellidoPrint = "<p><strong>apellido:</strong>" + apellido + "</p>";
        var emailPrint = "<p><strong>email:</strong>" + email+ "</p>";
        var botonprint = "<button onclick=borrar(" + i + ") id=" + boton + ">Eliminar</button>";

        elemento+=nombrePrint + appellidoPrint + emailPrint + botonprint + "</div><hr>";
        imprimir +=elemento;

    }
    document.getElementById("resultados").innerHTML = imprimir;   
creatGatos();
}

function borrar(id){
   
    Arraynombre.splice(id,1);
    Arrayapellido.splice(id,1);
    Arraycorreo.splice(id,1);
    Arrayboton.splice(id,1);
    pintar();
}


