// Escribir un programa que pida al usuario un número entero y muestre por consola un
// triángulo rectángulo como el de más abajo
let numero=parseInt(prompt("ingrese un numero"));

let vacio="";

for (let y=0;y<=numero;y++){
    vacio+="*".repeat(y) + "\n";
}
alert(vacio);