//  La pizzería Bella Napoli ofrece pizzas vegetarianas y no vegetarianas a sus clientes. Los
// ingredientes para cada tipo de pizza aparecen a continuación.
// a. Ingredientes vegetarianos: Pimiento y tofu.
// b. Ingredientes no vegetarianos: Pepperoni, Jamón y Salmón.
// Escribir un programa que pregunte al usuario si quiere una pizza vegetariana o no, y en
// función de su respuesta le muestre un menú con los ingredientes disponibles para que
// elija. Solo se puede elegir un ingrediente además de la mozzarella y el tomate que están
// en todas las pizzas. Al final se debe mostrar por pantalla si la pizza elegida es vegetariana
// o no y todos los ingredientes que lleva.

alert("¡¡Bienvenido!!, a La pizzería Bella Napoli");

let vegepre = prompt("¿Quieres una pizza vegetariana o no? :");

if (vegepre === "vegetariana") {
    alert("Esta pizza es vegetariana. Los ingredientes adicionales disponibles son:\n1. Pimiento\n2. Tofu");
    let opcion = parseInt(prompt("¿Cuál ingrediente adicional deseas? "));
    
    let ingrediente = "";
    if (opcion === 1) {
        ingrediente = "Pimiento";
    } else if (opcion === 2) {
        ingrediente = "Tofu";
    } else {
        alert("Opción no válida");
        
    }

    alert(`Tu pizza es vegetariana y contiene: Mozzarella, Tomate y ${ingrediente}.`);

} else if (vegepre === "no") {
    alert("Esta pizza no es vegetariana. Los ingredientes adicionales disponibles son:\n1. Pepperoni\n2. Jamón\n3. Salmón");
    let opcion = parseInt(prompt("¿Cuál ingrediente adicional deseas? "));

    let ingrediente = "";
    if (opcion === 1) {
        ingrediente = "Pepperoni";
    } else if (opcion === 2) {
        ingrediente = "Jamón";
    } else if (opcion === 3) {
        ingrediente = "Salmón";
    } else {
        alert("Opción no válida");
        
    }

    alert(`Tu pizza no es vegetariana y contiene: Mozzarella, Tomate y ${ingrediente}.`);

} else {
    alert("Opción no válida. Por favor, recarga la página e inténtalo de nuevo.");
}
