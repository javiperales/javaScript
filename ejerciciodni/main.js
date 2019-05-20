var dni=prompt("escribe dni");

var letras = ['T','R','W','A','G','M','Y','F','P','D','X','B','N','J','Z','S','Q','V','H','L','C','K','E','T'];

function comprobar(dni){
   
if(dni.length ==8){
    if(dni>0 && dni<99999999){
        var resto=dni%23; 
        var letra=letras[resto];
       alert("la letra de tu dni es la"+ letra); 
       document.write("tu dni es" + dni + letra);
    }else{
       alert("introduce un dni valido sin letra");
    }
}else{
    alert("la longitud no es correcta");
}
}

window.onload= function(){
    comprobar(dni);
}
