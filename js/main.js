let numero = parseInt (prompt ("Ingrese un numero comprendido entre 1 y 10"));;

for (let i = 1; i <= 10; i++){
     let multi = numero * i;
    document.write(numero + " x " + i + " = "+ multi + "<br>")}

    if (numero <=10){
            alert ("¡Puedes ver las tablas de multiplicar!")
    }
    
    else {
            alert ("No puedes ingresar, ya que debes ingresar un numero entre 1 y 10")
            window.close()
}
