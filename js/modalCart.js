const cartButton = document.getElementById("btnCart");
const modal = document.querySelector(".modalCart");
const closeButton = document.getElementById("closeModal");

const toggleModal = (button, modal) => {
    button.addEventListener("click", () => {
        modal.classList.toggle("hidden");
        modal.classList.toggle("show");

        const productosEnCarrito = JSON.parse(sessionStorage.getItem("productosEnCarrito"));
        const modalContent = document.querySelector(".contenedorCompras");
        modalContent.innerHTML = ""; // Limpiar el contenido existente

        // Verificar si hay productos en el carrito en el almacenamiento local
        
        if (productosEnCarrito && productosEnCarrito.length > 0) {
            productosEnCarrito.forEach(producto => {
                // Crear elementos HTML para mostrar los detalles de cada producto en el carrito
                const compra = document.createElement("div");
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
                const precio = document.createElement("p");
                precio.textContent = `$${producto.producto.precioUnitario}`;
                detalleDescri.appendChild(precio);
                detalleCompra.appendChild(detalleDescri);
                compra.appendChild(detalleCompra);
                const cantidad = document.createElement("div");
                cantidad.innerHTML = `<img src="../Assets/editar.png" alt="Editar" /><p>x${producto.cantidad}</p>`;
                compra.appendChild(cantidad);
                modalContent.appendChild(compra);
        
            });
        } else {
            // Si no hay productos en el carrito, muestra un mensaje en el modal
            const mensaje = document.createElement("p");
            mensaje.textContent = "El carrito está vacío.";
            modalContent.appendChild(mensaje);
        }
    });
}
toggleModal(cartButton, modal);
toggleModal(closeButton, modal);


//sumar el total de los prodcutos selelcionados en el carrito
function sumarPreciosProductos() {
    let total = 0;

    const productosEnCarrito = JSON.parse(sessionStorage.getItem("productosEnCarrito")) || [];

    productosEnCarrito.forEach(producto => {
        total += producto.producto.precioUnitario * producto.cantidad;
    });

    return total;
}

function mostrarTotalCompra(total) {
    const elementoTotal = document.getElementById("totalPrecio");
    if (elementoTotal) {
        elementoTotal.textContent = "$" + total.toFixed(2); // Formatear el total como moneda
    }
}

const totalPrecios = sumarPreciosProductos();
mostrarTotalCompra(totalPrecios);
