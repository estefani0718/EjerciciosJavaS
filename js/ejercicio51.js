// Calcular todos los pagos hechos de un restaurante y que si el consumo ingresado excede
// los $130.000 el descuento será del 15%, de lo contrario no hay descuento.


function pedir(pagos){
  let consumo;
  let contaconsu=0;
  let descu;
  let total;
  for(let g=1;g <=pagos;g++){
   consumo=parseInt(prompt("ingrese cuanto te valio el pedido:"));
   contaconsu+=consumo;
    if(contaconsu>=130000){
     alert ("tienes descuento del 15%");
     descu =contaconsu-0.15;
        
    }
  }
  alert(`su descuento es de  :${descu}`);
}
let pagos=parseInt(prompt("ingrese cuantos pagos hizo en el restaurante :"));
let restaurante=pedir(pagos);