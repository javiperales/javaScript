window.onload = function () {
    verDatos();
}
var objeto;
Array.prototype.unique = function () {
    return this.filter((x, i, a) => a.indexOf(x, i + 1) < 0);
}

function verDatos() {
    http = new XMLHttpRequest();
    http.onreadystatechange = mostrar;
    http.open("GET", "./ejercicio5.json", true);
    http.send(null);

    function mostrar() {
        if (http.readyState == 4 && http.status == 200) {
            let r = http.responseText;
            objeto = JSON.parse(r);
            mostrarDatos();
            verOpciones();
        }
    }
} //ver datos

function mostrarDatos() {
    var cuerpoTabla = document.getElementById("respuesta");
    objeto.datos.sort(function (a, b) {
        return a.MACROAREA.localeCompare(b.MACROAREA);
    });
    console.log(objeto);
    for (dato of objeto.datos) {
        var tr = document.createElement("tr");
        var td1 = document.createElement("td");
        var td2 = document.createElement("td");
        var td3 = document.createElement("td");
        var td4 = document.createElement("td");
        var td5 = document.createElement("td");
        var td6 = document.createElement("td");
        tr.append(td1);
        tr.append(td2);
        tr.append(td3);
        tr.append(td4);
        tr.append(td5);
        tr.append(td6);
        td1.innerHTML = dato.MACROAREA;
        td2.innerHTML = dato.AÑO;
        td3.innerHTML = dato.EDAD;
        td4.innerHTML = dato.NUMERO_PDI;
        td5.innerHTML = dato.CATEGORIA_CUERPO_ESCALA;
        td6.innerHTML = dato.SEXO;

        cuerpoTabla.append(tr);




    }

} //mostrarDatos

function verOpciones(){
    var opc = document.getElementById("opciones");
    var arrayOcpciones= [];
    var opcFiltrado = [];
    for( dato of objeto.datos) {
        arrayOcpciones.push(dato.MACROAREA);
    }

    console.log(arrayOcpciones);

    opcFiltrado = arrayOcpciones.unique();

    for(datoOpc of opcFiltrado) {
        var option = document.createElement("option");
        opc.append(option);
        option.innerHTML = datoOpc;
    }
}
