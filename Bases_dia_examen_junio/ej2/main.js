window.onload=function(){
  cargarAjax();
  asignarEventos();
}
let objeto;
let coches = new Set();
function asignarEventos(){
 
  let datos;
  f1.onchange = function(){
    let v1 = f1.val1.value;
    let v2 = f1.val2.value;
  
    document.getElementById('val1').innerHTML = v1;
    document.getElementById('val2').innerHTML = v2;
    datos = objeto.filter(x => x <= v1 || x >= v2);
    mostrarDatos(datos);
  }
}
function mostrarDatos(objeto){
  let datos;
  objeto.sort((x,y)=>Number(x.precio)- Number (y.precio));
  let cadena="";
  for ( c of objeto ){
    coches.add(c);
    cadena +=c+ "<hr>"
    for(k in c){
      cadena += k + ' : ' + c[k] + '<br>'; 
    }
  }
  document.getElementById('resultado').innerHTML = cadena;
}
function cargarAjax() {
  var http = new XMLHttpRequest();
  http.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      objeto=JSON.parse(this.responseText).coches;
    mostrarDatos(objeto);
    }
  };
  http.open("GET", "https://codepen.io/chabisoriano/pen/mYGmoW.js", true);
  http.send(null);
}
