function calc_imc()
{
  var altura=document.getElementById("altura").value;
  altura=altura.toString().replace(',','.');
  var alturaMetro=altura/100;
  var peso=document.getElementById("peso").value;
   
  if(altura==""){
      document.getElementById("errorIMC").innerHTML="Por favor, introduce tu altura.";
  }
  else if(altura<0){
      document.getElementById("errorIMC").innerHTML="La altura que ingrese debe ser positiva.";
  }
  else if(altura<20){
      document.getElementById("errorIMC").innerHTML="Ha introducido la altura en metros.Por favor, multipliquela por 100 para introducirla en centimetros.";
  }
  else{
      document.getElementById("errorIMC").innerHTML="";
      if(peso==""){
        document.getElementById("errorIMC").innerHTML="Por favor, introduce tu peso.";
      }
      else if(peso<0){
          document.getElementById("errorIMC").innerHTML="El peso que ingrese debe ser positivo.";
      }
      else{
        document.getElementById("errorIMC").innerHTML="";
         
        /*CALCULO IMC*/
        var alturaCuadrado=alturaMetro*alturaMetro;
        var imc=peso/alturaCuadrado;
        document.getElementById("IMC").value=Math.round(imc*100)/100;     
        /*CALCULO DESCRIPCION IMC*/
        if(imc<16){
          document.getElementById("ESTADO").value="Delgadez Severa";    
        }
        else if(imc<17){
          document.getElementById("ESTADO").value="Delgadez Moderada";    
        }
        else if(imc<18.5){
          document.getElementById("ESTADO").value="Delgadez Aceptable";   
        }
        else if(imc<25){
          document.getElementById("ESTADO").value="Peso Normal";    
        }
        else if(imc<30){
          document.getElementById("ESTADO").value="Sobrepeso";    
        }
        else if(imc<35){
          document.getElementById("ESTADO").value="Obeso: Tipo I";    
        }
        else if(imc<40){
          document.getElementById("ESTADO").value="Obeso: Tipo II";   
        }
        else if(imc>=40){
          document.getElementById("ESTADO").value="Obeso: Tipo III";    
        }
      }
  }
}



function hola(){
	alert("hola mundo");
}




function limpiar(){
	document.getElementById("altura").value="";
	document.getElementById("peso").value="";
	document.getElementById("IMC").value="";
	document.getElementById("ESTADO").value="";
	document.getElementById("errorIMC").innerHTML="";

}


function soloNumeros(e){
	var key = window.Event ? e.which : e.keyCode
	return (key >= 48 && key <= 57)
}
//hola();