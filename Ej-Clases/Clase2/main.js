alert("Bienvenido, en este programa haremos una calculadora con operaciones matematicas basicas: suma, resta, division o multiplicacion. Comencemos:");

const firstNum = parseInt(prompt("Ingrese un numero: "));
const secNum = parseInt(prompt("Ingrese el segundo numero: "));
const op = parseInt(prompt("Si quiere realizar una suma, ingrese: 1 \nSi quiere realizar una resta, ingrese: 2 \nSi quiere realizar una division, ingrese: 3 \nSi quiere realizar una multiplicacion, ingrese: 4"));

if(op === 1){
    let resultado = (firstNum + secNum);
    alert(`El resultado de la suma es: ${resultado}`);
}else if(op === 2){
    let resultado = (firstNum - secNum);
    alert(`El resultado de la resta es: ${resultado}`);
}else if(op === 3){
    let resultado = (firstNum / secNum);
    alert(`El resultado de la division es: ${resultado}`);
}else if(op === 4){
    let resultado = (firstNum * secNum);
    alert(`El resultado de la multiplicacion es: ${resultado}`);
}else{
    alert(`El numero de operación ingresado no es correcto.`);
}

// Tendría que hacer una condición que sea recursiva para chequear si el numero 
// para la operación esta entre los valores que se pide, pero no lo vimos en el curso todavía.
// Usé template String asi no concatenaba textos largos, espero no sea un problema.