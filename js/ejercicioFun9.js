// Crea una función para validar un pin que acepte 4 o 6 caracteres de longitud, solo se
// aceptan números, la función debe devolver true si el pin es válido y false si no es válido.
let expre= /^[0-9]{4,6}$/;
let pin = prompt("ingrese un pin (solo números entre 4 y 6):");
if (expre.test(pin)) {
    alert("true");
}
else{
    alert("false");
}