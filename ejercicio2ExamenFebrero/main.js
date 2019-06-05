$(function(){
console.clear()
cargarAjax("datos.json",false);
});

function cargarAjax(web, cacheada) {
    $.ajax({
            url: web,
            cache: cacheada,
            dataType: 'json' // para decirle que lo lea como Json.
        }).done(function() {
          console.log('Todo Ok1')
        }, cargarDatos)
        .fail(function() {
            $('#container').append('Ha ocurrido un fallo en la carga del JSON')
        });
}

arr=[];
function cargarDatos(todo){
   for(dato of todo.archivos){
       cargarAjax2(dato.link);
   }

}

 function cargarAjax2(link) {
    $.ajax({
            url: link,
            dataType: 'json' // para decirle que lo lea como Json.
        }).done(function() {
            $('#container').append('fichero'+ link+ 'carga correcta <br>')
        }, cargarDatos2)
        .fail(function() {
            $('#container').append('Ha ocurrido un fallo en la carga del JSON'+ link+'<br>')
        });
} 
function cargarDatos2(todo){
    for(m in todo){
       for(k of todo[m]){
           for(i in k){
              $("#container").append("<strong>" + i + "</strong>" + ": <i>" + k[i] +"<br>");
              console.log(k[i]);
                       }
       }
    }

}


