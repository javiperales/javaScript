$(function(){
    crearBarras();
   
})

function crearBarras(){
    let barras="";
    for(let i=0; i<32;i++){
         barras+="<div class='cont'><div class='barra'></div></div>";
    }
    $("#equ").append(barras);
    $("#btnOn").on("click", on);
    $("#btnOff").on("click", off);
}

function on(){
    for(let i=0;i<200;i++){
    $(".barra").each(function(){
        $(this).animate({
            bottom: (Math.random() *-200)
        })
    });
}
}

function off(){
    $(".barra").each(function(){
        $(this).stop(true, true);
       $(this).css(
          'bottom','-250px')
    })
}