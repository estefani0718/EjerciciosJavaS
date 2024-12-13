// . Escribir un programa que pida al usuario un número entero y muestre por pantalla si es un
// número primo o no.



const primos=function (numeroP){
   
    for (let i = 2; i < numeroP; i++) {
        if (numeroP  % i === 0) {
          return false; 
        }
    } return true;
}


let numeroP=parseInt(prompt("ingrese un numero primo "));
console.log(primos());