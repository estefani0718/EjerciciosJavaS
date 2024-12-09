/**Escribir un programa que pida al usuario dos números y muestre por pantalla su división, si
    el divisor es cero el programa debe mostrar un error, se debe manejar mediante
    excepciones y el mensaje debe ser personalizado. */

   let pre=parseInt(prompt("cuantos numeros quieres dividir ?"));
    try{
       for(let j=0;j <pre;j++)
        {
            let conta=0;
            let num1=parseInt(prompt("ingrese un numero a dividir "));
            let num2=parseInt(prompt("ingrese un segundo numero a dividir"));
            conta++;
            if(num1%num2==0)console.log("Error");
        
            else {
                if(!num1%num==0)console.log(`este es tu resultado${conta}`);
            }
        }
       
    }catch(error){
        console.log("error  capturado",error.message);
    }