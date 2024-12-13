// lEn cierta empresa se les paga a sus trabajadores de la siguiente forma: si el empleado es
// de planta, la hora trabajada se le paga a $20000, si el empleado es administrativo, la hora
// trabajada se le paga a $10000. Para calcular su pago es necesario conocer el total de
// horas trabajadas.


alert(`Bienvenido, a continuacion ingresar las horas trabajadas en tu empresa `);


function paga(emple){
    let pagap=0;
    let paga;
    let pagaa=0;
    if(emple==1){
        paga=parseInt(prompt("ingrese las horas trabajadas:"));
        pagap=paga*20000;
        alert(`el total de su pago de horas trabajadas es :${pagap}`);
    }
    else if(emple==2){
        paga=parseInt(prompt("ingrese las horas trabajadas:"));
        pagaa=paga*10000;
        alert(`el total de su pago de horas trabajadas es :${pagaa}`);
    }
}
let emple=parseInt(prompt("ingrese si es \n1.de planta\n2.administrativo :"));
let pagas=paga(emple);
