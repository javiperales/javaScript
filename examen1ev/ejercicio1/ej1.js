A=[5,2,3,8,9,10,1]

numPrimos=[];//array nuevo para meter solo los numeros primos

for(var i=0; i<A.length; i++){//recorro el array
    if(numeroprimo(A[i]))//compruebo si cada numero del array es primo
        numPrimos.push(A[i]);//si es primo meto el numero en el nuevo array
}

console.log("hay "+numPrimos.length+" primos") //mensaje por consola
console.log(numPrimos);

function numeroprimo(num){//funcion para comprobar los numeros primos que hay en el array
    for(var i=2; i<num; i++){
        if(num%i===0){
            return false; //si el numero es par me devuelve falso
        }
    }
    return num;//me devuelve el numero
}