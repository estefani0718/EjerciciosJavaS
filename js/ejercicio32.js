// . Pablo compro 5 productos los dos primeros con un 5% de descuento y los 2 últimos con un
// 2% de descuento, realice un algoritmo que indique cuanto fue el valor a pagar por cada
// producto y el total de la compra.
let pr1=parseInt(prompt("ingrese el producto 1"));
let pr2=parseInt(prompt("ingrese el producto 2"));
let pr3=parseInt(prompt("ingrese el producto 3"));
let pr4=parseInt(prompt("ingrese el producto 4"));
let pr5=parseInt(prompt("ingrese el producto 5"));

//descuentos
let descu_5pr1=pr1*0.5;
let descu_5pr2=pr2*0.5;
let descu_2pr1=pr4*0.2;
let descu_2pr2=pr5*0.2;
let sumT=descu_5pr1+descu_5pr2+pr3+descu_2pr1+descu_2pr2;
let total_sin_descu=pr1+pr2+pr3+pr4+pr5;
alert(`el valor de cada producto que ingresaste , 2 primeros tienen descuentos del 5% \n los dos ultimos de 2%\n
    el pago del 1er producto es:${descu_5pr1}\n
    el pago del 2do producto es:${descu_5pr2} \n
    el pago del 3ero producto (sin descuento) es:${pr3}\n
    el pago del 4rto producto es :${descu_2pr1}\n
    el pago del 5nto producto es ${descu_2pr2}\n
    el total de su compra es: ${sumT}\n
    el pago sin descuento en ningun producto es:${total_sin_descu}`);
