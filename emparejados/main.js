window.onload = function () {
    crearTablero();


}

let clicadas = [];
var cartas = [
  "http://lorempixel.com/200/200/animals/8/",
  "http://lorempixel.com/200/200/animals/2",
  "http://lorempixel.com/200/200/animals/3",
  "http://lorempixel.com/200/200/animals/4",
  "http://lorempixel.com/200/200/animals/5",
  "http://lorempixel.com/200/200/animals/6",
  "http://lorempixel.com/200/200/animals/7",
  "http://lorempixel.com/200/200/animals/1",
  "http://lorempixel.com/400/400/transport/4",
  "http://lorempixel.com/400/400/transport/2/",
  "http://lorempixel.com/400/400/transport/5/",
  "http://lorempixel.com/400/400/transport/6/",
  "http://lorempixel.com/400/400/transport/7/",
  "http://lorempixel.com/400/400/transport/8/",
  "http://lorempixel.com/400/400/transport/9/",
  "http://lorempixel.com/400/400/cats/4/",
  "http://lorempixel.com/400/400/people/6/",
  "http://lorempixel.com/400/400/people/4/"
];



let crearTablero = function () {
    let cadena = "";
    let contenedor = document.getElementById('tablero');
    let imagenes = [];
    for (let i = 0; i < 8; i++) {
        imagenes[i] = '<div id="' + i + '" class="cuadro"><img src="' + cartas[i] +
            '" onclick="clickar(this)"></div>';

    }
    for (let i = 8, k = 0; i < 16; i++, k++) {
        imagenes[i] = '<div id="' + i + '" class="cuadro"><img src="' + cartas[k] +
            '" onclick="clickar(this)"></div>';
    }
    imagenes = imagenes.sort(function () {
        return Math.random() - 0.5
    });

    for (let k = 0; k < imagenes.length; k++) {
        cadena += imagenes[k];
    }

    contenedor.innerHTML += cadena;

}

let clickar = function (imagen) {

    imagen.style.opacity = 1;
    // alert(clicadas.length);
    if (clicadas.length == 2) {
        if (clicadas[0].src != clicadas[1].src) {
            clicadas[0].style.opacity = 0;
            clicadas[1].style.opacity = 0;

        } 
        clicadas = [];
    }
    
    let ganado = document.getElementsByTagName('img');
   
    
    for(let i=0; i<ganado.length; i++){
        if(ganado[i].style.opacity==0){
            break;
            
        }
        if(i==15){
            alert("has ganado");
        }
    }
    
    clicadas[clicadas.length] = imagen;
}
