//Entrega sprint 4

const tipoDeAccesorio = {
    collar: "collar",
    arete: "arete",
    brazalete: "brazalete",
    anillo: "anillo",

};
const productos = [
    {
        id: '001',
        nombre: "Radiance Necklace",
        codigo: 12345,
        precioUnitario: '168.76',
        tipoDeAccesorio: tipoDeAccesorio.collar,
        imagenes: "../Assets/image 1.png",
        descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        cantidadTotal: 20,
        stockPorColor: {
            plata: 10,
            dorado: 10,
        }
    },

    {
        id: '002',
        nombre: "Exquisite Earrings",
        codigo: 22345,
        precioUnitario: '125.28',
        tipoDeAccesorio: tipoDeAccesorio.arete,
        imagenes: "../Assets/Exquisite Earrings.png",
        descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        cantidadTotal: 23,
        stockPorColor: {
            plata: 12,
            dorado: 11,
        }
    },

    {
        id: '003',
        nombre: "Glamour Necklace",
        codigo: 32345,
        precioUnitario: '620.73',
        tipoDeAccesorio: tipoDeAccesorio.collar,
        imagenes: "../Assets/Image 1 (2).png",
        descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        cantidadTotal: 23,
        stockPorColor: {
            plata: 9,
            dorado: 14,
        }
    },

    {
        id: '004',
        nombre: "Luxury Gems Necklace",
        codigo: 42345,
        precioUnitario: '168.76',
        tipoDeAccesorio: tipoDeAccesorio.collar,
        imagenes: "../Assets/Luxury Gems Necklace.png",
        descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        cantidadTotal: 38,
        stockPorColor: {
            plata: 18,
            dorado: 20,
        }
    },

    {
        id: '005',
        nombre: "Aurora Ring",
        codigo: 52345,
        precioUnitario: '125.28',
        tipoDeAccesorio: tipoDeAccesorio.brazalete,
        imagenes: "../Assets/Aurora Ring.png",
        descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        cantidadTotal: 24,
        stockPorcolor: {
            plata: 16,
            dorado: 8,
        }
    },

    {
        id: '006',
        nombre: "Reflections Necklace",
        codigo: 62345,
        precioUnitario: '620.73',
        tipoDeAccesorio: tipoDeAccesorio.collar,
        imagenes: "../Assets/Reflections Necklace.png",
        descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        cantidadTotal: 22,
        stockPorColor: {
            plata: 12,
            dorado: 10,
        }
    },

    {
        id: '007',
        nombre: "Dreamy Infinity Ring",
        codigo: 72345,
        precioUnitario: '327.71',
        tipoDeAccesorio: tipoDeAccesorio.anillo,
        imagenes: "../Assets/Dreamy Infinity Ring.png",
        descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        cantidadTotal: 78,
        stockPorColor: {
            plata: 39,
            dorado: 39,
        },
        stock: [
        {
            talla: 48,
            cantidad: 5,
        },
        {
            talla: 50,
            cantidad: 8,
        },
        {
            talla: 52,
            cantidad: 6,
        },
        {
            talla: 54,
            cantidad: 3,
        },
        {
            talla: 56,
            cantidad: 8,
        },
        {
            talla: 58,
            cantidad: 5,
        },
        {
            talla: 60, 
            cantidad: 5,
        },
          
        {
            talla: 62, 
            cantidad: 2,
        },
          
        {
            talla: 64, 
            cantidad: 15,
        },
          
        {
            talla: 66, 
            cantidad: 7,
        },
          
        {
            talla: 68, 
            cantidad: 3,
        },
          
        {
            talla: 70, 
            cantidad: 11,
        },
          
            ]
    },

    {
        id: '008',
        nombre: "Opulent Jewels Ring",
        codigo: 82345,
        precioUnitario: '168.76',
        tipoDeAccesorio: tipoDeAccesorio.anillo,
        imagenes: "../Assets/Opulent Jewels Ring.png",
        descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        cantidadTotal: 92,
        stockPorColor: {
            plata: 45,
            dorado: 46,
        },
        stock: [
        {
            talla: 48,
            cantidad: 2,
        },
        {
            talla: 50,
            cantidad: 4,
        },
        {
            talla: 52,
            cantidad: 8,
        },
        {
            talla: 54,
            cantidad: 6,
        },
        {
            talla: 56,
            cantidad: 8,
        },
        {
            talla: 58,
            cantidad: 7,
        },
        {
            talla: 60, 
            cantidad: 8,
        },
              
        {
            talla: 62, 
            cantidad: 2,
        },
              
        {
            talla: 64, 
            cantidad: 15,
        },
              
        {
            talla: 66, 
            cantidad: 9,
        },
              
        {
            talla: 68, 
            cantidad: 5,
        },
              
        {
            talla: 70, 
            cantidad: 18,
        },
              
            ]
    },

    {
        id: '009',
        nombre: "Serene Solitaire Earrings",
        codigo: 92345,
        precioUnitario: '125.28',
        tipoDeAccesorio: tipoDeAccesorio.arete,
        imagenes: "../Assets/Serene Solitaire Earrings.png",
        descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        cantidadTotal: 21,
        stockPorColor: {
            plata: 10,
            dorado: 11,
        },
    },

    {
        id: '010',
        nombre: "Timeless Halo Earrings",
        codigo: 13345,
        precioUnitario: '620.73',
        tipoDeAccesorio: tipoDeAccesorio.arete,
        imagenes: "../Assets/Timeless Halo Earrings.png",
        descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        cantidadTotal: 29,
        stockPorColor: {
            plata: 19,
            dorado: 10,
        },
    },

    {
        id: '011',
        nombre: "Exquisite Earrings",
        codigo: 14345,
        precioUnitario: '327.71',
        tipoDeAccesorio: tipoDeAccesorio.arete,
        imagenes: "../Assets/Exquisite Earrings.png",
        descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        cantidadTotal: 17,
        stockPorColor: {
            plata: 12,
            dorado: 5,
        },
    },

    {
        id: '012',
        nombre: "Timeless Elegance Ring",
        codigo: 15345,
        precioUnitario: '168.76',
        tipoDeAccesorio: tipoDeAccesorio.anillo,
        imagenes: "../Assets/Timeless Elegance Ring.png",
        descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        cantidadTotal: 94,
        stockPorColor: {
            plata: 47,
            dorado: 47,
        },
        stock: [
            {
                talla: 48,
                cantidad: 9,
            },
            {
                talla: 50,
                cantidad: 6,
            },
            {
                talla: 52,
                cantidad: 7,
            },
            {
                talla: 54,
                cantidad: 3,
            },
            {
                talla: 56,
                cantidad: 11,
            },
            {
                talla: 58,
                cantidad: 12,
            },
            {
                talla: 60, 
                cantidad: 2,
            },
                  
            {
                talla: 62, 
                cantidad: 11,
            },
                  
            {
                talla: 64, 
                cantidad: 13,
            },
                  
            {
                talla: 66, 
                cantidad: 9,
            },
                  
            {
                talla: 68, 
                cantidad: 5,
            },
                  
            {
                talla: 70, 
                cantidad: 6,
            },
                  
                ]
    },

    {
        id: '013',
        nombre: "Luxury Charms Ring",
        codigo: 16345,
        precioUnitario: '620.73',
        tipoDeAccesorio: tipoDeAccesorio.anillo,
        imagenes: "../Assets/Luxury Charms Ring.png",
        descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        cantidadTotal: 95,
        stockPorColor: {
            plata: 47,
            dorado: 48,
        },
        stock: [
            {
                talla: 48,
                cantidad: 8,
            },
            {
                talla: 50,
                cantidad: 6,
            },
            {
                talla: 52,
                cantidad: 6,
            },
            {
                talla: 54,
                cantidad: 9,
            },
            {
                talla: 56,
                cantidad: 10,
            },
            {
                talla: 58,
                cantidad: 8,
            },
            {
                talla: 60, 
                cantidad: 11,
            },
                  
            {
                talla: 62, 
                cantidad: 2,
            },
                  
            {
                talla: 64, 
                cantidad: 15,
            },
                  
            {
                talla: 66, 
                cantidad: 7,
            },
                  
            {
                talla: 68, 
                cantidad: 3,
            },
                  
            {
                talla: 70, 
                cantidad: 10,
            },
                  
                ]
    },

    {
        id: '014',
        nombre: "Blissful Bloom Rings",
        codigo: 17345,
        precioUnitario: '620.73',
        tipoDeAccesorio: tipoDeAccesorio.anillo,
        imagenes: "../Assets/Blissful Bloom Ring.png",
        descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        cantidadTotal: 110,
        stockPorColor: {
            plata: 55,
            dorado: 55,
        },
        stock: [
            {
                talla: 48,
                cantidad: 8,
            },
            {
                talla: 50,
                cantidad: 8,
            },
            {
                talla: 52,
                cantidad: 6,
            },
            {
                talla: 54,
                cantidad: 2,
            },
            {
                talla: 56,
                cantidad: 8,
            },
            {
                talla: 58,
                cantidad: 13,
            },
            {
                talla: 60, 
                cantidad: 5,
            },
                  
            {
                talla: 62, 
                cantidad: 20,
            },
                  
            {
                talla: 64, 
                cantidad: 14,
            },
                  
            {
                talla: 66, 
                cantidad: 7,
            },
                  
            {
                talla: 68, 
                cantidad: 8,
            },
                  
            {
                talla: 70, 
                cantidad: 11,
            },
                  
                ]
    },

    {
        id: '015',
        nombre: "Sparkling Ring ",
        codigo: 18345,
        precioUnitario: '620.73',
        tipoDeAccesorio: tipoDeAccesorio.anillo,
        imagenes: "../Assets/Sparkling Ring.png",
        descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        cantidadTotal: 105,
        stockPorColor: {
            plata: 52,
            dorado: 53,
        },
        stock: [
            {
                talla: 48,
                cantidad: 8,
            },
            {
                talla: 50,
                cantidad: 8,
            },
            {
                talla: 52,
                cantidad: 6,
            },
            {
                talla: 54,
                cantidad: 12,
            },
            {
                talla: 56,
                cantidad: 9,
            },
            {
                talla: 58,
                cantidad: 10,
            },
            {
                talla: 60, 
                cantidad: 5,
            },
                  
            {
                talla: 62, 
                cantidad: 2,
            },
                  
            {
                talla: 64, 
                cantidad: 15,
            },
                  
            {
                talla: 66, 
                cantidad: 7,
            },
                  
            {
                talla: 68, 
                cantidad: 13,
            },
                  
            {
                talla: 70, 
                cantidad: 10,
            },
                  
                ]
    },

    {
        id: '016',
        nombre: "Glimmering Ring",
        codigo: 19345,
        precioUnitario: '620.73',
        tipoDeAccesorio: tipoDeAccesorio.anillo,
        imagenes: "../Assets/Glimmering Ring.png",
        descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        cantidadTotal: 90,
        stockPorColor: {
            plata: 40,
            dorado: 50,
        },
        stock: [
            {
                talla: 48,
                cantidad: 8,
            },
            {
                talla: 50,
                cantidad: 12,
            },
            {
                talla: 52,
                cantidad: 10,
            },
            {
                talla: 54,
                cantidad: 3,
            },
            {
                talla: 56,
                cantidad: 9,
            },
            {
                talla: 58,
                cantidad: 3,
            },
            {
                talla: 60, 
                cantidad: 5,
            },
                  
            {
                talla: 62, 
                cantidad: 2,
            },
                  
            {
                talla: 64, 
                cantidad: 15,
            },
                  
            {
                talla: 66, 
                cantidad: 7,
            },
                  
            {
                talla: 68, 
                cantidad: 5,
            },
                  
            {
                talla: 70, 
                cantidad: 11,
            },
                  
                ]
    },

    {
        id: '017',
        nombre: "Delights Earrings",
        codigo: 19345,
        precioUnitario: '327.71',
        tipoDeAccesorio: tipoDeAccesorio.arete,
        imagenes: "../Assets/delights.png",
        descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        cantidadTotal: 12,
        stockPorColor: {
            plata: 10,
            dorado: 2,
        }
    }

];

// // const primerProducto = productos[0];
// // console.log("Nombre del primer producto:", primerProducto.nombre);
// // console.log("Precio del primer producto:", primerProducto.precioUnitario);
// // console.log("Stock de plata del primer producto:", primerProducto.stockPorColor.plata);

// //segundo punto
// //Escribir una función que reciba como parámetros un array 
// //de productos y el nombre de un tipo de producto, que 
// //utilice la función de array que permita filtrar la lista por la
// //categoría o tipo y devuelva el array resultante. Luego, llamar la función pasándole como
// //argumentos la lista de productos declarado en el ítem 
// //anterior y cualquier tipo de accesorio que exista en 
// //la lista y, por último, mostrar el resultado en la consola del navegador.

// //filtrando por collar

// const filtrarProductoCollar = (productos, tipoDeAccesorio) => {
//     const productosFiltrados = productos.filter(productos => productos.tipoDeAccesorio === tipoDeAccesorio)
//     console.log("Lista de productos actualizado", productosFiltrados)
// }

// // document.getElementById('probandoCollar').onclick = function() {
// //     filtrarProductoCollar(productos, "collar");
// //   };

//   // filtrando por anillo

//   const filtrarProductoAnillo = (productos, tipoDeAccesorio) => {
//     const productosFiltrados = productos.filter(productos => productos.tipoDeAccesorio === tipoDeAccesorio)
//     console.log("Lista de productos actualizado", productosFiltrados)
// }

// // document.getElementById('probandoAnillo').onclick = function() {
// //     filtrarProductoAnillo(productos, "anillo");
// //   };

// // filtrando por brazalete

// const filtrarProductoBrazelate = (productos, tipoDeAccesorio) => {
//     const productosFiltrados = productos.filter(productos => productos.tipoDeAccesorio === tipoDeAccesorio)
//     console.log("Lista de productos actualizado", productosFiltrados)
// }

// // document.getElementById('probandoBrazalete').onclick = function() {
// //     filtrarProductoBrazalete(productos, "brazalete");
// //   };

//   //filtrando por arete

//   const filtrarProductoArete = (productos, tipoDeAccesorio) => {
//     const productosFiltrados = productos.filter(productos => productos.tipoDeAccesorio === tipoDeAccesorio)
//     console.log("Lista de productos actualizado", productosFiltrados)
// }

// // document.getElementById('probandoArete').onclick = function() {
// //     filtrarProductoArete(productos, "arete");
// //   }

// //tercer punto
// //Escribir una función que realice la búsqueda de productos 
// //por nombre, reciba como parámetro un array de productos y 
// //un término de búsqueda (es decir, una cadena de caracteres)
// //y retorne un array con todos los productos cuyos nombres 
// //contengan los caracteres del segundo parámetro. Luego, 
// //llamar la función pasándole como argumentos datos de 
// //prueba y mostrar el resultado en la consola del navegador.

// const busquedaProductoPorNombre = (productos, termino) => {
//     return productos.filter(producto => producto.nombre.toLowerCase().includes(termino.toLowerCase()));
// }
 
//  const productoEncontrado = busquedaProductoPorNombre(productos, "RING");
//     console.log(productoEncontrado)


// //cuarto punto
// //Crear una función que ordene un array de productos por 
// //precios de manera ascendente y descendente y retorne el 
// //array resultante. Ejecutar la función y mostrar el 
// //resultado en consola.

// const ordenarProductosPorPrecio =(productos, orden) =>{
//     const copiaProductos = [...productos];

//     if (orden === "ascendente") {
//         copiaProductos.sort((a, b) => a.precioUnitario - b.precioUnitario);   
//     } else if (orden ==="descendente"){
//         copiaProductos.sort((a, b) => b.precioUnitario - a.precioUnitario);

//     } else {
//         console.log("Error: El parámetro 'orden' debe ser 'ascendente' o 'descendente'");

//     }

//     return copiaProductos; 
// }

// // Llamar a la función para ordenar productos de manera ascendente
// const productosAscendente = ordenarProductosPorPrecio(productos, "ascendente");
// console.log("Productos ordenados de manera ascendente:", productosAscendente);

// // Llamar a la función para ordenar productos de manera descendente
// const productosDescendente = ordenarProductosPorPrecio(productos, "descendente");
// console.log("Productos ordenados de manera descendente:", productosDescendente);


// //Quinto punto
// //Crear una función que calcule el total a pagar de una 
// //compra, reciba como parámetros un array de productos 
// //donde cada producto, tenga como propiedades la cantidad 
// //y precio unitario del producto y devuelva el valor que 
// //corresponda a la sumatoria de la cantidad por el precio 
// //de cada producto. Ejecutar la función con datos de prueba y
// //mostrar el resultado en la consola del navegador.

// //prueba 1
// const productosCompra = [
//     {
//         cantidad: 2,
//         precioUnitario: 168.76,
//     },
//     {
//         cantidad: 3,
//         precioUnitario: 620.18,
//     },
//     {
//         cantidad: 1,
//         precioUnitario: 128.25,
//     },
// ]

// const totalAPagar = (productos) => {
//     const totalCompra = Number(productos.reduce((total, producto) => {
//         return total + (producto.cantidad * producto.precioUnitario);
//     }, 0));

//     return totalCompra;
// }

// const totalPagar = totalAPagar(productosCompra);
// console.log("Total a pagar:", totalPagar);



//Entrega cuarto sprint

const listarProductos = () => {
    const contenedor = document.getElementById("listaProductos")
    // console.log(contenedor)
    let nuevoHtml = ""
    productos.forEach(item => {
        nuevoHtml += `<div class="target1">
        <img
          src="${item.imagenes}"
          alt="${item.nombre}"
        />
        <h2>${item.nombre}</h2>
        <p> ${item.precioUnitario}</p>
      </div>`
    });
    contenedor.innerHTML = nuevoHtml
}
listarProductos()









// buscar producto por nombre

const filtroPorNombre = document.getElementById("filtroPorNombre");

const handlesearch = () => {
    const busquedatermino = filtroPorNombre.value.toLowerCase();
    const elementosFiltrados = productos.filter((item) => item.nombre.toLocaleLowerCase().startsWith(busquedatermino));

//     resultadofiltro.innerHTML = `<div class="target1">
//     <img
//       src="${item.imagenes}"
//       alt="${item.nombre}"
//     />
//     <h2>${item.nombre}</h2>
//     <p> ${item.precioUnitario}</p>
//   </div>`;

    
};

filtroPorNombre.addEventListener("input", handlesearch);

// console.log(resultadofiltro)


    
// filtrar por categoria --BOTONES--

//filtrar por todo


const printProductos = (productos, contenedor) => {
    let almacenador = "";
   productos.forEach(item => {
    almacenador += `<div class="target1">
    <img
      src="${item.imagenes}"
      alt="${item.nombre}"
    />
    <h2>${item.nombre}</h2>
    <p> ${item.precioUnitario}</p>
  </div>`;
   })
   
   contenedor.innerHTML = almacenador
}
const listaProductos = document.getElementById("listaProductos")

const bTodo = document.getElementById("todo");
const bAnillo = document.getElementById("anillo");
const bBrazalete = document.getElementById("brazalete");
const bCollar = document.getElementById("collar");
const bAretes = document.getElementById("arete");

//Filtrado

const bFiltrado = [bTodo, bAnillo, bBrazalete, bCollar, bAretes];

bFiltrado.forEach(button => {
    button.addEventListener("click", (event) => {


        let productosFiltrados = [];

        if (button.id === "todo") {
            productosFiltrados = productos;
        }
        else {
            productosFiltrados = productos.filter(
                (Producto) => Producto.tipoDeAccesorio === button.id);
        };

        const todosLosProductos = document.getElementById("listaProductos");
        printProductos(productosFiltrados, todosLosProductos);

        console.log(productosFiltrados)
    });
});


const filtrarTodosLosProductos = (productos, tipoDeAccesorio) => {
    const productosFiltrados = productos.filter(productos => productos.tipoDeAccesorio === tipoDeAccesorio)
    console.log("Lista de productos actualizado", productosFiltrados)
}

// document.getElementById('filtroTodo').onClick = function() {
//     filtrarTodosLosProductos(productoFiltrado);
//   };


//filtrando por collar

const filtrarProductoCollar1 = (productos, tipoDeAccesorio) => {
    const productosFiltrados = productos.filter(productos => productos.tipoDeAccesorio === tipoDeAccesorio)
    console.log("Lista de productos actualizado", productosFiltrados)
}

// document.getElementById('filtroCollar').onclick = function() {
//     filtrarProductoCollar(productos, "collar");
//   };

  // filtrando por anillo

  const filtrarProductoAnillo1 = (productos, tipoDeAccesorio) => {
    const productosFiltrados = productos.filter(productos => productos.tipoDeAccesorio === tipoDeAccesorio)
    console.log("Lista de productos actualizado", productosFiltrados)
}

// document.getElementById('filtroAnillo').onclick = function() {
//     filtrarProductoAnillo(productos, "anillo");
//   };

// filtrando por brazalete

const filtrarProductoBrazelate1 = (productos, tipoDeAccesorio) => {
    const productosFiltrados = productos.filter(productos => productos.tipoDeAccesorio === tipoDeAccesorio)
    console.log("Lista de productos actualizado", productosFiltrados)
}


// document.getElementById('filtroBrazalete').onclick = function() {
//     filtrarProductoBrazelate1(productos, "brazalete");
//   };

  //filtrando por arete

  const filtrarProductoArete1 = (productos, tipoDeAccesorio) => {
    const productosFiltrados = productos.filter(productos => productos.tipoDeAccesorio === tipoDeAccesorio)
    console.log("Lista de productos actualizado", productosFiltrados)
}

// document.getElementById('filtroArete').onclick = function() {
//     filtrarProductoArete1(productos, "arete");
//   }









  // Función para filtrar la ropa según la opción seleccionada
  function filtrarPorPrecio() {
    const selector = document.getElementById("precioSelector");
    const opcionSeleccionada = selector.value;
    let precioFiltrado = [];
  
    switch (opcionSeleccionada) {
      case "mayorAMenor":
        precioFiltrado = productos.sort((a, b) => b.precioUnitario - a.precioUnitario);
        break;
      case "menorAMayor":
        precioFiltrado = productos.sort((a, b) => a.precioUnitario - b.precioUnitario);
        break;
      case "0-50":
        precioFiltrado = productos.filter(item => item.precioUnitario < 50);
        break;
      case "50-100":
        precioFiltrado = productos.filter(item => item.precioUnitario >= 50 && item.precioUnitario <= 100);
        break;
      case "100-200":
        precioFiltrado = productos.filter(item => item.precioUnitario > 100 && item.precioUnitario <= 200);
        break;
    }
    const contenedor = document.getElementById("listaProductos")
    printProductos(precioFiltrado,contenedor)

    mostrarResultadosEnConsola(precioFiltrado);
  }
  
  
  // esto muestra los resultados en consola, si no hay ropa o no hay ropa del precio filtrado, entonces
  //muestra en consola que no hay
  function mostrarResultadosEnConsola(resultados) {
    if (resultados.length === 0) {
      console.log("No hay resultados para la opción seleccionada.");
    } else {//en esta zona, por cada prenda de ropa encontrada de la opcion seleccionada, la imprime en consola
      resultados.forEach(item => {
        console.log(`${item.nombre}: $${item.precioUnitario}`);
      });
    }
  }
  
  // aca obtiene la id del selectior, "change" indica que al cambiar algo en el selector
  //se llama a la funcion de filtrado
  document.getElementById("precioSelector").addEventListener("change", filtrarPorPrecio);