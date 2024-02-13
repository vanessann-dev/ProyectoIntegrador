import { productos } from "../modules/articulos.js";

//Entrega sprint 4

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

const nombreProducto = (productos, contenedor) => {
    let contenido = "";
   productos.forEach(item => {
    contenido += `<div class="target1">
    <img
      src="${item.imagenes}"
      alt="${item.nombre}"
    />
    <h2>${item.nombre}</h2>
    <p> ${item.precioUnitario}</p>
  </div>`;
   });
   
   contenedor.innerHTML = contenido;
};
const listProductos = document.getElementById("listaProductos");

nombreProducto(productos, listProductos);

const filtroNombre = document.getElementById("filtroPorNombre");

filtroNombre.addEventListener("input", (event) => {
    const termino = event.target.value;

    const productosFiltrados = busquedaProductoPorNombre(productos, termino);
    nombreProducto(productosFiltrados, listProductos);
});
const busquedaProductoPorNombre = (productos, termino) => {
    return productos.filter(producto => producto.nombre.toLowerCase().includes(termino.toLowerCase()));
  };
  
  

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



  // Función para filtrar la joya según la opción seleccionada
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
      case "0-100":
        precioFiltrado = productos.filter(item => item.precioUnitario < 100);
        break;
      case "100-300":
        precioFiltrado = productos.filter(item => item.precioUnitario >= 100 && item.precioUnitario <= 300);
        break;
      case "300-700":
        precioFiltrado = productos.filter(item => item.precioUnitario > 300 && item.precioUnitario <= 700);
        break;
    }
    const contenedor = document.getElementById("listaProductos")
    printProductos(precioFiltrado,contenedor)

    mostrarResultadosEnConsola(precioFiltrado);
  }
  
  
  // esto muestra los resultados en consola, si no hay joya o no hay joya del precio filtrado, entonces
  //muestra en consola que no hay
  function mostrarResultadosEnConsola(resultados) {
    if (resultados.length === 0) {
      console.log("No hay resultados para la opción seleccionada.");
    } else {//en esta zona, por cada joya encontrada de la opcion seleccionada, la imprime en consola
      resultados.forEach(item => {
        console.log(`${item.nombre}: $${item.precioUnitario}`);
      });
    }
  }
  
  // aca obtiene la id del selectior, "change" indica que al cambiar algo en el selector
  //se llama a la funcion de filtrado
  document.getElementById("precioSelector").addEventListener("change", filtrarPorPrecio);



//mostrar descripcion del producto

const descripcionProducto = (productos, contenedor) => {
    let contenidos = "";
    productos.forEach(item => {
        contenidos += `<div class="target1" name="${item.id}">
            <img src="${item.imagenes}" alt="${item.nombre}" />
            <h2>${item.nombre}</h2>
            <p>${item.precioUnitario}</p>
        </div>`;
    });
   
    contenedor.innerHTML = contenidos;

    irDetalleProducto();
};

const irDetalleProducto = () => {
    const targets = document.querySelectorAll(".target1");
    targets.forEach((target) =>{
        target.addEventListener("click", () => {
            console.log(target.getAttribute("name"));
            const idProducto = target.getAttribute("name"); 
            localStorage.setItem("idProducto", JSON.stringify(idProducto));
            location.href = "../pages/details.html";
        });
    });
};

descripcionProducto(productos, document.getElementById("listaProductos"));
irDetalleProducto();


