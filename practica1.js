// primera practica

alert("Ciudades disponibles, Tame, Bogota, Sogamoso, Pamplona")

let ciudad = prompt("Ingresa un pueblo de la lista enterior")
ciudad = ciudad.toLocaleLowerCase()

if (ciudad === "tame" ) {
    alert("la ciudad Tame pertenerce al departamento de Arauca")
} else if (ciudad === "bogota") {
    alert("la ciudad Bogota pertenerce al departamento de Bogota")
} else if (ciudad === "sogamoso") {
    alert("la ciudad Sogamoso pertenerce al departamento de Boyaca")
} else  if (ciudad === "pamplona") {
    alert("la ciudad Pamplona pertenerce al departamento de Norte de Santander")
} else {
    alert("que mal, ciudad no encontrada")  
} 