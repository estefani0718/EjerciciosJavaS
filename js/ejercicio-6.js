//los alumnos de un curso se han dividido en dos grupos A y B de acuerdo con el sexo y el
// nombre, el grupo A está formado por las mujeres con un nombre anterior a la M y los
// hombres con un nombre posterior a la N y el grupo B por el resto, escribir un programa que
// pregunte al usuario su nombre y sexo y muestre por pantalla el grupo al que corresponde.



let pregnta=parseInt(prompt("ingrese cuantos alumnos van a ingresar al programa: "));
let array= ['a', 'b', 'c',' d','e',' f',' g',' h', 'i', 'j', 'k', 'l', 'm'];
let ale=array[Math.floor(Math.random()*array.length)];//me da una letra aleatoria para el ejercicio     
let array2=['n', 'ñ', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let alet=array2[Math.floor(Math.random()*array2.length)];

for(let i=0;i <=pregnta;i++){
    let ge=prompt("ingrese su genero \n(femenino o masculino ):");
    let nom =prompt("como su nombre :");
    if(ge=="femenino")console.log(`Eres del grupo A \n con letra${ale} \n el nombre ingresado es ${nom}`);
    else{
        if (ge=="masculino ")console.log(`Eres del grupo a \n con letra${alet} \n el nombre ingresado es ${nom}`);
    }  
}


