// Escriba un algoritmo que calcule el área de un rectángulo siempre y cuando los lados sean
// positivos: área triangulo= lado * lado
let l;
let lados=0;
for(let u=1;u <=2;u++){
    let l=parseInt(prompt("ingrese el lado del rectangulo "));
    lados+=l;
    if (!l>=1) alert("error ,numeros negativos ");
}
let rectangulo=lados*lados;
alert(`el area del rectangulo es :${rectangulo}`);