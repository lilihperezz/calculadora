
var opción = parseInt(prompt(" Elige una opción:\n\n" +
	" 1. suma\n"+ 
	" 2. Resta\n"+ 
	" 3. Multiplicación\n" + 
	" 4. División\n" + 
	" 5. Resto\n" +  
	" 6. Menor \n" +
	" 7. Mayor\n" +
	" 8. Igualdad\n" +));
	var numero1 = parseInt(prompt("Ingresa tu número 1"));
    var numero2 = parseInt(prompt("Ingresa tu número 2"));

if(opcion>0 && opcion<=8)
	{
switch(opcion){
    case 1:
        var suma = numero1 + numero2;
        document.write("La suma es:" + suma);
        break;
    case 2:
        var resta = numero1 - numero2;
        window.alert("La resta es:" + resta);
        break;
    case 3:
        var multiplicaion = numero1 * numero2;
        window.alert("La multiplicaión es:" + multiplicaion);
        break;
    case 4:
        var division = numero1 / numero2;
       	window.alert("La división es:" + division);
        break;
    case 5:
        var resto = numero1 % numero2;
        window.alert("El resto es:" + resto);
        break;
     case 6:
        var menor = numero1 < numero2;
        if(menor){
        window.alert("Es menor que:" + menor);
         }
         else{
         	window.alert("Es mayor que:" + mayor);
     		}			
        break;
    case 8:
        var igualdad = numero1 == numero2;
        if(Igualdad){
        window.alert("Es igual que:" + igualdad);
        }
        else{
         window.alert("Es desigual que:" + desigualdad);
           }
        break;
    default:
          window.alert("No es una opción válida, ingrese una opción correcta");
        break;
	}
}

 
