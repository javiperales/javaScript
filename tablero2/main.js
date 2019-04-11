window.onload = function () {
    console.log("entra aqui");
    crearTablero();
    //asignarEventos();
    pinarFilarCol();
}

var asignarEventos = function () {
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

var pinarFilarCol = function () {
    let casillas = document.getElementsByClassName('casillas');
    for (let c of casillas) {
        console.log(c);

        c.onclick = function (ev) {
            let fila = ev.target;
            let columna = ev.target;
            if (fila.classList.contains('blancas') && columna.classList.contains('blancas')) {
                console.log(fila.id);
                if (fila.id >= 0 && fila.id < 8) {
                    for (let k of casillas) {
                        if (k.className == "casillas blancas") {
                            if (k.id >= 1 && k.id <= 7) {
                                k.classList.add('naranja');
                                k.classList.remove('blancas');
                            }
                        }
                    }
                }
                if (fila.id >= 9 && fila.id < 17) {
                    for (let k of casillas) {
                        if (k.className == "casillas blancas") {
                            if (k.id >= 8 && k.id <= 16) {
                                k.classList.add('naranja');
                                k.classList.remove('blancas');
                            }
                        }
                    }
                }
                if (fila.id >= 17 && fila.id < 24) {
                    for (let k of casillas) {
                        if (k.className == "casillas blancas") {
                            if (k.id >= 17 && k.id <= 23) {
                                k.classList.add('naranja');
                                k.classList.remove('blancas');
                            }
                        }
                    }
                }
                if (fila.id >= 25 && fila.id < 33) {
                    for (let k of casillas) {
                        if (k.className == "casillas blancas") {
                            if (k.id >= 25 && k.id <= 32) {
                                k.classList.add('naranja');
                                k.classList.remove('blancas');
                            }
                        }
                    }
                }
                if (fila.id >= 33 && fila.id < 40) {
                    for (let k of casillas) {
                        if (k.className == "casillas blancas") {
                            if (k.id >= 33 && k.id <= 39) {
                                k.classList.add('naranja');
                                k.classList.remove('blancas');
                            }
                        }
                    }
                }
                
                if (fila.id >= 40 && fila.id < 49) {
                    for (let k of casillas) {
                        if (k.className == "casillas blancas") {
                            if (k.id >= 39 && k.id <= 48) {
                                k.classList.add('naranja');
                                k.classList.remove('blancas');
                            }
                        }
                    }
                }
                
                if (fila.id >= 49 && fila.id < 58) {
                    for (let k of casillas) {
                        if (k.className == "casillas blancas") {
                            if (k.id >= 49 && k.id <= 57) {
                                k.classList.add('naranja');
                                k.classList.remove('blancas');
                            }
                        }
                    }
                }
                 if (fila.id >= 58 && fila.id < 65) {
                    for (let k of casillas) {
                        if (k.className == "casillas blancas") {
                            if (k.id >= 58 && k.id <= 64) {
                                k.classList.add('naranja');
                                k.classList.remove('blancas');
                            }
                        }
                    }
                }
                
            }
        }
    }

}
