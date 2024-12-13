// Hacer un programa que permita ingresar n Notas de alumnos (100 – 1), y que imprima cual
// fue la nota alta, la nota baja y cuantos alumnos obtuvieron la máxima nota de 100, cuantos
// obtuvieron las siguientes calificaciones:
// a. «a» = menor que 100 y mayor igual que 90
// b. «b» = menor que 90 y mayor igual que 80
// c. «c» = menor que 80 y mayor igual que 70
// d. «d» = menor que 70 y mayor igual que 60

let n=parseInt(prompt("ingrese la cantidad de notas ,que quieres ingresar :"));

function pedirn(n){
 let nota ;
 let notaA=0;
 let notaM=0;
 let notab=0;
 let conA=0;
 let conB=0;
 let conC=0;
 let conD=0;
 let countMax=0;
 let cantinota;
 let totaln;
 for(let g=1;g <=n;g++){
    nota=parseInt(prompt("ingrese la nota (entre 1 a 100): "));
    cantinota=nota;
    totaln+=cantinota;
    if (nota === 100) {
        countMax++; notaM++;
    }  
    else if (nota >= 90) {
        conA++; notaA=nota; 
    }
    else if (nota >= 80)  conB++;  
    else if (nota >= 70) {
     conC++; 
    } 
    else if (nota >= 60) {
        conD++; notab=nota;
    }
    
 }
 alert(`Nota más alta: ${notaM}`); 
 alert(`Nota más baja: ${notab}`); 
 alert(`Alumnos con nota máxima (100): ${countMax}`); 
 alert(`Alumnos con calificación (a) (>= 90 y < 100): ${conA}`);
 alert(`Alumnos con calificación (b) (>= 80 y < 90): ${conB}`); 
 alert(`Alumnos con calificación (c) (>= 70 y < 80): ${conC}`); 
 alert(`Alumnos con calificación (d) (>= 60 y < 70): ${conD}`);

}
let notas=pedirn(n);