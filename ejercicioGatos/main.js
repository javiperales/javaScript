const sexoGato = new Set();
const gatoCastrado = new Set();
const gatoRaza = new Set();
var objeto;

window.onload = function () {
    cargarAjax();
}

Array.prototype.unique = function () {
    return this.filter((x, i, a) => a.indexOf(x, i + 1) < 0);
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
            objeto = JSON.parse(this.responseText);
            mostrarDatos();
            mostrarDatosFiltrar();
            rellenarSelects();
            filtrarPorSexo();
            detectarEnter();
        }
    }


    console.log('salimos mostrar');
}

function mostrarDatos() {
    //console.log(objeto)
    var resultado = document.getElementById("contenedor");
    for (gatos in objeto) {
        for (datos of objeto[gatos]) {
            var ul = document.createElement("ul");
            for (gato in datos) {
                var li = document.createElement("li");
                if (gato == "ruta") {
                    var imagen = document.createElement("img");
                    imagen.src = datos[gato];
                    li.append(imagen);
                } else {
                    li.innerHTML = datos[gato];

                }
                ul.append(li)
            }
            resultado.append(ul);
        }
    }


}

function mostrarDatosFiltrar(){
   
    for(gatos in objeto){
        for(datos of objeto[gatos]){
            for(gato in datos){
               if(gato == "sexo"){
                  sexoGato.add(datos[gato]);
                  console.log(sexoGato);
               }

               if(gato=="raza"){
                gatoRaza.add(datos[gato]);
               }

               if(gato=="castrado"){
                gatoCastrado.add(datos[gato]);
               }

            }
        }
    }
}

function rellenarSelects(){
    var selectSexo= document.getElementById("sexo");   
    var selectRaza= document.getElementById("raza");   
    var selectCastrado= document.getElementById("castrado");   
     
    for(sexo of sexoGato){
        var opc= document.createElement("option");
        opc.innerHTML=sexo;
        selectSexo.append(opc);
    }

    for(raza of gatoRaza){
        var opc= document.createElement("option");
        opc.innerHTML=raza;
        selectRaza.append(opc);
    }

    for(castrado of gatoCastrado){
        var opc= document.createElement("option");
        opc.innerHTML=castrado;
        selectCastrado.append(opc);
    }
}

function filtrarPorSexo(){
    var resultado = document.getElementById("contenedor");
    var opcionSeleccionada = document.getElementById("sexo");
    opcionSeleccionada.addEventListener("change", function(){
        var sexo = this.options[opcionSeleccionada.selectedIndex];
            if(objeto.gatos.filter(a => a.sexo.includes(sexo.value))){
                objeto = (objeto.gatos.filter(a=>a.sexo.includes(sexo.value)))
            }
            console.log(objeto);
            document.getElementById("contenedor").innerHTML = "";

            for(dato of objeto){
                var ul = document.createElement("ul");
                for(gato in dato){
                   var li = document.createElement("li");
                   if(gato=="ruta"){
                    var imagen = document.createElement("img");
                    imagen.src= dato[objeto];
                    li.append(imagen);
                   }else{
                       li.innerHTML=dato[gato];
                   }
                   ul.append(li);
                }
                resultado.append(ul);
            }
           
    });
}

function detectarEnter(e){
    var enter= addEventListener("keypress", function(e){
        if(e.keyCode==13){
            var nombre = document.getElementsByTagName("input")[0].value;
           
        }
    })
}
