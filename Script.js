function ExtraerElementos(elemento){
    let miElemento=document.getElementById(elemento);
    let miTexto=miElemento.value;
    let miNumero=Number(miTexto);
    return miNumero;
}

function calcular(){
    let ventas=[];
    ventas[0]=ExtraerElementos("ventasTienda1");
    ventas[1]=ExtraerElementos("ventasTienda2");
    ventas[2]=ExtraerElementos("ventasTienda3");
    ventas[3]=ExtraerElementos("ventasTienda4");
    ventas[4]=ExtraerElementos("ventasTienda5");
    ventas[5]=ExtraerElementos("ventasTienda6");

    let totalVentas=sumarTotal(ventas);
    let ventaMayor=calcMayor(ventas);
    let ventaMenor=calcMenor(ventas);

    let mensajeSalida="Total de ventas es: "+totalVentas+
                        "/ Venta mayor: "+ventaMayor+
                        "/ Venta menor: "+ventaMenor;

    let elementoSalida=document.getElementById("Salida");

    elementoSalida.textContent=mensajeSalida;
}

function sumarTotal(array){
    let total=0;

    for(let venta of array){
        total+=venta;
    }
    return total;
}
function calcMayor(array){
    let maximo=array[0];

    for(let venta of array){
        if(venta>maximo){
            maximo=venta;
        }
    }
    return maximo;
}
function calcMenor(array){
    let minimo=array[0];

    for(let venta of array){
        if(venta<minimo){
            minimo=venta;
        }
    }
    return minimo;
}