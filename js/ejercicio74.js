// Escribir un programa que muestre el eco de todo lo que el usuario introduzca hasta que el
// usuario escriba “salir” que terminará.

let algo=prompt("escribe alguna palabra (ingrese (salir) para salir  )");
 while(false){
    if (algo=== "salir") {
        alert("Programa terminado."); 
        break; 
    } 
 alert(algo);
}