function updateAlerta(mensaje){
  console.log("entro a funcion");
  var socket = io.connect();

  socket.emit('sendAlert',{
    value:mensaje
  });
  console.log("se envia mensaje de alerta");
  document.getElementById("mensajeEnviado").innerHTML = "Alerta enviada con exito";
};
