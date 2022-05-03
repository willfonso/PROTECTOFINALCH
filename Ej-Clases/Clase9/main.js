const contenedorCard = document.getElementById('card');
let buttonShowCard = document.getElementById('button');

const card = [];

class Productos {
    constructor(tittle, text, img){
        this.tittle = tittle;
        this.text = text;
        this.img = img;
    }
}

const producto1 = new Productos('Card Generada', 'Texto generado', './img/irZAnzzL_400x400.jpg');

card.push(producto1);




function renderizarProductos(contenedor, card){

    card.forEach(producto => {
        const cardDiv = document.createElement('div');
        cardDiv.setAttribute('class', 'card');

        const imagen = document.createElement('img');
        imagen.setAttribute('src', producto.img);
        cardDiv.appendChild(imagen);

        const cardBodyDiv = document.createElement('div');
        cardBodyDiv.setAttribute('class', 'card-body');

        const titulo = document.createElement('h3');
        titulo.innerText = producto.tittle;
        cardBodyDiv.appendChild(titulo);

        const descripcion = document.createElement('p');
        descripcion.innerText = producto.text;
        cardBodyDiv.appendChild(descripcion);

        cardDiv.appendChild(cardBodyDiv);

        contenedor.appendChild(cardDiv);
    });

}



buttonShowCard.onclick = function(){
    renderizarProductos(contenedorCard, card);
}

