window.onload = function () {
    mostrarDatos();
}

function mostrarDatos() {
    http = new XMLHttpRequest();
    http.onreadystatechange = ver;
    http.open("GET", "./datos3.json", true);
    http.send(null);

    function ver() {
        if (http.readyState == 4 && http.status == 200) {
            let o = http.responseText;
            objeto = JSON.parse(o);

            verColores(objeto)
            cambiarColor(objeto)
        }

    }

} //mostrar Datos  -- funcion  donde cargare el json y llamare al resto de funciones


function verColores(objeto) {
    document.getElementsByTagName("select")[0].innerHTML = " "//vaciar select
    var opcion = document.getElementsByTagName("select")[0]//cojo una etiqueta select 

    for (m in objeto) {//recorro el json
        //m = arraycolores
        for (k of objeto[m]) {//recorro los datos del json
            for (l in k) {//recorro los atributos
                var opt = document.createElement("option")// creo una etiqueta option para metersela al select
                opt.innerHTML = l// en la etiqueta option meto los atributos del json en este caso los colores
                opcion.appendChild(opt)//dentro del select meto las opciones 
                
            }
        }
    }
}



function cambiarColor(objeto) { //funcion que coge los elementos del json por su atributo color 
    //para cambiar el color cuando despleguemos el select
    var sele = document.getElementsByTagName("select")[0]//cojo un select del html
    //con [0] coge el primer select de nuestro documento html
    var pintar = "" //creo una variable pintar (vacia) para despues meterle los colores
    sele.addEventListener('click', function () {//añado un evento a select 
        var color = this.options[sele.selectedIndex];//me devuelve la opcion que he elegido en el select(color), devuelve un array con todas las opciones de ese select y con selectedIndex devuelve la opcion que he elegido

        for (m in objeto) {
            for (l of objeto[m]) {
                for (k in l) {
                    if (color.value == k) {//comprueba que el valor del color sea igual al del  dato conseguido del json
                        pintar = l[k]// la variable pintar sea igual al color del json

                    }//fin if
                }//for in hijo
            }//for of
        }//for in padre

        document.getElementsByClassName("texto")[0].style.color = pintar; //cogemos el primer elemento de la clase texto y cambiamos el color acorde con el desplegable   
    });


}
