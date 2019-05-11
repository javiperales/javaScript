p=["raton","rato","rata","ratatuille"];

var comprobar = function(r,x){
    
    for(let i=0;i<x.length; i++){//recorremos la palabra que escribimos
        let letra =false;//booleano para cada letra recorrida
        for(let o=0; o<r.length; o++){//recorremos cada letra de la palabra que sale del array
           /*  console.log(x[i]);
            console.log(r[o]); */
            
            if(x.charAt(i).toLowerCase()==r.charAt(o)){//comparamos letra a letra de las dos palabras
                letra =true;//si son iguales letra sera verdadero
            }
        }
        if(letra==false){//si letra el falso
            return false;
            /* palabra=false;//palabra es falso */
        }
    }
    return true;//nos devuelve palabra
}

window.onload = function() {
    document.getElementById("btn_inicio").onclick=function(){
        var x=prompt("introduce palabra");
       
        for(let r of p){
            document.write(comprobar(r,x)?"si<br>":"no<br>");
        }
    }
    /* mirar match */
  };

 