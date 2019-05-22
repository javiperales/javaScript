

$(function() {
    console.clear()
    cargarAjax("./contactos.json", false);
  
   
})



function cargarAjax(web, cacheada) {
    $.ajax({
            url: web,
            cache: cacheada,
            dataType: 'json'
        }).done(function() {
            $('#container').append('TODO BIEN')
        }, cargarDatos)
        .fail(function() {
            $('#container').append('Ha ocurrido un fallo en la carga del JSON')
        });
}

let datos;
let contactos=[]
let contactos2=[]
let contacto="";
let nombre="";
let numero="";
let email="";
Array.prototype.unique = function() {
    return this.filter((x, i, a) => a.indexOf(x, i + 1) < 0);
}


function cargarDatos(obj) {
   datos = obj;
    for (objeto of obj.contactos) {
        contactos.push(objeto)
    }
    contactos = contactos.unique() //nos deja solo una foto de cada tipo
   
    crearContacto()
} //fin cargarDatos

function crearContacto() {

   for(let i=0; i<contactos.length; i++){
      nombre=contactos[i].nombre;
      numero=contactos[i].telefono;
      email=contactos[i].email;

     
    contacto += "<div class='contacto' id='" + i + "'><p class='parrafo'> nombre "+nombre+" <br> telefono "+numero+" <br> mail "+email+"</p><div id='botones'><input type='button' class='boton2' value='borrar'><input type='button' class='boton' value='editar'></div></div>";
  
    console.log(nombre);
   }

   
  
   $("#contenedor").append(contacto);
   
  for(let i=0; i<contactos.length;i++){
      $(".boton2").hide();
      $(".boton").hide(); 
  }

$(".contacto").on("click", animar);
 


}

function animar(){
       $(".contacto").find(".boton").hide();
       $(".contacto").find(".boton2").hide();

        $(this).animate({
            "marginLeft": '-30px' 
          },1000, 'swing')

         $(this).removeClass("contacto").addClass("capa");
        $(this).find(".boton").slideDown(); 
        $(this).find(".boton2").slideDown(); 

}

function desanimar(){
    console.log("estas en desanimar");
    $(".capa").click(function(){
        $(this).find(".parrafo").animate({
            marginLeft: '3px'
          },1000, 'swing')
    
         $(this).removeClass("capa").addClass("contacto");
        $(this).find(".boton").slideUp(); 
        $(this).find(".boton2").slideUp(); 
    
      })
}

