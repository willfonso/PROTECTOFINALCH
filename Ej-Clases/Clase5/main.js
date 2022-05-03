function calc(value){
    return tax = value - (0.35 * value);
}

class Products{

    constructor(name, price) {
    this.name = name;
    this.price = price;
    }

    line(){
        return `${this.name} ----------- ${this.price}`
    }

}

const product1 = new Products("Pantalón", 5000);
const product2 = new Products("Remera", 3000);
const product3 = new Products("Medias", 1000);
const product4 = new Products("Buzo", 8000);

i = 0;
let totalPrice = 0;

alert(`Bienvenido, a continuación podra elegir productos según su necesidad.`)

while(i < 5){
    let num = parseInt(prompt(`Elija el numero de su producto a continuación. Si ha terminado su selección, presione 0. 
    1- ${product1.line()}
    2- ${product2.line()}
    3- ${product3.line()}
    4- ${product4.line()}`))

    if(num == null || isNaN(num) || num > 4){
        alert("Valor incorrecto. Por favor, recuerde ingresar SÓLO EL NÚMERO correspondiente a su producto.")
    }else if(num == 1 || num == "1"){
        totalPrice = totalPrice + 5000;
        i=1
    }else if(num == 2 || num == "2"){
        totalPrice = totalPrice + 3000;
        i=1
    }else if(num == 3 || num == "3"){
        totalPrice = totalPrice + 1000
        i=1
    }else if(num == 4 || num == "4"){
        totalPrice = totalPrice + 8000;
        i=1
    }else if(num == 0 || num == "0"){
        i=100
    }
}

alert(`El precio total de sus productos es: $ ${totalPrice}
El valor de impuestos que usted paga por su compra es de: $ ${calc(totalPrice)}`)

