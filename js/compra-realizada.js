const compra = JSON.parse(sessionStorage.getItem("compra"));

// Verificar si la compra existe

const imprimirFactura = () => {
  const contenedorAImprimir = document.querySelector(".contenedorDatos");
  contenedorAImprimir.innerHTML = "";
const numeroOrden = generarNumeroOrden();
  const nuevoHtmlCompras = `
    <div class="linea">
      <div class="datos-compra">
        <div class="especificaciones-compra">
          <img src="../Assets/icono calendario.png" alt="icono-calendario" />
          <p>Date</p>
        </div>
        <div class="contenedor-parrafo">
          <p>${compra.fechaCompra}</p>
        </div>
      </div>
      <div class="datos-compra">
        <div class="especificaciones-compra">
          <img src="../Assets/icono perfil.png" alt="icono-perfil" />
          <p>Customer</p>
        </div>
        <div>
          <p class="contenedor-parrafo">
            <strong>${compra.nombre}</strong>
          </p>
        </div>
      </div>
      <div class="datos-compra">
        <div class="especificaciones-compra">
          <img src="../Assets/icono pago.png" alt="icono-pago" />
          <p>Payment Method</p>
        </div>
        <div class="contenedor-parrafo">
          <p>${compra.tipoBanco}</p>
        </div>
      </div>
    </div>
    <div class="linea">
      <div class="datos-compra">
        <div class="especificaciones-compra">
          <img src="../Assets/icono factura.png" alt="icono-factura" />
          <p>Order Number</p>
        </div>
        <div class="contenedor-parrafo">
          <p>${numeroOrden}</p> <!-- Asegúrate de tener la propiedad id en el objeto compra -->
        </div>
      </div>
      <div class="datos-compra">
        <div class="especificaciones-compra">
          <img src="../Assets/icono peso.png" alt="icono-peso" />
          <p>Total</p>
        </div>
        <div class="contenedor-parrafo">
          <p id="totalCompraFactura">$${compra.total}</p> <!-- Asegúrate de tener la propiedad total en el objeto compra -->
        </div>
      </div>
    </div>
  `;

  contenedorAImprimir.innerHTML = nuevoHtmlCompras;
};

function generarNumeroOrden() {
    const numeroOrden = Math.floor(Math.random() * 900000) + 100000;
    return numeroOrden;
  }

// Llamar a la función para imprimir la factura
imprimirFactura();

//pintar datos 
const contenedorProductos = document.getElementById("contenedorImagenesCompra");

const pintarCarritoCompras = () => {
  contenedorProductos.innerHTML = "";
  
  // Recuperar productos del sessionStorage
  const productosEnCarrito = JSON.parse(sessionStorage.getItem("productosEnCarrito"));
  
  if (!productosEnCarrito || productosEnCarrito.length === 0) {
    contenedorProductos.innerHTML = "<p>No hay productos en el carrito</p>";
    return;
  }

  productosEnCarrito.forEach((item) => {
    contenedorProductos.innerHTML += `
      <div class="detalle-producto">
        <div class="datos-compra-detalle-producto">
          <img class="imagenCompra"
            src="${item.producto.imagenes}"
            alt="${item.producto.nombre}"
          />
          <div class="especificaciones-compra-img">
            <h3>${item.producto.nombre}</h3>
            <p>${item.producto.codigo}</p>
            <button>x${item.cantidad}</button>
          </div>
        </div>
        <div class="contenedor-parrafo-img">
          <p><strong>$${item.producto.precioUnitario}</strong></p>
        </div>
      </div>
    `;
  });
};

// Llamar a la función para que pinte el carrito al cargar la página
pintarCarritoCompras();
 


//calcular el total de la compra
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
  const elementoTotal = document.getElementById("totalCompraFactura");
  if (elementoTotal) {
    elementoTotal.textContent = "$" + total.toFixed(2); // Formatear el total como moneda
  }
}

const totalComprasFactura = sumarPreciosProductos();
mostrarTotalCompra(totalComprasFactura);

const botonLimpiar = document.getElementById("botonLimpiar");

botonLimpiar.addEventListener("click", function() {
  sessionStorage.clear();
  window.location.href = "../pages/shop.html"
});
