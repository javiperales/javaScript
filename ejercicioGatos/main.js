const allcat = new Set();
const allsex = new Set();
const allraza = new Set();
var obj;

window.onload = function () {
    cargarAjax();
}

function cargarAjax() {
    // alert("funciona");
    http = new XMLHttpRequest();
    http.onreadystatechange = mostrar;

    http.open("GET", "./gatos.json", true);
    http.send(null);

    function mostrar() {
        console.log('estamos en mostrar');
        if (http.readyState == 4 && http.status == 200) {


            obj = JSON.parse(this.responseText);
            mostrarDatos(obj);
            cargarSelect(obj);
            cargarGatos(obj);
        }
    }


    console.log('salimos mostrar');
}

function mostrarDatos(){
    var divContenedor = document.getElementById("contenedor");

    for(gatos of obj.gatos.json){
        var divGatos = document.createElement("div");
        //empezar recorrido de los gatos, y filtrar los gatos
    }
}