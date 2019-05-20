window.onload = function() {
    console.clear()
    first()
} //fin onload
var pantallas = document.getElementById("pantalla");

function first() {
    let F = document.forms.f1;

    F.cadena.onkeyup = function() {
        pantallas.innerHTML = F.cadena.value;
    }
}