window.onload = function(){
    CargarAjax();
    cargarForm();
    dibujarGatos();

    asignarEventos();
}

var gatetes = [
    {
      "nombre":"micifu",
      "sexo":"macho",
      "raza":"persa",
      "img":["http://lorempixel.com/400/400/cats/1/","http://lorempixel.com/400/400/cats/5/"],
      "castrado":"si",
      "edad":"3",
      "peso":"10",
      "vacunado":"si"
    },
    {
      "nombre":"michino",
      "sexo":"macho",
      "raza":"siamés",
      "img":["http://lorempixel.com/400/400/cats/3/","http://lorempixel.com/400/400/cats/8/","http://lorempixel.com/400/400/cats/4/","http://lorempixel.com/400/400/cats/10/"],
      "castrado":"si",
      "edad":"8",
      "peso":"9",
      "vacunado":"si"
    },
    {
      "nombre":"garfield",
      "sexo":"hembra",
      "raza":"inglés",
      "img":["http://lorempixel.com/400/400/cats/9/"],
      "castrado":"no",
      "edad":"12",
      "peso":"5",
      "vacunado":"si"
    },
    {
      "nombre":"alf",
      "sexo":"macho",
      "raza":"persa",
      "img":["http://lorempixel.com/400/400/animals/1/"],
      "castrado":"no",
      "edad":"8",
      "peso":"6",
      "vacunado":"no"
    },
    {
      "nombre":"dona",
      "sexo":"hembra",
      "raza":"callejero",
      "img":["http://lorempixel.com/400/400/animals/3/","http://lorempixel.com/400/400/animals/2/","http://lorempixel.com/400/400/animals/7/","http://lorempixel.com/400/400/animals/8/"],
      "castrado":"si",
      "edad":"0",
      "peso":"3",
      "vacunado":"no"
    },
    {
      "nombre":"canela",
      "sexo":"hembra",
      "raza":"siamés",
      "img":["http://lorempixel.com/400/400/animals/5/","http://lorempixel.com/400/400/animals/6/"],
      "castrado":"si",
      "edad":"15",
      "peso":"4",
      "vacunado":"no"
    }
  ];
    let datosGatos;
  function CargarAjax() {
    datosGatos = gatetes;
    let i=0;
    for(m of datosGatos){
        m.id=i;
        i++;
         }
  }

  /*  var dibujarGatos= function(){
      let cadena="";

      for(o of gatetes){
          cadena='<div class="fichaGato" id="'
          cadena+=o.id+'" >'

          for(k of o.img){
              cadena+='<img src="'+k+'" class="imgGato"/> '
          }

          cadena+='<p>Nombre:<b>'+ o.nombre +
           '</b><br>sexo: <b>'+ o.sexo+
           '</b><br> edad <b>'+ o.edad+
           '</b><br> raza: <b>'+o.raza+
           '</b><br> castrado: <b>'+o.castrado

          cadena+='</b></div>'
      }

      document.getElementById("contenedor").innerHTML += cadena;
  }  */


  var dibujarGatos = function(){
    let cadena='';
    for(let x of gatetes){
      cadena+='<div class="fichaGato" id="'
      cadena+=x.id +'">'
      for(let y of x.img){
        cadena+='<img src="'+y+'" class="imgGato"/> '
      }
      cadena+='<p>Nombre: <b>'+x.nombre+
        '</b><br>Sexo: <b>'+x.sexo+
        '</b><br>Edad: <b>'+x.edad+
        '</b><br>Raza: <b>'+x.raza+
        '</b><br>Castrado: <b>'+x.castrado+
        '</b><br>peso: <b>'+x.peso+
        '</b><br>vacunado: <b>'+x.vacunado
      
      cadena+='</b></div>'
    }
    document.getElementById("contenedor").innerHTML += cadena;
  }
 
  var cargarForm = function(){
      let c="";
    for(let i=0; i<20; i++){
        c+="<option value="+i+">"+i+"</option>"
    }

    document.getElementById("edad1").innerHTML+=c;
    document.getElementById("edad2").innerHTML+=c;

    let k="";

    for(m of datosGatos){
        k+="<option value="+m.raza+">"+m.raza+"</option>";
    }

    document.getElementById("raza").innerHTML+=k;
 }

 var cumpleCond = function(gato){
    let F =document.forms.f1; //f1 es el nombre del formulario

    if(F.nombre.value!=''){
        let indice = gato.nombre.indexOf(F.nombre.value);
        if(indice<0){
            return false; //si no tiene valor me devuelve falso
        }//if hijo
    }//if padre

    if(F.peso.value!=''){
      let peso=gato.peso.indexOf(F.peso.value);
      if(peso<0){
        return false;
      }
    }
    //evaluamos edad

    let edadGato= parseInt(gato.edad)
    if(edadGato<F.edad1.value && F.edad1.value!="entre")return false;
    if(edadGato>F.edad2.value && F.edad2.value!="hasta")return false;
    //evaluamos sexo

    if(gato.sexo=="macho" && F.sexo.value=="hembra")return false;
    if(gato.sexo=="hembra" && F.sexo.value=="macho")return false;

    //evaluamos raza

    if(F.raza.value!="todas" && F.raza.value!=""){
        if(F.raza.value!=gato.raza)return false;
    }

    //evaluar castrado
    if(gato.castrado=="si" && F.castrado.value=="no")return false;
    if(gato.castrado=="no" && F.castrado.value=="si")return false; 
   
    //evaluar vacunado

    if(gato.vacunado=="si" && F.vacunado.value=="no")return false;
    if(gato.vacunado=="no" && F.vacunado.value=="si")return false;
    return true;

 }

 var mostrar = function(x){
   document.getElementById(x).style.display="block";

   setTimeout(function(){
    document.getElementById(x).style.opacity= "1" ;
    document.getElementById(x).style.height= "160px" ;
   },1000);
 }

 var ocultar = function(x){
  document.getElementById(x).style.opacity="0";
  document.getElementById(x).style.height="0px";

  setTimeout(function(){
    document.getElementById(x).style.display="none";
  },1000)

 }
 
 var rastrear = function(){
   for(let g of datosGatos){
     if(cumpleCond(g)){
       mostrar(g.id);
     }else{
       ocultar(g.id);
     }
   }
 }

 var mostrarGrande = function(img){
  let bloqueador = document.getElementById('bloqueador');

  let imagen = bloqueador.getElementsByTagName('img');

  imagen[0].src=img

  bloqueador.style.display="block";
} 

function agrandarFoto(){
  let img=this.src;
  let bloqueador=document.getElementById('bloqueador');
  let imagen=bloqueador.getElementsByTagName('img');
  imagen[0].src=img;

  bloqueador.style.display="block";
} 


var asignarEventos = function(){

  let F=document.forms.f1
  F.onchange = rastrear;
  F.borrar.onclick = function(){
    F.reset(); //resetea los datos

    rastrear();
  }

  F.nombre.onkeyup= function(){
    rastrear();
  }

  F.peso.onkeyup =function(){
    rastrear();
  }

  document.getElementById('contenedor').addEventListener('click',e=>{
    if(e.target.classList.contains('imgGato')){
      mostrarGrande(e.target.src);
    }
  });

  document.getElementById('bloqueador').onclick=function(){
    this.style.display="none";
  }

}

