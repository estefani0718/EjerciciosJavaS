// Escriba un algoritmo que permita calcular el área, debe preguntar que figura geométrica
// desea calcular "Triángulo y Círculo: (Escriba T o C):
// a. Triangulo = base * altura / 2
// b. Circulo = PI * radio* radio


function pedirfi(figura){
    if(figura==="T"){
        let b=parseInt(prompt("ingrese la base del triangulo: "));
        let h=parseInt(prompt("ingrese la altura del triangulo: "));
        let triangulo=b*Math.pow(h,2);
        alert(`esta es la area :${triangulo.toFixed(2)}`);
    }
    else if (figura=="C"){
        let r=parseInt(prompt("ingrese el radio del circulo : "));
        let circulo=Math.PI*r*r;
        alert(`esta es la area :${circulo.toFixed(2)}`);
    }
}
let figura=prompt(" escoje cual de estas 2\n quieres  saber el area \nTriángulo y Círculo: (Escriba T o C):");
let pedirfigura=pedirfi(figura);
