window.onload = function () {
    mostrarDatos();
}
var json;

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
            cambiarColor()
        }

    }

}

colores=[];
valores=[];
function verColores(objeto){
    document.getElementsByTagName("select")[0].innerHTML="";
    var sele = document.getElementsByTagName("select")[0];      
    for(m in objeto){
        for(k of objeto[m]){
            json=k;
            console.log(k)
            for(i in k){
               /*  console.log(k[i])//aqui tengo el value
                console.log(i)//aqui tengo el nombre de los colores */
                var opt= document.createElement("option");
               /*  opt.innerHTML=i; */
                opt.append(i)
                sele.appendChild(opt);   
                
            }
        }
    }

}


function cambiarColor(){
  var opcionesSeleccionada;

  let selector = document.getElementsByTagName("select")[0];
  selector.addEventListener("click", function(){
      opcionesSeleccionada =this.options[selector.selectedIndex]
      let text=document.getElementsByClassName("texto")[0].style.color = json[opcionesSeleccionada.value];
  })

    
}

