// 9. En un colegio, se necesita hacer una selección de basquetbol que represente al colegio,
// para lo cual es requisito indispensable que los postulantes sean menores o iguales a 19
// años, con una estatura de más de 175 cm y el peso tiene que estar entre los 80 kg y 75.
alert(`En un colegio, se necesita hacer una selección de basquetbol que represente al colegio`);

let edad = parseInt(prompt("Ingrese su edad:"));
let esta = parseInt(prompt("Ingrese su estatura (cm):"));
let peso = parseInt(prompt("Ingrese su peso (kg):"));

function datos(edad, esta, peso) {
  let selecc = [];
  
  if (edad <= 19) selecc.push("Cumples con la edad (19 o menos).");
  if (esta > 175) selecc.push("Cumples con la estatura (más de 175 cm).");
  if (peso >= 75 && peso <= 80) selecc.push("Cumples con el peso (entre 75 y 80 kg).");
  
  return selecc;    
}

const seleccionados = datos(edad, esta, peso);

if (seleccionados.length === 3) { // Cumple todos los requisitos
  alert("¡Felicidades! Cumples todos los requisitos para ser seleccionado.");
} else {
  alert("No cumples todos los requisitos.");
  seleccionados.forEach(mensaje => {
    alert(mensaje);
  });
}


