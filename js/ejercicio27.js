// . Elaborar un algoritmo para calcular el promedio final de la materia de algoritmos. dicha
// calificación se compone de los siguientes porcentajes:
// a. 55% del promedio final de sus calificaciones de los tres (3) parciales.
// b. 30% de la calificación examen final.
// c. 15% de la calificación trabajo final.
alert("bienvenido , vamos a calcular tus notas ");
let nota1=parseInt(prompt("ingrese la nota :"));
let nota2=parseInt(prompt("ingrese la nota :"));
let nota3=parseInt(prompt("ingrese la nota :"));
let examen=parseInt(prompt("ingrese su  calificacion del examen final:"));
let trabajo=parseInt(prompt("ingrese su  calificacion del trabajo final:"));
let salir=parseInt(prompt("ingrese 1. para salir y 2.para continuar "));
let promedio=(nota1+nota2+nota3)/3;
let califip=promedio*0.55;
let califiex=examen*0.30;
let califitr=trabajo*0.15;
let final=califip+califiex+califitr;

alert(`este es el resultado \n1.${final}`);
