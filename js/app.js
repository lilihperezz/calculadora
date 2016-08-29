
var opcion = parseInt(prompt(" Elige una opción:\n\n" +
	" 1. suma\n"+ 
	" 2. Resta\n"+ 
	" 3. Multiplicación\n" + 
	" 4. División\n" + 
	" 5. Resto\n" +  
  " 6. Menor -mayor\n" +
  " 7. Igual - desigual\n" ));

if(opcion>0 && opcion<=8){
	var numero1 = parseInt(prompt("Ingresa tu número 1"));
  var numero2 = parseInt(prompt("Ingresa tu número 2"));
switch(opcion){
    case 1:
        var suma = numero1 + numero2;
        document.write("La suma es: " + suma);
        break;
    case 2:
        var resta = numero1 - numero2;
        document.write("La resta es:" + resta);
        break;
    case 3:
        var multiplicaion = numero1 * numero2;
        document.write("La multiplicaión es:" + multiplicaion);
        break;
    case 4:
        var division = numero1 / numero2;
       	document.write("La división es:" + division);
        break;
    case 5:
        var resto = numero1 % numero2;
        document.write("El resto es:" + resto);
        break;
     case 6:
        if(numero1 < numero2){
        document.write("El numero " + numero1 + "es menor que " + numero2);
         }
         else{
         	document.write("El numero" + numero2 + "es menor que " + numero1);
     		}			
        break;
    case 7:
        if( numero1 == numero2){
        document.write("El numero" + numero1 + "es iual al " + numero2);
        }
        else{
         document.write("El numero" + numero1 + "es desigual al " + numero2);
           }
        break;
	           }
            } else{
       window.alert("ingrese una opción valida");
    }

 
