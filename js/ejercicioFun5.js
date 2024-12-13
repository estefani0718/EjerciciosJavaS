// Crea una función para calcular cuantas silabas tiene cada palabra, imprime el resultado
// en la consola.

function p(palabra){
    let regex=/[aeiouáéíóúü]+/gi;
    let silabas=palabra.match(regex);
    palabra.forEach(palabra => { console.log(`La palabra '${palabra}' tiene ${silabas} sílabas.`); });
}

let palabra=prompt("ingrese una palabra ");




