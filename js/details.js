import { productos, tipoDeAccesorio } from "../modules/articulos.js";

//Entrega sprint 5
// Función para mostrar los detalles del producto

const idProducto = JSON.parse(localStorage.getItem("idProducto"));
const productoACarrito = {
    idProducto: idProducto
}
const productoSeleccionado = productos.find(item => item.id == idProducto);
console.log(productoSeleccionado);

const imprimirProducto = (item) => {
    const imagenes = document.getElementsByClassName("imgProducto");
    console.log(imagenes)
    for(let i=0; i< imagenes.length; i++){
        imagenes[i].src= item.imagenes
    }

    const titulo = document.getElementsByClassName("tituloLux");
    titulo[0].innerHTML = item.nombre

    const code = document.getElementsByClassName("subCode");
    code[0].innerHTML = item.codigo

    const precioUnitario = document.getElementsByClassName("precioLux");
    precioUnitario[0].innerHTML = item.precioUnitario
   
    const tituloDescripcion = document.getElementsByClassName("tituloLuxD");
    tituloDescripcion[0].innerHTML = item.nombre

    const subMenu = document.getElementsByClassName("subMenuTitulo");
    subMenu[0].innerHTML = item.nombre

    const textoDescripcion = document.getElementsByClassName("txtDesc");
    textoDescripcion[0].innerHTML = item.descripcion

    const size = document.querySelector(".subtitulosLux");
    if (item.tipoDeAccesorio === "anillo") {
        // console.log(item.tipoDeAccesorio)
    size.innerHTML = "Size";
    } else {
    size.innerHTML = "";
}


const tallas = document.querySelector(".contBotonTallas");
if (item.tipoDeAccesorio === "anillo") {
    const tallasUnicas = new Set(item.stock.map(talla => talla.talla));

    let tallasAnillo = "";
    tallasUnicas.forEach(talla => {
        tallasAnillo += `<button class="botonesTallas">${talla}</button>`;
    });
    tallas.innerHTML = tallasAnillo;

    const botonesTalla = document.querySelectorAll(".botonesTallas");

    botonesTalla.forEach(boton => {
        boton.addEventListener("click", () => {
            const tallaSeleccionada = boton.textContent;
            console.log("Talla seleccionada:", tallaSeleccionada);

            botonesTalla.forEach(botonTalla => {
                botonTalla.classList.remove("seleccionada");
            });
            boton.classList.add("seleccionada");

        });
    });
}
}
imprimirProducto(productoSeleccionado);


//botones de cantidad

const numeroCantidad = document.getElementById("numero");
// console.log(numeroCantidad)
let contador = 0;
numeroCantidad.innerText = contador;

const sumar = () => {
    contador++;
    numeroCantidad.innerText = contador;
    productoACarrito.cantidad = contador;
    };

const restar = () => {
    if (contador > 1) {
    contador--;
    numeroCantidad.innerText = contador;
    productoACarrito.cantidad = contador;
    }  
};

document.getElementById("sumar").addEventListener("click", sumar);
document.getElementById("restar").addEventListener("click", restar);



//Agregar el color deseado

const colores = document.querySelectorAll('.color');

function seleccionarColor(event) {
    // Eliminar la clase 'seleccionado' de todos los elementos con la clase 'color'
    colores.forEach(color => {
        color.classList.remove('seleccionado');
    });
    event.target.classList.add('seleccionado');

    const colorSeleccionado = event.target.getAttribute('data-color');

    const productoSeleccionado = productos.find(producto => producto.stockPorColor.hasOwnProperty(colorSeleccionado));

    if (productoSeleccionado) {
        const stockDisponible = productoSeleccionado.stockPorColor[colorSeleccionado];
        console.log(`Stock disponible para ${colorSeleccionado}: ${stockDisponible}`);
        productoACarrito.color = colorSeleccionado
        // localStorage.setItem('colorSeleccionado', colorSeleccionado);
    } else {
        console.log(`No hay stock disponible para ${colorSeleccionado}`);
    }
}

colores.forEach(color => {
    color.addEventListener('click', seleccionarColor);
});



//validaciones color,talla,cantidad
//Guardar producto a comprar en el local storage

document.addEventListener("DOMContentLoaded", function() {
    const botonAgregarCompra = document.getElementById("botonAgregarCompra");
    botonAgregarCompra.addEventListener("click", function() {
        agregarProductoAlCarrito(productoSeleccionado);
    });
    const buyButton = document.getElementById("buyButton");
    buyButton.addEventListener("click", function() {
        agregarProductoAlCarrito(productoSeleccionado);
    });
});



//pintar compras en carrito

function agregarProductoAlCarrito(productoSeleccionado) {
    // Obtener la cantidad ingresada por el usuario
    const cantidad = parseInt(numeroCantidad.textContent);

    // Verificar si se ha seleccionado un color
    const colorSeleccionado = document.querySelector('.color.seleccionado');
    if (!colorSeleccionado) {
        alert("Por favor, selecciona un color antes de agregar el producto al carrito")
        return; // Salir de la función si no se ha seleccionado un color
    }

    const color = colorSeleccionado.dataset.color;

    let talla = null;
    if (productoSeleccionado.tipoDeAccesorio ==="anillo") {
    const tallaElegida = document.querySelector(".botonesTallas.seleccionada");
            if (!tallaElegida) {
                alert("Por favor, selecciona una talla antes de agregar el producto al carrito");
                return;
            }
            talla = tallaElegida.textContent;
        }

        
    // Verificar si se ha ingresado una cantidad válida (mayor que cero)
    if (cantidad <= 0) {
        alert("Por favor, ingresa al menos una cantidad antes de agregar el producto al carrito");
        return; // Salir de la función si la cantidad es cero o negativa
    }

    let productoEnCarrito = {
        producto: productoSeleccionado,
        cantidad: cantidad,
        color: color,
        talla: talla
    };

    // Si todas las validaciones pasan, el producto se puede agregar al carrito
    let productosEnCarrito = JSON.parse(sessionStorage.getItem("productosEnCarrito")) || [];
    productosEnCarrito.push(productoEnCarrito);
    sessionStorage.setItem("productosEnCarrito", JSON.stringify(productosEnCarrito));
    
    alert("Producto agregado al carrito");
}
