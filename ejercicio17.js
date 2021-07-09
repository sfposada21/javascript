let datos = document.getElementById("datos");

let nombrediv = document.getElementById("nombre");


const nombreUsuario = () => {
    let nombre = prompt("ingresa tu nombre");
    nombrediv.innerHTML = "Bienvenido "+nombre;
    console.log(nombre);
};


//eventos
datos.onclick = function() {
    nombreUsuario();
}

