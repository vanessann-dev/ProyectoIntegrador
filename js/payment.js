const carritoDeCompras = JSON.parse(
  sessionStorage.getItem("productosEnCarrito")
);


const recibirForm = async (e) => {
  e.preventDefault();

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
  // Agrega más validaciones aquí...

  const compra = {
    nombre,
    telefono,
    direccion,
    correo,
    nombreTarjeta,
    tipoBanco,
    numeroTarjeta,
    fechaCaducidad,
    cvv,
    fechaCompra: new Date(),
    productosEnCarrito: carritoDeCompras, // Asegúrate de definir carritoDeCompras
  };

sessionStorage.setItem("compra", JSON.stringify(compra));
window.location.href = "../pages/compra-realizada.html"

}


//pintar el carrito de compras
const productosEnCarrito = JSON.parse(
  sessionStorage.getItem("productosEnCarrito")
);
const pago = document.querySelector(".cont-order-img");
pago.innerHTML = ""; // Limpiar el contenido existente

if (productosEnCarrito && productosEnCarrito.length > 0) {
  productosEnCarrito.forEach((producto) => {
    const compra = document.createElement("secttion");
    compra.classList.add("compras");

    const detalleCompra = document.createElement("div");
    detalleCompra.classList.add("comprasDetalle");

    const imagen = document.createElement("img");
    imagen.src = producto.producto.imagenes;
    imagen.alt = producto.producto.nombre;
    imagen.classList.add("imagenProductoCompra");
    detalleCompra.appendChild(imagen);

    const detalleDescri = document.createElement("div");
    detalleDescri.classList.add("comprasDetalleDescri");

    const titulo = document.createElement("h3");
    titulo.textContent = producto.producto.nombre;
    detalleDescri.appendChild(titulo);

    const codigo = document.createElement("p");
    codigo.innerHTML = `<p>Code: ${producto.producto.codigo}</p>`;
    detalleDescri.appendChild(codigo);

    const detallePrecio = document.createElement("div");
    detallePrecio.classList.add("comprasDetallePrecio");

    const precio = document.createElement("p");
    precio.textContent = `$${producto.producto.precioUnitario}`;
    detallePrecio.appendChild(precio);

    const imagenCaneca = document.createElement("img");
    imagenCaneca.src = "../Assets/caneca.png";
    imagenCaneca.alt = "dimension3";
    imagenCaneca.classList.add("imagenProductoCaneca");
    // detallePrecio.appendChild(imagenCaneca);

    detalleCompra.appendChild(detalleDescri);
    compra.appendChild(detalleCompra);
    compra.appendChild(detallePrecio);
    pago.appendChild(compra);
    detallePrecio.appendChild(imagenCaneca);
  });
} else {
  // Si no hay productos en el carrito, muestra un mensaje en el modal
  const mensaje = document.createElement("p");
  mensaje.textContent = "El carrito está vacío.";
  pago.appendChild(mensaje);
}

// calcular el total de la compra

function sumarPreciosProductos() {
  let total = 0;

  const productosEnCarrito =
    JSON.parse(sessionStorage.getItem("productosEnCarrito")) || [];

  productosEnCarrito.forEach((producto) => {
    total += producto.producto.precioUnitario * producto.cantidad;
  });
  // console.log(productosEnCarrito)
  return total;
}

function mostrarTotalCompra(total) {
  const elementoTotal = document.getElementById("totalCompra");
  if (elementoTotal) {
    elementoTotal.textContent = "$" + total.toFixed(2); // Formatear el total como moneda
  }
}

const totalCompra = sumarPreciosProductos();
mostrarTotalCompra(totalCompra);
