// Escribir un programa que pida al usuario un número entero positivo y muestre por pantalla
// todos los números impares desde 1 hasta ese número separados por coma


let num = parseInt(prompt("Ingrese un número positivo:"));

function impares(num) {
 

    
    let impares = [];
    
    
    for (let j = 1; j <= num; j++) {
        // Verificar si el número es impar
        if (j % 2 !== 0) {
            impares.push(j);
        }
    }
    
   
    alert(impares.join(", "));
}


impares(num);
