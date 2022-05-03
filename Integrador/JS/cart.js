const contenedorCartItems = document.querySelector(".cart-item");
const subTotalCarrito = document.querySelector(".cart-total");
const totalIconInCart = document.querySelector(".cart-items");
const cartContent = document.querySelector(".comprar");

buttonShowCart.onclick = function(){
    document.getElementById('cartV').style.visibility = 'visible';
    document.getElementById('cartT').style.transform = 'translateX(0%)';
}
    
buttonHideCart.onclick = function(){
    document.getElementById('cartV').style.visibility = 'hidden';
    document.getElementById('cartT').style.transform = 'translateX(100%)';
}



let cart = JSON.parse(localStorage.getItem("CART")) || [];
updateCart();

function addToCart(id){

    //Revisando si hay un producto que existe en el array de cart
    if(cart.some((item) => item.id === id)){
        cambiarNumeroUnidades("plus", id)
    }else{
        const item = products.find((product) => product.id === id)

        cart.push({
            ...item,
            numberOfUnits: 1,
        });
    }

    updateCart();

    //mostrar el mensaje "Añadido al carrito"
    addedToCart();

}


//actualizo el carrito
function updateCart(){
    renderCartItems();
    renderSubtotal();

    //guardo el carrito en local storage
    localStorage.setItem("CART", JSON.stringify(cart));
}



//calcular y renderizar el subtotal
function renderSubtotal(){
    let totalPrice = 0;
    let totalItems = 0;

    cart.forEach((item) => {
        totalPrice += item.price * item.numberOfUnits;
        totalItems += item.numberOfUnits;
    })

    subTotalCarrito.innerHTML = `${totalPrice.toFixed(2)}`;
    totalIconInCart.innerHTML = totalItems;
}




//renderizar items al carrito
function renderCartItems(){
    contenedorCartItems.innerHTML = ""; //para que no se dupliquen cada vez que se quiera agregar
    cart.forEach((item) => {
        contenedorCartItems.innerHTML += `
            <img src="${item.img}" alt="${item.name}">
            <div>
                <h4>${item.name}</h4>
                <h5>$ ${item.price}</h5>
                <span class="remove-item" onclick="sacarItemDelCarrito(${item.id})">Eliminar producto</span>
            </div>
            <div>
                <i class="fas fa-chevron-up" onclick="cambiarNumeroUnidades('plus', ${item.id})"></i>
                <p class="item-amount">${item.numberOfUnits}</p>
                <i class="fas fa-chevron-down" onclick="cambiarNumeroUnidades('minus', ${item.id})"></i>
            </div>
        `
    })
}

//Sacando items del carrito
function sacarItemDelCarrito(id){
   cart = cart.filter((item) => item.id !== id);

   updateCart();
}

//Cambiar numero de unidades de items
function cambiarNumeroUnidades(action, id){
    cart = cart.map((item) => {

        let numberOfUnits = item.numberOfUnits

        if(item.id === id){
            if(action === "minus" && numberOfUnits > 1){
                numberOfUnits--;
            }else if(action === "plus"){
                numberOfUnits++;
            }
        }

        return {
            ...item,
            numberOfUnits,
        };
    });

    updateCart();
}

cartContent.addEventListener("click", ()=>{
    cart = [];
    updateCart();
    successfulBuy();
})

function successfulBuy(){
    $("#compraExitosa").css("display", "block");
    $("#compraExitosa").slideDown("slow", () =>{
        $("#compraExitosa").delay(1000).slideUp("slow");
    });
}