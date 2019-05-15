p=["raton","rato","rata","ratatuille","paco"];

var comprobar = function(r,x){
    for(c of x){
        let i=r.indexOf(c);
        if(i>=0){

            let y = new RegExp(c,'gi');

            let k = r.match(y) ;
        }else{
            return false;
        } 
    }
            return true;
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
