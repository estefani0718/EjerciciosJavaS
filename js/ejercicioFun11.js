// • Obtén una serie de número y devuelve la suma de todos los números positivos, si no
// tenemos números positivos la sume debe devolver 0.

function sumaPositivos(numeros) {
    return numeros.filter(n => n > 0).reduce((a, b) => a + b, 0); 
} 
 console.log(sumaPositivos([1, -2, 3, 4, -5])); 
