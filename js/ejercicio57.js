// Consideramos la asignación de una calificación literal a un rango dado de calificaciones
// numéricas de la siguiente manera: Rango de calificaciones: 9.1 a 10 Asignar la calificación
// de A equivale a Excelente 8.1 a 9 Asignar la calificación de A equivale a Muy bien 7.5 a 8
// Asignar la calificación de A equivale a Bien Menor a 7.5 asignar la calificación de NA No
// Aprobado.
alert(`Rango de calificaciones: 9.1 a 10 Asignar la calificación
de A equivale a Excelente\n 8.1 a 9 Asignar la calificación de A equivale a Muy bien \n7.5 a 8
Asignar la calificación de A equivale a Bien \nMenor a 7.5 asignar la calificación de NA No
Aprobado`);



function calificaciones(calificacion){
    if (calificacion==91 || calificacion==10){
        alert(` ¡¡Tienes una A !!\n  excelente :\n${calificacion}`);
    }
    else if (calificacion==81 || calificacion==90){
        alert(` ¡¡Tienes una A !!\n muy bien :\n${calificacion}`);
    }
    else if (calificacion==7.5 || calificacion==80){
        alert(` ¡¡Tienes una A !!\n a bien :\n${calificacion}`);
    }
    else if (calificacion <7.5 ){
        alert(` ¡¡Tienes una NA NO APROBADO !!\n MENOR :\n${calificacion}`);
    }
}
let calificaion =parseInt(prompt("ingrese su calificacion final:"));
 let cali=calificaciones(calificaion);