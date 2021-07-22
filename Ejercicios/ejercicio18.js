let btnA1 = document.getElementById("btnA1");
let btnB2 = document.getElementById("btnB2");
let btnC3 = document.getElementById("btnC3");
let btnD4 = document.getElementById("btnD4");
let btnE5 = document.getElementById("btnE5");
let btnF6 = document.getElementById("btnF6");
let btnG7 = document.getElementById("btnG7");
let btnH8 = document.getElementById("btnH8");
let btnI9 = document.getElementById("btnI9");
let btnJ0 = document.getElementById("btnJ0");
let letradiv = document.getElementById("letra");
let numerodiv = document.getElementById("numero");

let numeros = 1;
let letras = 1;

//funciones
const insertA1 = () => {
  if (letras == 11 && numeros == 1) {
    numerodiv.innerHTML = "1";
    numeros = 2;
  } else if(letras == 11 && numeros > 1){
      alert("Ya esta");
    }
  
  if (letras == 1) {
    letradiv.innerHTML = "A";
    letras = 2;
  } else if (letras > 1){
    alert("Ya esta");
  }
};

const insertB2 = () => {
    if (letras == 11 && numeros == 2) {
        numerodiv.innerHTML += "2";
        numeros = 3;
      } else if(letras == 11 && numeros > 2){
          alert("Ya esta");
        } else if(letras == 11 && numeros < 2){
            alert("Falta Numeros");
          }
      
      else if (letras == 2) {
        letradiv.innerHTML += "B";
        letras = 3;
      } else if(letras > 2){
        alert("Ya esta");
      } else if(letras < 2){
          alert("Falta Letras");
        }};

const insertC3 = () => {
    if (letras == 11 && numeros == 3) {
        numerodiv.innerHTML += "3";
        numeros = 4;
      } else if(letras == 11 && numeros > 3){
          alert("Ya esta");
        } else if(letras == 11 && numeros < 3){
            alert("Falta Numeros");
          }
      
      else if (letras == 3) {
        letradiv.innerHTML += "C";
        letras = 4;
      } else if(letras > 3){
        alert("Ya esta");
      } else if(letras < 3){
          alert("Falta Letras");         
        }};



const insertD4 = () => {
    if (letras == 11 && numeros == 4) {
        numerodiv.innerHTML += "4";
        numeros = 5;
      } else if(letras == 11 && numeros > 4){
          alert("Ya esta");
        } else if(letras == 11 && numeros < 4){
            alert("Falta Numeros");
          }
      
      else if (letras == 4) {
        letradiv.innerHTML += "D";
        letras = 5;
      } else if(letras > 4){
        alert("Ya esta");
      } else if(letras < 4){
          alert("Falta Letras");         
        }};


const insertE5 = () => {
    if (letras == 11 && numeros == 5 ) {
        numerodiv.innerHTML += "5";
        numeros = 6;
      } else if(letras == 11 && numeros > 5) {
          alert("Ya esta");
        } else if(letras == 11 && numeros < 5 ){
            alert("Falta Numeros");
          }
      
      else if (letras == 5) {
        letradiv.innerHTML += "E";
        letras = 6;
      } else if(letras > 5){
        alert("Ya esta");
      } else if(letras < 5){
          alert("Falta Letras");         
        }};


const insertF6 = () => {
    if (letras == 11 && numeros == 6 ) {
        numerodiv.innerHTML += "6";
        numeros = 7;
      } else if(letras == 11 && numeros > 6) {
          alert("Ya esta");
        } else if(letras == 11 && numeros < 6 ){
            alert("Falta Numeros");
          }
      
      else if (letras == 6) {
        letradiv.innerHTML += "F";
        letras = 7;
      } else if(letras > 6){
        alert("Ya esta");
      } else if(letras < 6){
          alert("Falta Letras");         
        }};


const insertG7 = () => {
    if (letras == 11 && numeros == 7 ) {
        numerodiv.innerHTML += "7";
        numeros = 8;
      } else if(letras == 11 && numeros > 7) {
          alert("Ya esta");
        } else if(letras == 11 && numeros < 7 ){
            alert("Falta Numeros");
          }
      
      else if (letras == 7) {
        letradiv.innerHTML += "G";
        letras = 8;
      } else if(letras > 7){
        alert("Ya esta");
      } else if(letras < 7){
          alert("Falta Letras");         
        }};



const insertH8 = () => {
    if (letras == 11 && numeros == 8 ) {
        numerodiv.innerHTML += "8";
        numeros = 9;
      } else if(letras == 11 && numeros > 8) {
          alert("Ya esta");
        } else if(letras == 11 && numeros < 8 ){
            alert("Falta Numeros");
          }
      
      else if (letras == 8) {
        letradiv.innerHTML += "H";
        letras = 9;
      } else if(letras > 8){
        alert("Ya esta");
      } else if(letras < 8){
          alert("Falta Letras");         
        }};




const insertI9 = () => {
    if (letras == 11 && numeros == 9 ) {
        numerodiv.innerHTML += "9";
        numeros = 10;
      } else if(letras == 11 && numeros > 9) {
          alert("Ya esta");
        } else if(letras == 11 && numeros < 9 ){
            alert("Falta Numeros");
          }
      
      else if (letras == 9) {
        letradiv.innerHTML += "I";
        letras = 10;
      } else if(letras > 9){
        alert("Ya esta");
      } else if(letras < 9){
          alert("Falta Letras");         
        }};


const insertJ0 = () => {
    if (letras == 11 && numeros == 10 ) {
        numerodiv.innerHTML += "0";
        numeros = 11;
        alert("Finalizaste Numeros !!");
      } else if(letras == 11 && numeros > 10) {
          alert("Ya esta");
        } else if(letras == 11 && numeros < 10 ){
            alert("Falta Numeros");
          }
      
      else if (letras == 10) {
        letradiv.innerHTML += "J";
        letras = 11;
        alert("Finalizaste Letras !!");
      } else if(letras > 10){
        alert("Ya esta");
      } else if(letras < 10){
          alert("Falta Letras");         
        }};




//eventos
btnA1.onclick = function () {
  insertA1();
};
btnB2.onclick = function () {
  insertB2();
};
btnC3.onclick = function () {
  insertC3();
};
btnD4.onclick = function () {
  insertD4();
};
btnE5.onclick = function () {
  insertE5();
};
btnF6.onclick = function () {
  insertF6();
};
btnG7.onclick = function () {
  insertG7();
};
btnH8.onclick = function () {
  insertH8();
};
btnI9.onclick = function () {
  insertI9();
};
btnJ0.onclick = function () {
  insertJ0();
};
