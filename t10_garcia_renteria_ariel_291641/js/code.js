$(document).ready(function(){
  $('body button').click(function(){
      //Sacamos el nombre del producto
      var producto = $('body input').first().val();
      //sacamos el valor del precio
      var precio = $('body input').last().val();
      //Agregamos la sintaxis para una nueva fila, dos datos
      // y agregamos los valores del producto y precio
      $('tbody').append('<tr><td>'+producto+'</td><td>'+precio+'</td><td><button>Eliminar</button></td></tr>');
  }),
    //eliminar contenido
  $(document).on('click','td button', function(){
        $(this).parentsUntil("tbody").remove();
        });
});
