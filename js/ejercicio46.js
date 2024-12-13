// . Calcule el mayor de tres números, permitiendo leer 3 valores diferentes

function mayor(pre){
    let num;
    let contanum=0;
    let mayor=5;
    let menor=0;
 for(let y=1;y <=pre;y++){
    num=parseInt(prompt("ingrese un numero: "));
    contanum=num;
    if(contanum>mayor){
        mayor=contanum;
    }
    else if(num <5) menor+=contanum;
 }
 alert(`este es el numero mayor: ${mayor} y estos son menores:${menor}`);

}
let pre=parseInt(prompt("cuantos numeros quieres ingresar (3)?"));
mayor(pre);