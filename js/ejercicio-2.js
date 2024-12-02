//Escribir un programa que almacene la cadena de caracteres contraseña de una variable, pregunte al usuario por la contraseña e imprima por
// pantalla si la contraseña introducida por el usuario coincide con la guardada en la
// variable sin tener en cuenta mayúsculas y minúsculas, se debe validar que solo se pueda ingresar valores alfanuméricos.

let personCon=prompt(("ingrese su contraseña \n maximo 8 caracteres \n nota:ingresa valores alfanumericos "));
let contraseña=personCon;
const valida=function(personCon){
 let contra=/^([a-z]]{0,8})+([0-9]{2,4})$/;
 let rta=0;
 if(personCon===contra){
    rta++;
 }
 else return false
 if(rta!==contraseña)return "la contraseña esta mal ";
 else{
    return "vuelva a repetir la accion";
}

}
let resultado=valida(personCon);
console.log(resultado);
