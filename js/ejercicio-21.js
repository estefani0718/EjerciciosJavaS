// . Escribir un programa que calcule el volumen de un elipsoide.
alert("bienvenido vamos a calcular el volumen de un elipsoide");
function resolver(a,b,c){
    let form=4/3*Math.PI*a*b*c;
    alert(`este es el resultado del volumen${form}`);

}

let a =parseInt(prompt("ingrese el valor de a "));
let b=parseInt(prompt("ingrese el valor de b"));
let c =parseInt(prompt("ingrese el valor de c "));
console.log(resolver(a,b,c));