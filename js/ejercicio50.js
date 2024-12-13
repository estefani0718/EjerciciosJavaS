// Considere dos variables llamadas temperatura y presión. Escriba una sentencia if-else que
//         muestre en pantalla la palabra Alarma si la variable presión es mayor a 200 o si la variable
//         temperatura es mayor a 100. En caso contrario, se debe mostrar en pantalla la palabra
//         Normal.

let temperatura=parseInt(prompt("ingrese la temperatura "));
let presión=parseInt(prompt("ingrese la presion "));
if(temperatura>=100 || presión>=200 )alert("¡Alerta!");
else alert("normal");