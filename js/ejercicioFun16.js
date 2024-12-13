// Crea una función que convierta números del 0 al 5 en su representación textual, por
// ejemplo: “cero”, “uno”, “dos”, “tres” etc.

function numeroATexto(num) {
    let texto;
    
    switch (num) {
        case 0:
            texto = "cero";
            break;
        case 1:
            texto = "uno";
            break;
        case 2:
            texto = "dos";
            break;
        case 3:
            texto = "tres";
            break;
        case 4:
            texto = "cuatro";
            break;
        case 5:
         texto = "cinco";
            break;
        default:
         texto = "Número fuera de rango";
    }
    
    return texto;
}

let num=parseInt(prompt("ingrese un numero "));
let numeros=numeroATexto(num);

