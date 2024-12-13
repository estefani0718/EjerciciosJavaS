// . Escribir un programa que pida al usuario un número entero y muestre por pantalla un
// triángulo rectángulo como el de más abajo, de altura el número introducido

let numero=parseInt(prompt("ingrese un numero"));

let vacio="";

for (let y=0;y<=numero;y++){
    vacio+="*".repeat(y) + "\n";
}
alert(vacio);