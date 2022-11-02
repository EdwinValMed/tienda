// formula (P (precio original - descuento) / 100 )
//const precioOriginal = 200;
//const descuento = 15; 

//const porcentajePrecioConDescuento = 100 -descuento;
//const precioConDescuento = (precioOriginal * porcentajePrecioConDescuento) / 100;

//console.log({
    //precioOriginal,
    //descuento,
    //porcentajePrecioConDescuento,
    //precioConDescuento,
//});

function CalcularPrecioConDescuentos(precio, descuento){
    const porcentajePrecioConDescuento = 100 -descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

    return precioConDescuento;
}

// interactual con HTML
function TotalPrecioConDescuento(){
    const price = document.getElementById("InputPrice").value;
    const discount = document.getElementById("InputDiscount").value;

    const calcular = CalcularPrecioConDescuentos(price, discount);
    //alert (calcular);

    
const precioT = document.getElementById("precioT");
    precioT.innerText = "tatal de precio es de: $" + calcular;


}