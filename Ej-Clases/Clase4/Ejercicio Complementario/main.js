function entry(){
    return parseInt(prompt(`Bienvenido, en esta página intentaremos determinar si un numero es par o impar. 
    Por favor, ingrese un numero entero:`));    
}


function even(value) {

    if (value % 2 === 0){
        return value = 0;
    }else{
        return value = 1;
    }

}

function show(value){2
    if(value == 0){
        alert(`El numero es par`)
    }else{
        alert(`El numero es impar`)
    }
}

show(even(entry()));