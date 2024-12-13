// . Comprobar la fortaleza de una contraseña teniendo en cuenta que debe tener entre 8 y 12
// caracteres, y al menos una mayúscula, una minúscula, y un dígito.

let con=0;
   
while(con==0){
      
    let personCon=prompt(("ingrese su contraseña \n minimo 8 maximo 12 caracteres \n nota:al menos una mayúscula, una minúscula, y un dígito"));
    let expre=/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[A-Za-z\d]{8,12}$/;
    if(expre.test(personCon))
    {
        alert("contraseña segura ");
        con+=1;
    }
    else alert("invalida,volver hacerla");
}