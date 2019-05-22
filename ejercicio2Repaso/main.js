window.onload = function(){
    desencriptar(palabra);
}

palabra=prompt("escribe una palabra");

desencriptar = function(palabra){
    desencriptada="";
   let longitud = palabra.length;
    raiz=longitud**0.5;

    console.log(palabra);
    for(let i=0; i<raiz; i++){
        for(j in palabra){
            if(j%raiz==i){
              desencriptada+=palabra[j];
              console.log(desencriptada);
            }
        }
       } 
       
    }

