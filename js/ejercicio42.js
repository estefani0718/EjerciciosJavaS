// Una papelería vende libros a $10.000, cuadernos $ 7.550, y lapiceros a $5.550. Calcular el
// monto total de la venta, según la cantidad de artículos solicitados durante el día


function venta(articulos) {
    let contalibros = 0;
    let contacuader = 0;
    let contalapi = 0;
    let precioli = 0;
    let preciocua = 0;
    let preciola = 0;   
    let monto = 0;

    for (let j = 1; j <= articulos; j++) {
        let pregunta = parseInt(prompt("tenemos estas opciones de tu preferencia (escoger)\n 1.libros\n 2.cuadernos\n 3.lapiceros"));
        if (pregunta == 1) {
            let libros = parseInt(prompt("cuantos libros quieres ?:"));
            contalibros += libros;
            precioli += contalibros * 10.000;
            alert(`precio de los libros: ${precioli.toFixed(2)}`);
            
        } else if (pregunta == 2) {
            let cuader = parseInt(prompt("cuantos cuadernos quieres ?:"));
            contacuader += cuader;
            preciocua += contacuader * 7.550;
            alert(`precio de los cuadernos: ${preciocua.toFixed(2)}`);
            
        } else if (pregunta == 3) {
            let lapi = parseInt(prompt("cuantos lapiceros quieres ?:"));
            contalapi += lapi;
            preciola += contalapi * 5.550;
            alert(`precio de los lapiceros: ${preciola.toFixed(2)}`);
            
        }
    }

    monto = precioli + preciocua + preciola;
    alert(`El monto total de la venta es: ${monto.toFixed(2)}`);
}

let articulos = parseInt(prompt("Bienvenido a tu papeleria de tu confianza \n ¿cuantos articulos quieres comprar hoy? :"));
venta(articulos);
