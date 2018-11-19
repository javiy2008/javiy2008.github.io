document.addEventListener("DOMContentLoaded", function(){


  arrJuegos = JSON.parse(arrJuegos);


  var listaJuegos = document.getElementById("listado-juegos");

  for (var i = 0; i < arrJuegos.length; i++) {
    listaJuegos.innerHTML = listaJuegos.innerHTML + "<li>" + "<"+"a href='" + arrJuegos[i].href + "'>" + "<"+"img src='" + arrJuegos[i].foto + "'>" + arrJuegos[i].nombre + "</li>";
}


});
