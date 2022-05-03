function calc(value){
    return tax = 0.10 * value;
}

class Products{

    constructor(name, price) {
    this.name = name;
    this.price = price;
    }

    line(){
        return `${this.name} ----------- ${this.price}`
    }

    iva(){
        return this.price = this.price * 1.21;
    }

}

let products = [];

products.push(new Products("Pantalón", 5000));
products.push(new Products("Remera", 3000));
products.push(new Products("Medias", 1000));
products.push(new Products("Buzo", 8000));


for (let a = 0; a < products.length; a++){
    products[a].iva();
}

i = 0;
let priceIva = 0;

alert(`Bienvenido, a continuación podra elegir productos según su necesidad.`)

while(i < 5){
    let num = parseInt(prompt(`Elija el numero de su producto a continuación. Si ha terminado su selección, presione 0. 
    1- ${products[0].line()}
    2- ${products[1].line()}
    3- ${products[2].line()}
    4- ${products[3].line()}`))

    if(num == null || isNaN(num) || num > 4){
        alert("Valor incorrecto. Por favor, recuerde ingresar SÓLO EL NÚMERO correspondiente a su producto.")
    }else if(num == 1 || num == "1"){
        priceIva = priceIva + products[0].price;
        i=1
    }else if(num == 2 || num == "2"){
        priceIva = priceIva + products[1].price;
        i=1
    }else if(num == 3 || num == "3"){
        priceIva = priceIva + products[2].price;
        i=1
    }else if(num == 4 || num == "4"){
        priceIva = priceIva + products[3].price;
        i=1
    }else if(num == 0 || num == "0"){
        i=100
    }
}

alert(`El precio total de sus productos abonando con tarjeta es: $ ${priceIva}
Pagando al contado tiene un 10% de descuento, ahorrando: $ ${calc(priceIva)} y quedandole un precio de: ${priceIva - calc(priceIva)}`)

