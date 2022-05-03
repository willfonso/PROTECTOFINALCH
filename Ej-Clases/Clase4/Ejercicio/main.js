alert(`Bienvenido, aquí podrá obtener cuánto está pagando de 
impuestos según el valor total de su factura`)

let price = parseInt(prompt(`Por favor, ingrese el valor total:`));


function calc(value){
    return tax = value - (0.35 * value);
}

alert(`El total de impuestos que usted paga es: $ ${calc(price)}`);
