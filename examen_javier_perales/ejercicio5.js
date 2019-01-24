var objeto;
var estado = 0;
var ordenarCompeticionFiltrada = [];
window.onload = function () {
    verDatos();
}
Array.prototype.unique = function () {
    return this.filter((x, i, a) => a.indexOf(x, i + 1) < 0);
}

function verDatos() {
    http = new XMLHttpRequest();
    http.onreadystatechange = mostrar;
    http.open("GET", "./JSON.json", true);
    http.send(null);

    function mostrar() {
        if (http.readyState == 4 && http.status == 200) {
            let r = http.responseText;
            objeto = JSON.parse(r);
            cargarDatos();
           
            mostrarPorCompeticion();
        }
    }
} //verDatos

function cargarDatos() {
    var div = document.getElementById("container");
    var table = document.createElement("table");
    var tr = document.createElement("tr");
    var td = document.createElement("td");
    var td2 = document.createElement("td");
    var td3 = document.createElement("td");
    var td4 = document.createElement("td");
    var td5 = document.createElement("td");
    var td6 = document.createElement("td");
    
    table.append(tr);
    tr.append(td);
    tr.append(td2);
    td.innerHTML = "macroarea";
    td2.innerHTML = "anho";
    td3.innerHTML = "edad";
    td4.innerHTML = "numero_pdi";
    td5.innerHTML = "categoria_grupo_escala";
    td5.innerHTML = "sexo";
    div.append(table);


    for (let macro of objeto.datos) {
        var trC = document.createElement("tr");
        var tdmacro = document.createElement("td");
        trC.append(tdmacro);
        tdCiudad.innerHTML = ciudad.nombre;
        for (macro of macro.MACROAREA) {
            var divMacro = document.createElement("div");
            tdmacro.append(divMacro);
            //console.log(equipo);
            divEquipos.innerHTML = equipo;
        }
        table.append(trC);
    }
}





