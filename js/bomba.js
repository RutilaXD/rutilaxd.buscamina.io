/*
  @author: Raúl Guadarrama (c) 2018
  Script de un juego de buscaminas
*/

function start(){
  // Matriz de minas
  // 1 = bomba 0= nada
  var campo=[ [ 1, 0, 0], 
              [ 0, 1, 0], 
              [ 1, 1, 1] ];

  //Variable para mostrar la condición del ganador
  var textos = [ "¡Ganaste! ;)", "¡Explotaste! :("];
  //posiciones de las minas ingresadas por usuario
  var x, y;

  alert("Estás en una campo minado\n" + 
   "Elige una posición entre el 0 y el 2 para X y para Y");

  //Pedimos ingrese las posiciones
  x =(prompt("Posición en X (entre 0 y 2)",0));
  y =(prompt("Posición en Y (entre 0 y 2)",0));
  //convertimos variables
  x = parseFloat(x);
  y = parseFloat(y);

  //Evaluamos que haya escrito una opción válida
  if(x < 3 && y < 3){
    //Guardamos en otra variable la posición relacionada
    //a la opción ingresada por el usuario
    var posicion = campo[x][y];
    //Le indicamos si ganó o perdió
    document.getElementById('caja').innerHTML = "";
    document.getElementById('caja').innerHTML += "<h1> " + textos[posicion]+"</h1>";  
    
    //mandamos a llamar las funciones
    if(posicion == 1) explosion();
    else ganaste();
  }else{
    //En caso de haber escrito mal la opción se lo indicamos
    document.write("Te saliste del campo");
    explosion();
  }  
}

//Funcion que indica que se ha elegido una mina
function explosion(){
  alert("¡¡¡BOOM!!!");
  document.getElementById('caja').innerHTML += "<h1> ¡¡¡Boom!!!, Elegiste un area minada </h1>";
  document.getElementById('btn').value = "Otra oportunidad";
}

function ganaste(){
  alert("¡¡Ganaste!! :)");
  document.getElementById('caja').innerHTML += "<h1>Has pasado la prueba<h1>";
  document.getElementById('btn').value = "Reiniciar";
  
}