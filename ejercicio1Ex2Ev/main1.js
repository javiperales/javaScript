 $(document).ready(function () {
     crearTubo();
     encender();
     apagar();

 });



 function crearTubo() {
     var cadena = "";
     for (var i = 0; i < 32; i++) {
         cadena += '<div class="cont"><div class="barra"></div></div>';
         $('#equ').append(cadena);
     }
 }


 function encender() {


     $('#btnOn').on("click", function () {
         $('.barra').each(function () {
             let max = 30;
             let min = -30;
             for(let v=0; v<1500; v++){
             let r = Math.floor(Math.random() * (max - min) + min);
             $(this).animate({
                 //console.log('aqui no entra ni de coña');
                 bottom: '+=' + r
             },50)
         }
         })
     })
 }

function apagar(){
$('#btnOff').on("click", function(){
    $('.barra').stop(true);
    $('.barra').css('bottom', '-250px');
})
}
