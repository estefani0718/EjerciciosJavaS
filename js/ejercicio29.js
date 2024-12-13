// . Un estudiante realiza cuatro exámenes. Realizar un algoritmo correspondiente para
// obtener el promedio de las calificaciones obtenidas. 
// Las calificaciones van 1 a 5 puntos
alert("Bienvenido ingresar a continuacion 4 notas de sus examenes\n la puntuacion para esto es 1 a 5 ");
let cont=0;
for (let j=0;j <=4;j++){
    let notas=parseInt(prompt("ingrese su nota del examen "));
    cont+=notas;
}
let prom =cont/4;
alert(`este el promedio de sus notas ${prom}`);