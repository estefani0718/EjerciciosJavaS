// Ingrese una frase que lo identifique como programador de Software y luego mostrar esta
// frase invertida.



function invertir(cadena){
 let cadenan=cadena.split("");//este  tipo de dato o metodo , lo que hace es volver array el texto ingresado 
 let cadenanu=cadenan.reverse();//este la invierte 
 let cadenanueva=cadenanu.join("");//este une el texto o en el caso un array  de la cadena que ingresamos 
  return cadenanueva;
}
let cadena=prompt("ingrese una frase corta que le guste y se identifique con programacion: ");
let invertirc=invertir(cadena);
alert(`esta es lal frase invertida :${invertirc}`); 