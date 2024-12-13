// Escribir un programa que pregunte al usuario una cantidad a invertir, el interés anual y el
// número de años, y muestre por pantalla el capital obtenido en la inversión cada año que
// dura la inversión.

let cantidad=parseFloat(prompt("ingrese una cantidad a invertir"));
let interes=parseInt(prompt("ingrese el interes anual(en porcentaje(sin el %)) "));
let años=parseInt(prompt("ingrese el numero años que desea invertir  "));
let cantidadconta=cantidad;
let porce=interes/100;
let cantidadfin=0;
for(let k=1;k <=años;k++){
     cantidadfin+=cantidadconta*porce;
    alert(`Capital al final del año ${k}: ${cantidadfin.toFixed(2)}`);
}
