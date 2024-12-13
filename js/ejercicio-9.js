// Escribir un programa para una empresa que tiene salas de juegos para todas las edades y
// quiere calcular de forma automática el precio que debe cobrar a sus clientes por entrar. El
// programa debe preguntar al usuario la edad del cliente y mostrar el precio de la entrada. Si
// el cliente es menor de 4 años puede entrar gratis, si tiene entre 4 y 18 años debe pagar 5€
// y si es mayor de 18 años, 10€.


let pregunta =parseInt(prompt("ingrese la edad del usuario :"));

if(pregunta <=4)alert("¡¡entrada gratis!! \n es un menor de 4 años");
if(pregunta >=4 ||  pregunta <18) alert("¡¡ aahh que mal , tendras que pagar 5€!!");
if(pregunta>=18)alert("¡¡aahh que mal !!, ya eres mayor de edad , tienes que pagar 10€");
else {
    if(pregunta==0) alert("ERROR ");
}