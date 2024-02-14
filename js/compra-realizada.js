const orderId = sessionStorage.getItem("idOrden");
let ordenActual = null;


const consultarOrden = async() =>{
    const orden = await fetch("http://localhost:3000/ordenesCompra" +"/" + orderId);
    const respuesta = await orden.json();
    ordenActual = respuesta;
    console.log(ordenActual);
}

consultarOrden();




// const orderId = sessionStorage.getItem("idOrden");
// let ordenActual = null;

// const consultarOrden = async () => {
//   try {
//     const response = await fetch("http://localhost:3000/ordenesCompra" + "/" + orderId);
//     const orden = await response.json();
//     ordenActual = orden;
//     console.log(ordenActual);

//     // Mostrar los detalles de la orden en la interfaz de usuario
//     mostrarDetallesOrden(ordenActual);
//   } catch (error) {
//     console.error('Error al consultar la orden:', error);
//   }
// };

// const mostrarDetallesOrden = (orden) => {
//   // Aquí puedes escribir la lógica para mostrar los detalles de la orden en tu interfaz de usuario
//   // Por ejemplo, actualizar los elementos HTML con los datos de la orden
//   const dateElement = document.getElementById("date");
//   const customerElement = document.getElementById("contenedor-parrafo");
//   const paymentMethodElement = document.getElementById("paymentMethod");
//   const orderNumberElement = document.getElementById("orderNumber");
//   const totalElement = document.getElementById("total");

//   if (dateElement) {
//     dateElement.textContent = orden.fechaCompra; // Asegúrate de que el nombre de la propiedad sea correcto en tu objeto de orden
//   }
//   if (customerElement) {
//     customerElement.textContent = orden.nombre; // Asegúrate de que el nombre de la propiedad sea correcto en tu objeto de orden
//   }
//   if (paymentMethodElement) {
//     paymentMethodElement.textContent = orden.tipoBanco; // Asegúrate de que el nombre de la propiedad sea correcto en tu objeto de orden
//   }
//   if (orderNumberElement) {
//     orderNumberElement.textContent = orderId;
//   }
//   if (totalElement) {
//     // Aquí puedes calcular el total de la orden en función de los productos en el carrito
//     // y luego actualizar el elemento HTML correspondiente
//   }

//   // Mostrar los detalles de los productos asociados a la orden
//   const productosEnCarrito = orden.productosEnCarrito;
//   const productosContainer = document.getElementById("productosContainer");

//   if (productosEnCarrito && productosContainer) {
//     productosEnCarrito.forEach(producto => {
//       const productoElement = document.createElement("div");
//       productoElement.classList.add("detalle-producto");

//       const productoDetalleElement = document.createElement("div");
//       productoDetalleElement.classList.add("datos-compra-detalle-producto");

//       const imagenElement = document.createElement("img");
//       imagenElement.src = `../Assets/${producto.producto.nombre}.png`; // Asegúrate de que la ruta de la imagen sea correcta
//       imagenElement.alt = producto.producto.nombre; // Asegúrate de que el nombre de la propiedad sea correcto en tu objeto de producto

//       const especificacionesElement = document.createElement("div");
//       especificacionesElement.classList.add("especificaciones-compra-img");

//       const nombreElement = document.createElement("h3");
//       nombreElement.textContent = producto.producto.nombre; // Asegúrate de que el nombre de la propiedad sea correcto en tu objeto de producto

//       const codigoElement = document.createElement("p");
//       codigoElement.textContent = `Code: ${producto.producto.codigo}`; // Asegúrate de que el nombre de la propiedad sea correcto en tu objeto de producto

//       const precioElement = document.createElement("p");
//       precioElement.textContent = `$${producto.producto.precioUnitario}`; // Asegúrate de que el nombre de la propiedad sea correcto en tu objeto de producto

//       const cantidadElement = document.createElement("button");
//       cantidadElement.textContent = `x${producto.cantidad}`;

//       productoDetalleElement.appendChild(imagenElement);
//       especificacionesElement.appendChild(nombreElement);
//       especificacionesElement.appendChild(codigoElement);
//       especificacionesElement.appendChild(cantidadElement);
//       productoDetalleElement.appendChild(especificacionesElement);
//       productoElement.appendChild(productoDetalleElement);

//       const precioContainer = document.createElement("div");
//       precioContainer.classList.add("contenedor-parrafo-img");

//       const precioStrong = document.createElement("p");
//       precioStrong.innerHTML = `<strong>${precioElement.textContent}</strong>`;

//       precioContainer.appendChild(precioStrong);
//       productoElement.appendChild(precioContainer);

//       productosContainer.appendChild(productoElement);
//     });
//   }
// };

// consultarOrden();













// const consultarOrden = async() =>{
//     const orden = await fetch("http://localhost:3000/ordenesCompra" +"/" + orderId);
//     const respuesta = await orden.json();
//     ordenActual = respuesta;
//     console.log(ordenActual);
// }

// consultarOrden();

