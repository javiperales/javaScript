window.onload = function(){

var V=['google',

 'hotmail',

 'msn',

 'unizar'

]

var c = document.getElementById('container')

var cadena = "<ul>"

for (let v of V){

 cadena += "<li>www."+ v + ".com</li>"

}

cadena += "</ul>"

c.innerHTML=cadena;

crearEnlaces()

}

function crearEnlaces(){
    
    
    var div = document.getElementById("container");
    var ul = document.createElement("ul");
    var li = document.createElement("li");
    li = document
    
    //div.append(ul);
    ul.appendChild(li);
    
    for(let c of V){
        document.getElementsByTagName("li").onclick= function(){
          alert("has clicado en"+c);
        };
    }
    
    
}