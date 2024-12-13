// En una tienda de HELADO da un descuento por compra a sus clientes con membresía
// dependiendo de su tipo, sólo existen tres tipos de membresía, tipo A, tipo B y tipo C. Los
// descuentos son los siguientes: Tipo A 10% de descuento Tipo B 15% de descuento Tipo C
// 20% de descuento.

alert(`bienvenido a tu tienda de helado`);
let membre=prompt("ingrese su tipo de membresia \n tipo A \n tipo B o \n tipo C: ");

function descuentos(membre){
    let descua;
    let descub;
    let descuc;
    if(membre==="A"){
        alert(`¡¡Tienes el 10%  decuento !!`);
        let pro=parseInt(prompt("ingrese el precio de su helado :"));
        descua=pro*0.10;
        let preciofi=pro-descua;
        alert(`el valor final de su compra es :${preciofi}`);
    }
    else if(membre=="B"){
        alert(`¡¡Tienes el 15%  decuento !!`);
        let pro=parseInt(prompt("ingrese el precio de su helado :"));
        descub=pro*0.15;
        let preciofi=pro-descub;
        alert(`el valor final de su compra es :${preciofi}`);
    }
    else if(membre=="C"){
        alert(`¡¡Tienes el 20%  decuento !!`);
        let pro=parseInt(prompt("ingrese el precio de su helado :"));
        descuc=pro*0.20;
        let preciofi=pro-descub;
        alert(`el valor final de su compra es :${preciofi}`);
    }
}
let fin=descuentos(membre);