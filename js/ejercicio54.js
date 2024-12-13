// . Restarle al primer número al segundo (siempre y cuando el primero sea mayor que él
//     segundo, en caso contrario indicar con un mensaje que la operación no es posible
//     realizarla

let mayor=parseInt(prompt("ingrese un numero para hacer un resta :"));
let menor=parseInt(prompt("ingrese un segundo numero para la resta :"));

if(mayor>menor ){
    let operación=mayor-menor;
    alert(`el resultado es la operacion es:\n${operación}`);
}
else if(menor>mayor){
    alert(`no se puede hacer la operacion`);
}