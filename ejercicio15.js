// Operaciones - suma de dos numeros 

const suma = () =>{
    let num1 = parseFloat(prompt("ingrese el numero 1 : "));
    let num2 = parseFloat(prompt("ingrese el numero 2 : "));

    let resultado = parseFloat(num1) + parseFloat(num2);
    alert(resultado);
    console.log(resultado);
};

const resta = () =>{
    let num1 = parseFloat(prompt("ingrese el numero 1 : "));
    let num2 = parseFloat(prompt("ingrese el numero 2 : "));

    let resultado = parseFloat(num1) - parseFloat(num2);
    alert(resultado);
    console.log(resultado);
};

const multiplicar = () =>{
    let num1 = parseFloat(prompt("ingrese el numero 1 : "));
    let num2 = parseFloat(prompt("ingrese el numero 2 : "));

    let resultado = parseFloat(num1) * parseFloat(num2);
    alert(resultado);
    console.log(resultado);
};

const dividir = () =>{
    let num1 = parseFloat(prompt("ingrese el numero 1 : "));
    let num2 = parseFloat(prompt("ingrese el numero 2 : "));

    if (num2 === 0) {
        alert("No se puede dividir por 0 ");
    } else {
        let resultado = parseFloat(num1) / parseFloat(num2);
        alert(resultado);
        console.log(resultado);
    }
    
};

