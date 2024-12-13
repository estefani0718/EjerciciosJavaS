// Escriba una expresión regular que reconozca las cadenas de doble comillas. Debe permitir
// la presencia de comillas y caracteres escapados.

let regex=/"([^"\\]|\["\\])*"/;

let cadena=prompt("ingresa uan cadena de texto entre comillas :");

if (regex.test(cadena)){
    alert(`La cadena "${cadena}" es válida.`); } 
else {
    alert(`La cadena "${cadena}" NO es válida.`);
}