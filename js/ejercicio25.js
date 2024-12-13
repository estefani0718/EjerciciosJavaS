// . Una farmacia aplica el precio de los remedios el 10% de descuento, hacer un programa
// que ingresando el costo de los medicamentos calcule el descuento y el precio final.
alert("bienvenido , vamos  a verificar costo del producto de la farmacia a la que vas");
let producto=parseFloat(prompt("ingrese costo del medicamento "));
let descuento=producto*0.10;
let precioF=producto-descuento;
alert(`el descuento del medicamento: ${descuento.toFixed(2)} `); 
alert(`el precio final del tu producto: ${precioF.toFixed(2)}`);