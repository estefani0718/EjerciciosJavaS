// . Escriba una expresión regular que reconozca los números en punto flotante 
//(por ejemplo -2.3e-1, -3e2, 23, 3.2).

let array= ["-2.3e-1"];
let regex=/^-?\d+(\.\d)?(e-?\d+)?$/;

array.forEach(element => {
    console.log(`${array} es válido: ${regex.test(array)}`)
});