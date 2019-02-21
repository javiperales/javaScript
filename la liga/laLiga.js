$(function () {
    //console.log("entrada");
    cargarAjax();
    // console.log("Final");
});
const mySet = new Set();

var cargarAjax = function () {
    $.ajax({
        url: "./laLiga.json",
        dataType: "json"
    }).done(function (respuesta) {
        verEquipos(respuesta)
        filtarCompeticion(respuesta)
        mostrarPorFiltro(respuesta)
    }).fail(function () {
        console.log("Fallo");
    }).always(function () {});
}
var verEquipos = function (equipos) {

    $("#nombre").append(equipos.name)
    var cad = "<tr>"
    //    equipos.clubs.forEach(function (equipo, index) {
    //        //console.log(equipo)
    //        cad += "<td>" + equipo.key + "</td>"
    //        cad += "<td>" + equipo.name + "</td>"
    //        cad += "<td>" + equipo.code + "</td>"
    //        cad += "<td>" + equipo.competiciones + "</td>"
    //        cad += "</tr>"
    //    })

    for (variable of equipos.clubs) {
        cad += "<td>" + variable.key + "</td>"
        cad += "<td>" + variable.name + "</td>"
        cad += "<td>" + variable.code + "</td>"
        cad += "<td>" + variable.competiciones + "</td>"
        cad+="</tr>"
    }
    $(".contenedor").append(cad)
}




var filtarCompeticion = function (equipos) {
    var opc = $("#filtrar")
   /* equipos.clubs.forEach(function (equipo) {
        equipo.competiciones.forEach(function (compe) {
            mySet.add(compe) //añado al mapa sin repetir
        }) //for interno para las competiciones
    }) //for externo*/
    
    
    for( variable of equipos.clubs){
        for(competiciones of variable.competiciones){
            mySet.add(competiciones)    
        }
    }
    
    var cad = ""
//    mySet.forEach(function (m) { //creo los options que almaceno en el mapa
//        cad += "<option>"
//        cad += m + "</option>"
//    })
    
    for( o of mySet){
        cad+= "<option>"
        
        cad+= o+ "</option>"
    }
    
    
    $("#filtrar").append(cad)
}

function mostrarPorFiltro(equipos) {
    $("#filtrar").on("change", function () {
        var cad = " "
        $(".contenedor").html(cad);
        cad += "<tr>"
        
        var compe = this.value
       
//        equipos.clubs.forEach(function (equipo) {
//            if (equipo.competiciones.includes(compe)) { //compruebo que exista el valor que paso por la variable en array
//                //console.log(equipo.name)
//                cad += "<td>" + equipo.key + "</td>"
//                cad += "<td>" + equipo.name + "</td>"
//                cad += "<td>" + equipo.code + "</td>"
//                cad += "<td>" + equipo.competiciones + "</td>"
//                cad += "</tr>"
//            }
//
//        }) //for externo
        
        
        for(equipo of equipos.clubs){
            if(equipo.competiciones.includes(compe)){
                cad+="<td>"+ equipo.key +"</td>"
                cad += "<td>" + equipo.name + "</td>"
                cad += "<td>" + equipo.code + "</td>"
                cad += "<td>" + equipo.competiciones + "</td>"
                cad += "</tr>"
            }
        }
        
        
        $(".contenedor").append(cad);
    });
}
