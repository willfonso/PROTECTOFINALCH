const containerLatestProd = document.getElementById('container-card');

fetch('../json/data.json')
    .then(response => response.json())
        .then(data => {
           data.forEach(user => {
                containerLatestProd.innerHTML += `
                <a href="../HTML/products.html">
                <div class="product">
                    <img src="${user. img}" alt="">
                    <div class="card-description">
                        <span class="card-tittle">${user.name}</span>
                        <span class="card-price">$ ${user.price}</span>
                        <span><b>3</b> cuotas sin interés de ${(user.price / 2)}</span>
                    </div>
                </div>
                </a>
            `})
})