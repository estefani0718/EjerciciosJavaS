//Escribir un programa que almacene la cadena de caracteres contraseña de una variable, pregunte al usuario por la contraseña e imprima por
// pantalla si la contraseña introducida por el usuario coincide con la guardada en la
// variable sin tener en cuenta mayúsculas y minúsculas, se debe validar que solo se pueda ingresar valores alfanuméricos.



   
   let rta=0;
   
   while(rta==0){
      
      let personCon=prompt(("ingrese su contraseña \n maximo 8 caracteres \n nota:ingresa valores alfanumericos "));
      if(/^([a-z]]{0,8})+([0-9]{2,4})$/.test(personCon))
      {
         alert("contraseña validada");
         rta+=1;
      }
      else alert("invalidada ,volver hacerla");
   }


