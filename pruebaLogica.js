// VARIABLES
let puntaje = 10;
let valores = document.getElementById("valores");
let btnP1 = document.getElementById("btnP1");
let btnP2 = document.getElementById("btnP2");
let btnP3 = document.getElementById("btnP3");
let btnP4 = document.getElementById("btnP4");
let btnP5 = document.getElementById("btnP5");
let btnP6 = document.getElementById("btnP6");
let btnP7 = document.getElementById("btnP7");


let labelCarolina = document.getElementById("carolina");
let labelJuan = document.getElementById("juan");
let labelStiven = document.getElementById("stiven");
let labelAnthony = document.getElementById("anthony");
let labelJulian = document.getElementById("julian");
let labelCamilo = document.getElementById("camilo");


labelCarolina.style.display = "none";
labelJuan.style.display = "none";
labelStiven.style.display = "none";
labelAnthony.style.display = "none";
labelJulian.style.display = "none";
labelCamilo.style.display = "none";

// FUNCIONES 
const puntos = () => {
    if (puntaje >= 1) {
        puntaje -= 1;
        valores.innerHTML = "Los puntos restantes son: " + puntaje;
    } else {
        alert("Perdiste todos tus puntos, ya no puedes jugar más!");
        document.getElementById("btnP2").disabled = true;
        document.getElementById("btnP3").disabled = true;
        document.getElementById("btnP4").disabled = true;
        document.getElementById("btnP5").disabled = true;
        document.getElementById("btnP6").disabled = true;
        document.getElementById("btnP7").disabled = true;
    }
};

const P2 = () => {

    let nombre = prompt("Ingresa el nombre : ")
    nombre=nombre.toLowerCase();
    if (nombre == "juan huertas" && puntaje > 0) {
        labelJuan.style.display = "block"
        document.getElementById("btnP2").disabled = true;
    } else { puntos() }
};

const P3 = () => {

    let nombre = prompt("Ingresa el nombre : ")
    nombre=nombre.toLowerCase();
    if (nombre == "stiven posada" && puntaje > 0) {
        labelStiven.style.display = "block"
        document.getElementById("btnP3").disabled = true;
    } else { puntos() }
};

const P4 = () => {

    let nombre = prompt("Ingresa el nombre : ")
    nombre=nombre.toLowerCase();
    if (nombre == "anthony jordan" && puntaje > 0) {
        labelAnthony.style.display = "block"
        document.getElementById("btnP4").disabled = true;
    } else { puntos() }
};
const P5 = () => {

    let nombre = prompt("Ingresa el nombre : ")
    nombre=nombre.toLowerCase();

    if (nombre == "julian rodriguez" && puntaje > 0) {
        labelJulian.style.display = "block"
        document.getElementById("btnP5").disabled = true;
    } else { puntos() }
};

const P6 = () => {

    let nombre = prompt("Ingresa el nombre : ")
    nombre=nombre.toLowerCase();
    console.log(nombre);
    if (nombre == "camilo rodriguez" && puntaje > 0) {
        labelCamilo.style.display = "block"
        document.getElementById("btnP6").disabled = true;
    } else { puntos() }
};

const P7 = () => {

    let nombre = prompt("Ingresa el nombre : ")
    nombre=nombre.toLowerCase();
    if (nombre == "carolina chacon" && puntaje > 0) {
        labelCarolina.style.display = "block"
        document.getElementById("btnP7").disabled = true;
    } else { puntos() }
};


// EVENTOS 

btnP2.onclick = function () {
    P2();
};
btnP3.onclick = function () {
    P3();
};
btnP4.onclick = function () {
    P4();
};
btnP5.onclick = function () {
    P5();
};
btnP6.onclick = function () {
    P6();
};
btnP7.onclick = function () {
    P7();
};


