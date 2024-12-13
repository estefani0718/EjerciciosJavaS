// Realice el siguiente algoritmo para convertir pesos a dolores y a euros, utilizando como
// constante el valor de una moneda
let dolar_conver=0.00027;
let euros_conver=0.00023;

function convertir(peso,convercion){
    return peso*convercion  ;
}
let peso=parseInt(prompt("ingrese un valor de la moneda :"));
let dolares=convertir(peso, dolar_conver); 
let euros=convertir(peso, euros_conver);

alert(`${dolares.toFixed(2)} dólares.`);
alert(`${euros.toFixed(2)} euros.`);
 