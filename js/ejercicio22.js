// . Escribir un programa que muestre el pago de una llamada telefónica sabiendo que cada minuto cuesta $355 pesos y un IVA 20%.

let costo=355;
alert("bienvenido , vamos a mostar el pago de un llamda de telefonica ");
let llamda=parseFloat(prompt("ingrese el valor de la llamada "));
let pago=costo*llamda;
let totalp=pago*0.20;
let total=pago+totalp;
alert(`este va hacer tu pago de la llmada telefonica :${total.toFixed(2)}`);