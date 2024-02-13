const productosEnCarrito = JSON.parse(sessionStorage.getItem("productosEnCarrito"));
const pago = document.querySelector(".cont-order-img");
        pago.innerHTML = ""; // Limpiar el contenido existente

        if (productosEnCarrito && productosEnCarrito.length > 0) {
            productosEnCarrito.forEach(producto => {
                
                const compra = document.createElement("secttion");
                compra.classList.add("compras");

                const detalleCompra = document.createElement("div");
                detalleCompra.classList.add("comprasDetalle");




                // const imagenes = document.getElementsByClassName("imgCompra");
                // console.log(imagenes)
                // for(let i=0; i< imagenes.length; i++){
                // imagenes[i].src= producto.producto.imagenes
                // }




                const imagen = document.createElement("img");
                imagen.src = producto.producto.imagenes; // Corregido aquí
                imagen.alt = producto.producto.nombre; // Corregido aquí
                imagen.classList.add("imagenProductoCompra");
                detalleCompra.appendChild(imagen);

                const detalleDescri = document.createElement("div");
                detalleDescri.classList.add("comprasDetalleDescri");


                
                // const titulo = document.getElementsByClassName("tituloCompra");
                // titulo[0].innerHTML = producto.producto.nombre
                const titulo = document.createElement("h3");
                titulo.textContent = producto.producto.nombre; // Corregido aquí
                detalleDescri.appendChild(titulo);


                
                
                
                // const codigo = document.getElementsByClassName("codigoCompra");
                // codigo[0].innerHTML = producto.producto.codigo
                const codigo = document.createElement("p");
                codigo.innerHTML = `<p>Code: ${producto.producto.codigo}</p>`; // Corregido aquí
                detalleDescri.appendChild(codigo);
                

                // const precio = document.getElementsByClassName("propSummary");
                // precio[0].innerHTML = producto.producto.precioUnitario
                const precio = document.createElement("p");
                precio.textContent = `$${producto.producto.precioUnitario}`; // Corregido aquí
                detalleDescri.appendChild(precio);



                detalleCompra.appendChild(detalleDescri);
                compra.appendChild(detalleCompra);
                pago.appendChild(compra);
            });
        } else {
            // Si no hay productos en el carrito, muestra un mensaje en el modal
            const mensaje = document.createElement("p");
            mensaje.textContent = "El carrito está vacío.";
            pago.appendChild(mensaje);
        };