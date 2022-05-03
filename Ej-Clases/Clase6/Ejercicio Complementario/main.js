// -------- ORDENAR PERSONAS POR EDAD -----------


class People{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}

let person = []

person.push(new People('Santi', 25));
person.push(new People('Juan', 21));
person.push(new People('pedro', 12));
person.push(new People('maria', 21));
person.push(new People('Jesús', 79));



function Ordenar(a, b){

    if(a.age > b.age) {
        return 1; // Retorna 1 para que, si a es mayor que b, lo mande mas atras del array.
    }else if(a.age < b.age){
        return -1; // Retorna -1 para que, si a es menor que b, lo mande mas al principio del array.
    }else if(a.name.toLowerCase() > b.name.toLowerCase()){
        return -1; //Uso lower case para que no genere conflictos la primer letra mayúsucula cuando ordene.
    }else if(a.name.toLowerCase() < b.name.toLowerCase()){
        return -1;
    }else{
        return 0;
    }
}


console.log(person.sort(Ordenar));