$(function(){
    console.clear();
   cargarAjax()
})
let datos;
let info= new Set();

function cargarAjax(web, cacheada) {
    $.ajax({
            url: './ropa.json',
            cache: cacheada,
            dataType: 'json'
        }).done(function() {
            $('#container').append('TODO BIEN')
        }, cargarInfo)
        .fail(function() {
            $('#container').append('Ha ocurrido un fallo en la carga del JSON')
        });
} //cargarAjax
//datos=obj.ropa.marca;
function cargarInfo(obj){
    datos=obj.ropa;

cargarSelect(datos, "marca");

}//fin cargarInfo

function cargarSelect(objeto, campo){
    let info= new Set();
    let cadena="";
    for(let m of objeto){
      //  console.log(m.marca)
        info.add(m.marca);
    }
    console.log(info);
}

