// Calcular el valor total del valor de 5 productos, el IVA y el subtotal, visualizar los resultados
// de: Iva, Subtotal y Total de la compra de los artículos.



let cuantos=parseInt(prompt("ingrese cuantos productos quieres comprar (5):"));

function calcu(cuantos){
    let pedir;
    let contap=0;
    let subtotal=0;
    for(let h=1;h <=cuantos;h++){
        pedir=parseInt(prompt(`ingrese el valor del producto${h} :`));
        contap=pedir;
        subtotal+=contap;
    }
    let iva =subtotal*0.20;
    let total=subtotal+iva;
    alert(`el resultado del subtotal del producto y de su compra es :\n${subtotal}\n con el iva ${iva}\n el total :${total}`);
}

let pedir =calcu(cuantos);
