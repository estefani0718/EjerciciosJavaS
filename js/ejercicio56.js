// Un banco paga intereses a los depósitos dependiendo del saldo. Si el saldo es menor a
// $100.000 se paga un interés anual de 3%, pero si su saldo es mayor a $100.000 se paga
// un interés anual de 4%. Al final mostrar el saldo final y el interés pagado


let saldo =parseInt(prompt("ingrese su saldo de su deposito :"));
let interes;
if (saldo <100000)interes=3;
else interes=4;

let saldoin=saldo *interes;
let salgoF=saldo+saldoin;

alert(`el saldo final es : $${salgoF} , interes que se pago es de ${interes} ,
     y su resultado con el sueldo y el interes es de ${saldoin}`);
