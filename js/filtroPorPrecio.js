
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
    const contenedor = document.getElementById("todosLosProductos")
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