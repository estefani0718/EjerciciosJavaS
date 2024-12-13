// Calcular el sueldo de un empleado dados como datos de entrada:
//             a. Nombre.
//             b. horas de trabajo.
//             c. pago en hora.

let nom=prompt("ingresa tu nombre :");
let horas=parseInt(prompt("ingrese las horas trabajadas :"));
let pagoH=parseInt(prompt("cual es tu pago por hora "));
let pagof=horas*pagoH;
alert(`este es el sueldo ${pagof}`);