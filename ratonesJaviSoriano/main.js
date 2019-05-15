let ratones = ["raton","rata","rato","ratatouille"];
var  comprobar = function(r,escrita){
  // console.log(r,escrita);
   let aux =""
   for(let c of escrita){
     //comprobamos si p está en r. Si está eliminamos el caracter de r y si no lo está devolvemos false.
     let i=r.indexOf(c) //busca en r las letras de la palabra escrita
     
     if(i >=0){
      // console.log("Aqui eliminariamos " + c)
       //Eliminamos el caracter de la palabra donde buscamos.
       //Este paso se puede hacer en uno solo pero no quería liarlo demasiado.
      
       aux = r.slice(0,i)  + r.slice(i+1);
       console.log(aux +" hola" )
       r = aux
     }else{
       return false
     }
   }
   
   return true;
 }
 window.onload = function(){
   console.clear()
	 document.getElementById("btn_inicio").onclick= function(){	 
      var res=document.getElementById("resultados");
      res.innerHTML  =""
	    var escrita = prompt("Escribe la palabra");
	 
		for (let r of ratones){
            res.innerHTML += "Evaluamos " + escrita + " con " + r +"<br>"
			res.innerHTML += comprobar(r,escrita)?"si<br>" : "no<br>"
		} 
	 }
 }