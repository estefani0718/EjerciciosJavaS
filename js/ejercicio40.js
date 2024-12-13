// Una empresa que contrata personal requiere determinar la edad de las personas que
// solicitan trabajo, pero cuando se les realiza la entrevista sólo se les pregunta el año en que
// nacieron. Realice el código que representen el algoritmo para solucionar este problema.

let fe =new Date();
let año=fe.getFullYear();
let nacimiento =parseInt(prompt("ingrese su año de nacimiento :"));
let form=año-nacimiento;
alert(`esta es la edad de ${form}`);