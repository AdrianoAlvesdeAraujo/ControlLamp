/**
 *  JS - Aula8: Controle de uma lâmpada
 * @author Adriano Alves
 */

function on() {
  document.getElementById("lamp").src = "on.jpg";
}

function off() {
  document.getElementById("lamp").src = "off.jpg";
}

function blink() {
  var intervalo = 0;
  var contador = 0;

  while (contador < 30) {
    intervalo += 300;
    setTimeout("document.getElementById('lamp').src='on.jpg'", intervalo);
    intervalo += 300;
    setTimeout("document.getElementById('lamp').src='off.jpg'", intervalo);
    contador++;
  }
}
