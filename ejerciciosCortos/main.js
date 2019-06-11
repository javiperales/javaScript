frase="hola mundo";

let s=frase.replace(" ", "");

console.log(s);

let c=s.match(/.{1,2}/g);

console.log(c);

/* var myString = "hola mundo";
var arr = [];
var letras = 2;//cada cuanto queremos la separacion
var i = 0;

while(i < myString.length){
    //console.log(i);
    var initIndex = i;
    var endIndex = i + letras;
    arr.push(myString.substring(initIndex, endIndex));
    i = endIndex;
}
console.log(arr + ' v2')
//quitar espacios v2 */