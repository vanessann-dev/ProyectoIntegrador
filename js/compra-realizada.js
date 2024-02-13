const orderId = sessionStorage.getItem("idOrden");
let ordenActual = null;
const consultarOrden = async() =>{
    const orden = await fetch("http://localhost:3000/ordenesCompra" +"/" + orderId);
    const respuesta = await orden.json();
    ordenActual = respuesta;
    console.log(ordenActual);
}

consultarOrden();

