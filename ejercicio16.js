let datos = document.getElementById("datos");


const nombreUsuario = () => {
    let nombre = prompt("ingresa tu nombre");
    alert(nombre);
    console.log(nombre);
};


//eventos
datos.onclick = function() {
    nombreUsuario();
}

