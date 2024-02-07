const recibirForm = (e) => {
  e.preventDefault();

  const formulario = document.getElementById("formulario");

  const nombre = document.getElementById("nombre").value.trim();
  const telefono = document.getElementById("telefono").value.trim();
  const direccion = document.getElementById("direccion").value.trim();
  const correo = document.getElementById("correo").value.trim();
  const nombreTarjeta = document.getElementById("nombreTarjeta").value.trim();
  const tipoBanco = document.getElementById("tipoBanco").value;
  const numeroTarjeta = document.getElementById("numeroTarjeta").value.trim();
  const fechaCaducidad = document.getElementById("fechaCaducidad").value.trim();
  const cvv = document.getElementById("cvv").value.trim();

  const telefonoRegex = /^\+\d{1,3}\d{9}$/; 
  const correoRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/; 
  const numeroTarjetaRegex = /^\d{16}$/; 
  const fechaCaducidadRegex = /^(0[1-9]|1[0-2])\/[0-9]{2}$/; 
  const cvvRegex = /^[0-9]{3,4}$/; 
  if (nombre === "") {
  console.log("Por favor, ingrese su nombre completo.");
  return;
}
if (telefono === "" || !telefonoRegex.test(telefono)) {
  console.log("Por favor, ingrese un número de teléfono válido en formato internacional (+57XXXXXXXXX).");
  return;
}
if (direccion === "") {
  console.log("Por favor, ingrese su dirección de residencia.");
  return;
}
if (correo === "" || !correoRegex.test(correo)) {
  console.log("Por favor, ingrese un correo electrónico válido.");
  return;
}
if (nombreTarjeta === "") {
  console.log("Por favor, ingrese el nombre del propietario de la tarjeta.");
  return;
}
if (numeroTarjeta === "" || !numeroTarjetaRegex.test(numeroTarjeta)) {
  console.log("Por favor, ingrese un número de tarjeta válido de 16 dígitos.");
  return;
}
if (fechaCaducidad === "" || !fechaCaducidadRegex.test(fechaCaducidad)) {
  console.log("Por favor, ingrese una fecha de caducidad válida en formato MM/AA.");
  return;
}
if (cvv === "" || !cvvRegex.test(cvv)) {
  console.log("Por favor, ingrese un CVV válido de 3 o 4 dígitos.");
  return;
}

  console.log("Nombre: " + nombre);
  console.log("Teléfono: " + telefono);
  console.log("Dirección: " + direccion);
  console.log("Correo electrónico: " + correo);
  console.log("Propietario: " + nombreTarjeta);
  console.log("Tipo de banco: " + tipoBanco);
  console.log("Número de tarjeta: " + numeroTarjeta);
  console.log("Fecha de caducidad: " + fechaCaducidad);
  console.log("CVV: " + cvv);
  
  
  formulario.submit();


};
