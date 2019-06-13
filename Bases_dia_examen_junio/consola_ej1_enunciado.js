/*
 * Dado un string cualquiera, muestra las letras transformadas en mayúsculas y minúsculas alternativamente. 
 * Hay que tener en cuenta que los signos de puntuación, números… no cambiarán la alternativa.
 */

let A = "Buenas tardes a todos."
//let A = "Ley de Alzheimer de la programación: si lees un código que escribiste hace más de dos semanas es como si lo vieras por primera vez."
//let A = "Los ordenadores son buenos siguiendo instrucciones, no leyendo tu mente."


console.log(A);
let B=A.split(" ");

console.log(B);

for(let i=0; A.length; i++){
    let C=B[i].toLowerCase();
        for(let k=i; k<A.length; k++){
            let R=C[i+k].toUpperCase();
            console.log(R)
        }
}
  


