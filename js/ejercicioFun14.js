// Crea una función que tome un conjunto de números y devuelva el inverso aditivo de cada
// uno. Todo los positivos se devuelve negativo y todos los negativos se devuelve positivo.
function Aditivo(numeros) {
    return numeros.map(num => -num); // Convierte cada número a su inverso aditivo
}
const resul= Aditivo([1, -2, 3, -4, 5]);
console.log(resul); 
