window.onload = function() {
    console.clear();
    cargarAJAX();
    cargarDatos();
  };

  var obj_json;
  const Elegir ="<option value='' selected>Elegir</option>"

  var cargarAJAX = function() {
    var http = new XMLHttpRequest();
    http.onreadystatechange = mostrar;
    http.open("GET", "ropa.json", false);
    http.send(null);
    function mostrar() {
      if (http.readyState == 4 && http.status == 200) {
        console.log('JSON cargado ok');
        obj_json = JSON.parse(http.responseText);
        //console.log(obj_json.coches);
        //cargarDatos();
        cargarSelect(obj_json.ropa,'marca')//campo es el id del select
      } else {
        //console.log('JSON aún NO cargado')
      }
    }
  };




   function cargarSelect(objeto, campo){
    let cadena=Elegir;//la cadena tiene el valor de la variable Elegir que es el option
    let datos = new Set();

    for(let obj of objeto){
       
        datos.add(obj[campo])
        //array con todas las marcas
      }
      for(let m of datos){
          /* console.log(m); */
        cadena += "<option value='" + m + "'>" + m + "</option>"
      }
      document.getElementById(campo).innerHTML = cadena
      //campo es la variable de marca
  }


  function limpiaDesplegable(campo){
    let desp = document.getElementById(campo);
    desp.value='';
    desp.innerHTML=Elegir;
}


  function cargarDatos(){
    document.f1.onchange=mostrarResultados;
  }

  function mostrarResultados(op){
   let resultados = document.getElementById('resultados');

   let ropa=obj_json.ropa;
   let formulario = document.f1;
//de abajo a arriba españa
    if(op.target.name=='talla'){
        //filtramos por talla
        ropa = obj_json.ropa.filter(x=>x.talla == formulario.talla.value && x.modelo == formulario.modelo.value && x.marca== formulario.marca.value);


    }else if(op.target.name=='modelo'){
        ropa =obj_json.ropa.filter(x=>x.modelo == formulario.modelo.value && x.marca == formulario.marca.value)
        cargarSelect(ropa,"talla");//dependiendo de la opcion carga el ultimo select
    }else if(op.target.name=="marca"){
        ropa=obj_json.ropa.filter(x=>x.marca == formulario.marca.value);
        cargarSelect(ropa,"modelo");
        limpiaDesplegable("talla");
    }else{
        alert("no hay datos seleccionados");
    }
    mostrar(ropa);
  }
   

  function mostrar(valores){
    let cad ='';
    for(let f of valores){
      for(let propiedad in f){
        cad+=propiedad
        cad+=': ';
        cad+=f[propiedad];
        cad+='<br>';
      } 
      cad+="<hr>";
    }
    
    document.getElementById('resultados').innerHTML = cad;
  }