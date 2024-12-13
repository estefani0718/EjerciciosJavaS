// Pinturas “La brocha gorda” requiere determinar cuánto cobrar por trabajos de pintura
// Considere que se cobra por m2 y realice el código que representen el algoritmo que le
// permita ir generando presupuestos para cada cliente.
let metros= parseInt(prompt("ingrese cuantos metros cuadrados necesita pintar  (m2) "))
let precio = parseFloat(prompt("ingrese cuanto vale cada metro cuadrado "));
function valor(metros, precio) {
    return metros* precio;
}
let resul = valor(metros ,precio);
alert(`el valor de la pintura que deseas es ${resul}`)