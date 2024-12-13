// Escribir un programa que pida al usuario una palabra y luego muestre por pantalla una a
// una las letras de la palabra introducida empezando por la última

let palabra=prompt("ingrese una palabra ");

let ultima=palabra.split("");
let palabrau=ultima.reverse();
let reversa=palabrau.join("");

alert(reversa);
;