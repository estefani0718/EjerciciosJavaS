// Escribe una función que tome una cadena y devuelva una nueva cadena sin las vocales.
function quitarVocales(cadena) {
    return cadena.replace(/[aeiouAEIOU]/g, ''); // Elimina todas las vocales, tanto minúsculas como mayúsculas
}
const resultado = quitarVocales("Hola Mundo");
console.log(resultado); 