// 4. Generar el algoritmo que dé como resultado el tiempo estimado para el llenado de un
// depósito.
// a. Q = V/t, siendo Q (caudal), V (volumen) y t (tiempo).
// b. Volumen = PI *(radio^2)* H (altura del depósito).


let r=4;
let h=4;
let q =10;
let v=Math.PI*Math.pow(r,2)*h;
let tiempo=v/q;
console.log(`solucion es:${tiempo.toFixed(2) }segundos`);


