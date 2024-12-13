// Crea una función que tome un número como argumento y devuelva la cadena si el
// número es par o impar.
function paroImpar(numero) {
    if (numero % 2 === 0) {
     alert("par"); 
    } else {
      alert("impar"); 
    } 
}
let numero=parseInt(prompt("ingrese un numero "));
let par =paroImpar(numero);