//GETTING THE CONTAINER CARDS OF SHOP
const newCard = $('#containerCards');

//RENDERING PRODUCTS OF THE SHOP

function renderProducts(arrayProducts, etiquetaCardHTML){
    
    etiquetaCardHTML.html("");
    for(let product of arrayProducts){
        etiquetaCardHTML.append(`
        <article class="product">
        <div class="img-container">
        <img src="${product.img}" alt="product" class="product-img">
        <button class="bag-btn" id="addToCart" onclick="addToCart(${product.id})">
        <i class="fas fa-shopping-cart"></i>
        <span>añadir al carrito</span>
        </button>
        </div>
        <h3>${product.name}</h3>
        <p>$ ${product.price}</p>
        <p> <b>3</b> cuotas sin interés de ${(product.price / 2)}</p>
        </article>
        `);
    }
    
}
renderProducts(products, newCard);