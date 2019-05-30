window.onload= function(){
    cambiar();
}


function ponColor(){
    let clase= document.getElementsByClassName("rojito");

    for(let i=0; i<clase.length; i++){
    clase[i].classList.add('verdecito');

    }
    quitaColor();
}

function quitaColor(){
    let verde = document.getElementsByClassName("verdecito");

    for(m of verde){
        m.classList.remove('rojito');
    }
}

function cambiar(){

    let boton = document.getElementById("cambiar");

    boton.addEventListener("click", ponColor, false);
}