const allcat = new Set();
const alleti = new Set();
var obj;

window.onload = function () {
    cargarAjax();


}

function cargarAjax() {
    // alert("funciona");
    http = new XMLHttpRequest();
    http.onreadystatechange = mostrar;

    http.open("GET", "./cupcakes.json", true);
    http.send(null);

    function mostrar() {
        console.log('estamos en mostrar');
        if (http.readyState == 4 && http.status == 200) {


            obj = JSON.parse(this.responseText);
            mostrarDatos(obj);
            cargarSelect(obj);
            cargarEtiquetas(obj);


        }
    }

    console.log('salimos mostrar');
}


function mostrarDatos() {
    var divContenedor=  document.getElementById("contenedor");
    var divEtiquetas = document.getElementById("etiqutas");
    for (cupCake of obj.cupcakes) {
        
        
        var divCupcake = document.createElement("div");
        divCupcake.className="cupcake";
        divContenedor.append(divCupcake);
        var idCup = document.createElement("h1");        
        idCup.innerHTML+= cupCake.ID;
        divCupcake.append(idCup);
        var imagen = document.createElement("img");
        var ruta = cupCake.ruta;
        divCupcake.append(imagen);
        imagen.src=ruta;
        var nombre =document.createElement("p");
        nombre.innerHTML+=cupCake.nombre;
        divCupcake.append(nombre);
        var precio=document.createElement("p");
        precio.innerHTML+=cupCake.precio;
        divCupcake.append(precio);
        
        var categorias = document.createElement("p");
        categorias.innerHTML+=cupCake.categorias;
        divCupcake.append(categorias);
        
        var descripcion = document.createElement("p");
        descripcion.innerHTML+=cupCake.descripcion;
        divCupcake.append(descripcion);
        
        var etiquetas = document.createElement("p");
        etiquetas.innerHTML+=cupCake.etiquetas;
        divCupcake.append(etiquetas);
        
       
        
    }
    document.getElementById("up").onclick = function(){
        ordenarUp()
    };
    
    document.getElementById("down").onclick = function(){
        ordenarDown()
    };

} //fin funtion



function cargarSelect() {
    var select = document.getElementById("categorias");
    for (let datos of obj.cupcakes) {
        for (let categoria of datos.categorias) {
            allcat.add(categoria);
        }
    } //for
    for (let cat of allcat) {

        //var option = document.createElement("option");
        // select.append(option);
        select.innerHTML += "<option>" + cat + "</option>";

    }
}

function cargarEtiquetas() {
    var etiqueta = document.getElementById("etiquetas");
    for (let datos of obj.cupcakes) {
        for (let etiqueta of datos.etiquetas) {
            alleti.add(etiqueta);
        }
    } //for
    for (let eti of alleti) {

        //var option = document.createElement("option");
        // select.append(option);
        etiqueta.innerHTML += "<span>" + eti + " ," + "</span>";

    }
} //cargar etiquetas

function ordenarUp(){
   
    //console.log(obj);
    obj.cupcakes.sort((x,y) => Number (y.precio)-Number (x.precio));
    document.getElementById("contenedor").innerHTML = '';
    mostrarDatos(obj);
}

function ordenarDown(){
    obj.cupcakes.sort((x,y)=>Number(x.precio)- Number (y.precio));
    document.getElementById("contenedor").innerHTML='';
    mostrarDatos(obj);
}
