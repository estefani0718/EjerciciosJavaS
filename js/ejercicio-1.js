//Escribir un programa que pregunte al usuario su edad y muestre por pantalla si es mayor o
//menor de edad, el programa debe validar que solo se puedan ingresar números positivos
let persona= prompt(parseInt("ingrese su edad "));

 const edad =function (persona){
    if (persona <=17 )return `Eres menor de edad ${persona}`;
    if(persona>=18)return `eres mayor de edad ${persona}`;
    if(persona >=0){
        console.log("ingrese valores positivos ");
    }
    else console.log("ingrese su edad correctamente ");
}
let resultado= edad(persona);
console.log(resultado);