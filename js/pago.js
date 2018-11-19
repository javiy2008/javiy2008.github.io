document.addEventListener("DOMContentLoaded", function(){
  arrJuegos = JSON.parse(arrJuegos);
  var precio = 20 ;
  var seleccionTipo = document.getElementById("seletipo");
  var radioDigital = document.getElementById("digital");
  var radioFisico = document.getElementById("fisico");
  var sumatoriaPago = document.getElementById("sumatoria-pago");
  var seleccionPrecio = document.getElementById("precio");
  var seleccionIva = document.getElementById("iva");
  var seleccionPreciofinal = document.getElementById("preciofinal");
  var seleccionCantidad = document.getElementById("preciocantidad");
  var campoCantidad = document.getElementById("cantidad");
  var envioComun = document.getElementById("comun");
  var envioEspecial = document.getElementById("especial");
  var envioPremium = document.getElementById("premium");
  var campoEnvio = document.getElementById("envio");
  var seleccionEnvio = document.getElementById("seleenvio");
  var envio = 0.005;
  var cantidad = 0;
  var seleccionPrecio = 0;


function calculcarCostos(){
  seleccionPrecio = precio;
  var precioxcantidad = precio * cantidad;
  var precioenvio = precioxcantidad * envio;
  var precioconenvio = precioenvio + precioxcantidad;
  var iva = precioconenvio * 0.22 ;
  var preciofinal = precioconenvio + iva ;
preciofinal = parseInt (preciofinal)
iva = parseInt (iva)

  seleccionCantidad.innerHTML = "US$" + precioxcantidad;
  campoEnvio.innerHTML = "US$" + precioenvio;
  seleccionIva.innerHTML = "US$" + iva;
  seleccionPreciofinal.innerHTML = "US$" + preciofinal;

}
  campoCantidad.addEventListener("click", function(){
    cantidad = campoCantidad.value;
    cantidad = parseInt(cantidad);
    calculcarCostos();

  });

  radioDigital.addEventListener("click", function(){
      seleccionTipo.style.display="none";
      envio = 0;
      document.getElementById("direccion").removeAttribute("required");
  });

  radioFisico.addEventListener("click", function(){
      seleccionTipo.style.display="block";
      envio = 0.005;
        document.getElementById("direccion").setAttribute("required");
  });

  envioEspecial.addEventListener("click", function(){
      envio = 0.02;

      calculcarCostos();
  });

  envioComun.addEventListener("click", function(){
      envio = 0.005;

      calculcarCostos();
  });

  envioPremium.addEventListener("click", function(){
      envio = 0.05;

      calculcarCostos();
  });
});
