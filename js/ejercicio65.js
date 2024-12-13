// Escribir un programa que pida al usuario un número entero positivo y muestre por pantalla
// la cuenta atrás desde ese número hasta cero separados por comas.

let nume = parseInt(prompt("Ingrese un número positivo:"));
function atras(nume) {   
    nume = [];    
    for (let i = nume; i>=0; i--) {
        nume.push(i);
    }
    alert(nume.join(", "));
}
let ultimo =atras(nume);