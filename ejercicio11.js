// condicionales - switch

let nombre = prompt("Ingresa tu nombre")
let edad = prompt("Ingresa tu edad")

switch (edad) {
    case "18":
        alert("tienes acceso al catalogo deseado");
        break;

    default:
        alert("Estoy limitado");
        break;
}