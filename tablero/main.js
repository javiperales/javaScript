window.onload = function () {
    console.log("entra aqui");
    crearTablero();
    asignarEventos();
}

var asignarEventos = function() {
    let casillas = document.getElementsByClassName('casillas');

    for (c of casillas) {
        c.onclick = function (ev) {
            let casilla = ev.target;

            if (casilla.classList.contains('blancas')) {
                for (k of casillas) {
                    if (k.classList.contains('blancas')) {
                        k.classList.add('negras');
                        k.classList.remove('blancas');
                    } else {
                        k.classList.add('azules');
                        k.classList.remove('negras');
                        k.classList.remove('rojas')
                    }
                }
            } else if (casilla.classList.contains('negras')) {
                for (k of casillas) {
                    if (k.classList.contains('negras')) {
                        k.classList.add('rojas');
                        k.classList.remove('negras');
                    }
                }

            }
        }
    }
}



var crearTablero = function () {
    let j = false;

    let cad = '';

    for (let i = 1; i < 65; i++) {
        cad += "<div id='" + i + "' class='casillas "
        cad += (j ? 'negras' : 'blancas')
        cad += "' ></div>"
        if (i % 8 != 0) j = !j;
    }
    let t = document.getElementById('tablero');

    t.innerHTML += cad;
}
