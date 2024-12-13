// Genera un patrón de asteriscos en forma de pirámide.

function gpiramide(altura) {
    let linea;
    let pirámide="";// una variable vacia
    // Bucle para cada nivel de la pirámide 
    for (let i = 1; i <= altura; i++) { // Generar espacios
        let espacios = " ".repeat(altura - i); // Generar asteriscos
        let asteriscos = "*".repeat(i * 2 - 1); // Combinar espacios y asteriscos para formar la línea actual 
        linea = espacios + asteriscos + "\n"; // Añadir la línea a la pirámide
        pirámide+=linea;// aqui agregar la linea
    } // Mostrar la pirámide completa 
    console.log(pirámide);
}
gpiramide(10);