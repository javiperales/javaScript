window.onload = function () {
    cargar();
}

function cambiarColor() {

    let rojos = document.getElementsByClassName("rojito");

    for (m of rojos) {
        m.classList.add("verdecito");
        console.log(m);
    }
    quitaColor();

}

function quitaColor() {
    let verdes = document.getElementsByClassName("verdecito");

    for (k of verdes) {
        k.classList.remove("rojito")
    }
}

function cargar() {
    let boton = document.getElementById("cambiar");

    boton.addEventListener("click", cambiarColor, false);
}
