function crearParrafoTienda(textoLabel, valorMin) {
  //!Crear etiqueta parrafo
  let eleParrafo = document.createElement("p");
  //!Crear etiqueta label
  let eleLabel = document.createElement("label");
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
  }
}
function ExtraerElementos(elemento) {
  let miElemento = document.getElementById(elemento);
  let miTexto = miElemento.value;
  let miNumero = Number(miTexto);
  return miNumero;
}
function calcular() {
  let ventas = [];
  ventas[0] = ExtraerElementos("ventasTienda1");
  ventas[1] = ExtraerElementos("ventasTienda2");
  ventas[2] = ExtraerElementos("ventasTienda3");
  ventas[3] = ExtraerElementos("ventasTienda4");
  ventas[4] = ExtraerElementos("ventasTienda5");
  ventas[5] = ExtraerElementos("ventasTienda6");

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
