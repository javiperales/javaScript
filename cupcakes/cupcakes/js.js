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
            mostrarDatos(obj.cupcakes);
            cargarSelect(obj);
            cargarEtiquetas(obj);

        }
    }

    console.log('salimos mostrar');
}


function mostrarDatos(array) {
    var divContenedor = document.getElementById("contenedor");
    var divEtiquetas = document.getElementById("etiqutas");
    for (cupCake of array) {

        var divCupcake = document.createElement("div");
        divCupcake.className = "cupcake";
        divContenedor.append(divCupcake);
        var idCup = document.createElement("h1");
        idCup.innerHTML += cupCake.ID;
        divCupcake.append(idCup);
        var imagen = document.createElement("img");
        var ruta = cupCake.ruta;
        divCupcake.append(imagen);
        imagen.src = ruta;
        var nombre = document.createElement("p");
        nombre.innerHTML += cupCake.nombre;
        divCupcake.append(nombre);
        var precio = document.createElement("p");
        precio.innerHTML += cupCake.precio;
        divCupcake.append(precio);
        var categorias = document.createElement("p");
        categorias.innerHTML += cupCake.categorias;
        divCupcake.append(categorias);
        var descripcion = document.createElement("p");
        descripcion.innerHTML += cupCake.descripcion;
        divCupcake.append(descripcion);
        var etiquetas = document.createElement("p");
        etiquetas.innerHTML += cupCake.etiquetas;
        divCupcake.append(etiquetas);
    }
    document.getElementById("up").onclick = function () {
        ordenarUp()
    };

    document.getElementById("down").onclick = function () {
        ordenarDown()
    };
    document.getElementById("categorias").onchange = function () {
        select()
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
        etiqueta.innerHTML += '<span onclick="filtrarEti(\''+eti+'\')">' + eti + ' ,' + '</span>';
        //esto lo hizo cristian
        
    }
} //cargar etiquetas

function ordenarUp() {

    //console.log(obj);
    obj.cupcakes.sort((x, y) => Number(y.precio) - Number(x.precio));
    document.getElementById("contenedor").innerHTML = '';
    mostrarDatos(obj.cupcakes);
}

function ordenarDown() {
    obj.cupcakes.sort((x, y) => Number(x.precio) - Number(y.precio));
    document.getElementById("contenedor").innerHTML = '';
    mostrarDatos(obj.cupcakes);
}

function select() {
    var new_array = new Array();
    var e = document.getElementById("categorias");
    var cat = e.options[e.selectedIndex].value;
    //copiada de internet /*https://stackoverflow.com/questions/1085801/get-selected-value-in-dropdown-list-using-javascript*/
    //console.log(cat);
    for (cupcake of obj.cupcakes) {
        for (categoria of cupcake.categorias) {
            if (categoria == cat) {
                new_array.push(cupcake);
                 
            }
        }
    }
    document.getElementById("contenedor").innerHTML = '';
    
    mostrarDatos(new_array);

}
 function filtrarEti(eti){
    var new_array = new Array();
   
    for (cupcake of obj.cupcakes) {
        for (etiqueta of cupcake.etiquetas) {
            if (etiqueta == eti) {
                new_array.push(cupcake);            
            }
        }
    }
    document.getElementById("contenedor").innerHTML = '';
    
    mostrarDatos(new_array);  
     
 }

