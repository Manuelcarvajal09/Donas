function crearParrafoTienda(textoLabel, valorMin) {
  //!Crear etiqueta parrafo
  let eleParrafo = document.createElement("p");
  //!Crear etiqueta label
  let eleLabel = document.createElement("label");
  eleLabel.innerText = textoLabel + ": ";
  //!Conectar con input
  eleLabel.setAttribute("for", textoLabel);
  //!Crear el input
  let eleInput = document.createElement("input");
  //!Establecer atributos de input
  eleInput.setAttribute("type", "number");
  eleInput.setAttribute("id", textoLabel);
  eleInput.setAttribute("min", valorMin);
  eleInput.setAttribute("value", 0);
  //!Agregar label del input al parrafo
  eleParrafo.appendChild(eleLabel);
  eleParrafo.appendChild(eleInput);
  eleInput.innerText;
  //!Regresar el parrafo final
  return eleParrafo;
}
function CrearTiendas(contenedorID, min, tiendas) {
  //!Encontrar contenedor
  let elementoContenedor = document.getElementById(contenedorID);
  //!Loop para crear las tiendas necesarias
  for (let conteoTiendas = 1; conteoTiendas <= tiendas; conteoTiendas++) {
    //Crear el texto label para llamar a la funcion
    let textoEtiqueta = "Tienda " + conteoTiendas;
    //Crear tiendas con crearParrafoTienda
    let parrafoTienda = crearParrafoTienda(textoEtiqueta, min);
    //Agregar al parrafo contenedor
    elementoContenedor.appendChild(parrafoTienda);
  }
}
function ExtraerElementos(elemento) {
  let miTexto = elemento.value;
  let miNumero = Number(miTexto);
  return miNumero;
}
function calcular() {
  let ventas = [];
  let posicionVentas = 0;
  let elementosVentas = document.getElementById("itemsTiendas");

  for (let item of elementosVentas.children) {
    let valorVenta = ExtraerElementos(item.children[1]);
    ventas[posicionVentas] = valorVenta;
    posicionVentas = posicionVentas + 1;
  }

  let totalVentas = sumarTotal(ventas);
  let ventaMayor = calcMayor(ventas);
  let ventaMenor = calcMenor(ventas);

  let mensajeSalida =
    "Total de ventas es: " +
    totalVentas +
    "/ Venta mayor: " +
    ventaMayor +
    "/ Venta menor: " +
    ventaMenor;

  let elementoSalida = document.getElementById("Salida");

  elementoSalida.textContent = mensajeSalida;
}
function sumarTotal(array) {
  let total = 0;

  for (let venta of array) {
    total += venta;
  }
  return total;
}
function calcMayor(array) {
  let maximo = array[0];

  for (let venta of array) {
    if (venta > maximo) {
      maximo = venta;
    }
  }
  return maximo;
}
function calcMenor(array) {
  let minimo = array[0];

  for (let venta of array) {
    if (venta < minimo) {
      minimo = venta;
    }
  }
  return minimo;
}
