// Escribir un programa que almacene la cadena de caracteres contraseña en una variable,
// pregunte al usuario por la contraseña hasta que introduzca la contraseña correcta


let contac="programa123";

do{
    let contraseña=prompt("ingrese una contraseña ");
    if(contraseña==contac){
        alert(`perfecto , contraseña correcta `);
    }
    else{
        alert(`vuelve a intentarlo`);
    }
}while(contraseña!=contac);

