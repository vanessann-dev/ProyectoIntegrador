import { productos } from "../modules/articulos.js";

//Entrega sprint 5
// Función para mostrar los detalles del producto

const idProducto = JSON.parse(localStorage.getItem("idProducto"));

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

    const tallas = document.getElementsByClassName("contBotonTallas");
    if (item.tipoDeAccesorio === "anillo") {
        let tallasAnillo = "";
        item.stock.forEach(talla => {
            tallasAnillo += talla.talla +" ";
        });
        tallas[0].innerHTML = tallasAnillo;
    } else {
        tallas[0].innerHTML = "";
    }
}

imprimirProducto(productoSeleccionado);


//botones de cantidad

const numeroCantidad = document.getElementById("numero");
// console.log(numeroCantidad)
let contador = 0;
numeroCantidad.textContent = contador;

const sumar = () => {
    contador++;
    numeroCantidad.textContent = contador;
    };

const restar = () => {
    if (contador > 0) {
    contador--;
    numeroCantidad.textContent = contador;
    }

    
};
document.getElementById("sumar").addEventListener("click", sumar);
document.getElementById("restar").addEventListener("click", restar);

//Agregar compra al carrito


