function ExtraerElementos(elemento){
    let miElemento=document.getElementById(elemento);
    let miTexto=miElemento.value;
    let miNumero=Number(miTexto);

    return miNumero;
}

function calcular(){
    let ventas1, ventas2, ventas3, ventas4, ventas5, ventas6;
    ventas1=ExtraerElementos("ventasTienda1");
    ventas2=ExtraerElementos("ventasTienda2");
    ventas3=ExtraerElementos("ventasTienda3");
    ventas4=ExtraerElementos("ventasTienda4");
    ventas5=ExtraerElementos("ventasTienda5");
    ventas6=ExtraerElementos("ventasTienda6");

    let totalVentas=ventas1+ventas2+ventas3+ventas4+ventas5+ventas6;
    let mensajeSalida="Total de ventas es: "+totalVentas;
    let elementoSalida=document.getElementById("Salida");

    elementoSalida.textContent=mensajeSalida;

}