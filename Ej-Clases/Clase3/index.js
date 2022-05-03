alert(`Bienvenido, podrá ingresar hasta 20 productos para crear una lista de Supermercado. \n\nComencemos:`);

let list = '';

for(let i = 1; i<21; i++){

    let item = prompt(`${i}. Ingrese su producto o, de lo contrario, el numero 0 para finalizar la lista.`)

    if (item == 0 || item == '0'){
        i=100;

    }else if (item == null || item == '' || !isNaN(item)){
        alert(`Ingreso incorrecto, por favor vuelva a intentar.`);
        i = i-1;

    }else{
        list += `\n ${i} - ${item}`;
    }

}

alert(list);
