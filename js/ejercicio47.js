// Desarrollar un diagrama que lea 3 valores diferentes e indique cual es el mayor de ellos, el
// menor o si son iguales.
function mayor(pre){
    let num;
    let contanum=0;
    let mayor=5;
    let menor=0;
    let iguales=0;
 for(let y=1;y <=pre;y++){
    num=parseInt(prompt("ingrese un numero: "));
    contanum=num;
    if(contanum>mayor){
        mayor=contanum;
    }
    else if(num <5) menor=contanum;
    else if(num==num) iguales=contanum;
 }
 alert(`este es el numero mayor: ${mayor}\n y estos son menores:${menor}\n cuando es igual:${iguales} `);

}
let pre=parseInt(prompt("cuantos numeros quieres ingresar (3)?"));
mayor(pre);