// Para tributar un determinado impuesto se debe ser mayor de 16 años y tener unos
// ingresos iguales o superiores a 1000 mensuales, escribir un programa que pregunte al
// usuario su edad e ingresos mensuales y muestre por pantalla si el usuario debe tributar o
// no
let edad = parseInt(prompt("Ingrese su edad: "));
let ingre=parseFloat(prompt("ingrese sus ingresos mensuales "));

while(true){
    let eda=0;
    let ingres=0;
    if(edad >=16 || edad  <=18)eda++;
    if(ingre >=100000)ingres++;
   console.log(`Debes empezar a tributar por que tu eres amyor de edad ${eda} y tus ingresos son mayores o iguales a 100.000,${ingres}`);

}