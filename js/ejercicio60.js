// . Hacer un programa que permita ingresar n cantidad de cursos, si la cantidad de cursos que
// lleva el alumno es menor que 6 el pago será $2.000.000 por cada curso, pero si la cantidad
// de cursos es mayor que 6 el pago será únicamente de $1.200.000.


alert(`Bienvenido ,ingresar n cantidad de cursos`);

let can=parseInt(prompt("ingrese las cantidad de cursos"));

function cursos(can) {
    let pago =0;
    let pago2 =0;
    if(can <6){
        pago=can*2000000;
        alert(` tu tienes menos de 6 cursos, tu pago de cada uno es de $2.000.000 \n  este el total del pago cursos ${pago}`);
    }
    else if(can>6){
        pago2=can*1200000;
        alert(` tu tienes mas de 6 cursos, tu pago de cada uno es de $1.200.000 \n  este el total del pago cursos ${pago2}`);
    }
}
let cantidad =cursos(can);