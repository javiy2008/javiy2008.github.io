document.addEventListener("DOMContentLoaded", function(){


  arrJuegos = JSON.parse(arrJuegos);


  var listaJuegos = document.getElementById("listado-juegos");

  for (var i = 0; i < arrJuegos.length; i++) {
    listaJuegos.innerHTML = listaJuegos.innerHTML + "<li>" + "<h2>" + arrJuegos[i].nombre + "</h2>" + "<"+"img src='" + arrJuegos[i].foto + "'>" + "</li>" +
    "<li>" + "<p>" + arrJuegos[i].valoracion + "</p>" + "</li>" +
    "<li>" + "<p>" + arrJuegos[i].categoria + "</p>" + "</li>" +
    "<li>" + "<dl>" + "<dt>" + arrJuegos[i].descripciondt + "</dt>" + "<dd>" +  arrJuegos[i].descripciondd + "</dd>" + "</dl>" + "</li>";
}



});
