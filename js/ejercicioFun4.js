// Crea una función que calcule la longitud de una palabra si es corta o si es larga. (palabras
//     cortas menores de 5 caracteres).
function palabras(palabra) 
{ if (palabra.length < 5) 
    { return "corta"; 

    } else 
    { return "larga"; 

    }
}
let palabra=prompt("ingrese una palabra ");
let p=palabras(palabra);