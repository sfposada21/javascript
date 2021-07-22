// Ejemplo Swith
let nombre = prompt("ingresa tu nombre : ");
let color = prompt("Ingresa tu color favorito");

switch (color) {
  case "Amarillo":
    alert("Eres una persona alegre");
    break;

  case "Azul":
    alert("Eres una persona Tranqila");
    break;

  case "Verde":
    alert("Eres una persona saludable");
    break;

  default:
    alert("Ingresa un color valido");
    break;
}
