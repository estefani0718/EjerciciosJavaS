// Escribe una función que genere de forma aleatoria un numero entre 1 y 10, y verifica si
// este número es par o impar.
function verificarParImpar() {
    // Genera un número aleatorio entre 1 y 10
    const numeroAleatorio = Math.floor(Math.random() * 10) + 1;
    // Verifica si el número es par o impar
    if (numeroAleatorio % 2 === 0) {
        console.log(`El número ${numeroAleatorio} es par.`);
    } else {
        console.log(`El número ${numeroAleatorio} es impar.`);
    }
}
verificarParImpar();
