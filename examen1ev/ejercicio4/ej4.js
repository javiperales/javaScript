window.onload = function () {
    funciones();


}

var Arraynombre = []
var ArrayApellido = []
var ArrayEmail = []
var ArrayBoton = []
var div;


//function funciones(){
//    document.getElementById("btn1").onclick=function(){
//      añadirElementos()  
//    };
//}

function funciones() {
    var boton = document.getElementById("btn1");
    boton.addEventListener("click", añadirElementos, false);

}

function añadirElementos() {
    var nombre = document.getElementById("nombre").value; //cojo el valor del elemento nombre(el valor es lo que escribes en la etiqueta en la web)
    var apellido = document.getElementById("apellidos").value;
    var email = document.getElementById("email").value;

    Arraynombre.push(nombre); //meto los datos en el array
    ArrayApellido.push(apellido);
    ArrayEmail.push(email);
    ArrayBoton.push((Arraynombre.length - 1));
    pintar();
    console.log(nombre)
}

function borrar(id) {
//    Arraynombre.splice(id, 1);
//    ArrayApellido.splice(id, 1);
//    ArrayEmail.splice(id, 1);
//    ArrayBoton.splice(id, 1);
    
    Arraynombre.shift(id);
    ArrayApellido.shift(id);
    ArrayEmail.shift(id);
    ArrayBoton.shift(id);
    
    pintar(); //pinta el vacio


}

function pintar() {
    var print = "";
    console.log("donde estas")
    for (var i = 0; i < ArrayApellido.length; i++) {
        var nombreM = Arraynombre[i];
        var apellidoM = ArrayApellido[i];
        var emailM = ArrayEmail[i];
        var botonM = ArrayBoton[i];
        
         div = "<div class='contenedor' id="+botonM+">";


        var nombrePrint = "<p><strong>nombre:</strong>" + nombreM + "</p>";
        var appellidoPrint = "<p><strong>apellido:</strong>" + apellidoM + "</p>";
        var emailPrint = "<p><strong>email:</strong>" + emailM + "</p>";
        //        var botonPrint = '<button onclick=borrar( '+ botonM + ')id='+ botonM + '>eliminar</button>';

        var botonPrint = "<button onclick=borrar(" + botonM + ") id=" + botonM + ">Eliminar</button>";
        
        div += nombrePrint + appellidoPrint + emailPrint + botonPrint + "</div><br><hr>";
        print += div;

    }
    //console.log("entra en imprimir");
    document.getElementById("resultados").innerHTML = print;
}
