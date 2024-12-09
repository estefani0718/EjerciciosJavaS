// Escribir un programa que pida al usuario un número entero y muestre por pantalla si es par
//         o impar

let preguntap=parseInt(prompt("ingrese las cantidad de veces que quieres preguntar numeros pares e impares "));
let pregunta=parseInt(prompt("ingrese un numero par :"));

    for(let i=0;i>preguntap;i++){
        let num=true;
        let acu=0;
       
        for(let j=2;j <=num;j++){
            if(pregunta%i==0){console.log("es un numero par ");
            acu++;}
            else {
                if(!pregunta%i==0){console.log("es un numero impar");
                    acu++;
                }
            }
        }
        console.log(`tu resultado es ${acu}`);
    }