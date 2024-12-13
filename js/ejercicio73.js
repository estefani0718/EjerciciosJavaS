// Escribir un programa en el que se pregunte al usuario por una frase y una letra, y muestre
// por pantalla el número de veces que aparece la letra en la frase

let frase=prompt("ingrese una frase ");
let letra =prompt("ingrese una letra ");
const contador = frase.split(letra).length - 1;// con eset metodo es mas sencillo , el split lo vuelve un array 
//y el lengt es la longuitud de el array ,osea lo divide letra por letra y con el lengt -1 busca la letra que ingresamos y nos da el resultado 
alert(`La letra '${letra}' aparece ${contador} veces en la frase.`);
