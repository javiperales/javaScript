var abcd=["abcdefghijklmnopqrstuvwxyz"];
palabra=prompt("escribe");

window.onload = function(){
    comprobar(palabra,abcd);
}

function comprobar(palabra, abcd){
   for(c of abcd){
      let i = palabra.indexOf(c);
        if(i<=0){
            let y = new RegExp(c,'gi');
            let x = palabra.match(y);
            console.log(x);
        }
      }
   }
