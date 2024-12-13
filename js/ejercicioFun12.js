// Implemente una función que sume dos números y devuelva su suma en binario, el
// número binario devuelto debe ser una cadena.
function binario(a, b) {
    const suma = a + b;
    return suma.toString(2); // Convierte la suma a binario y lo devuelve como una cadena
}
const resultado =binario(5, 3);
console.log(resultado);  //