// . Escriba un algoritmo que permita obtener las raíces reales de la ecuación de segundo
// grado: a * x2 + b + x + c, siendo X un valor constante
alert("bienvenido vamos a resolver la ecuacion de 2 grado");
function resolver(a,b,c,x){
    let ecu=a*Math.pow(x,2)+b+x+c;
    alert(`este es el resultado de la ecuacion${ecu}`);

}

let a =parseInt(prompt("ingrese el valor de a "));
let b=parseInt(prompt("ingrese el valor de b"));
let c =parseInt(prompt("ingrese el valor de c "));
let x=4;
console.log(resolver(a,b,c,x));