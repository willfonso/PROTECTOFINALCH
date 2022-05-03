const divFilter = $('#filter-links');


$("#filtroMate").click((e)=>{
    e.preventDefault(); //que no recargue la pág.
    const filterMate = products.filter(e => e.cat == "Mate");
    $("#filtroMate").css({"color":"#f9bc60"})
    renderProducts(filterMate, newCard);
    $("#limpiarFiltro").css({"display":"flex", "background-color":"#f9bc60", "border-radius":"5px", "padding":"0 5px"});

})

$("#filtroTermo").click((e)=>{
    e.preventDefault(); //que no recargue la pág.
    const filterTermo = products.filter(e => e.cat == "Termo");
    $("#filtroTermo").css({"color":"#f9bc60"})
    renderProducts(filterTermo, newCard);
    $("#limpiarFiltro").css({"display":"flex", "background-color":"#f9bc60", "border-radius":"5px", "padding":"0 5px"});
})

$("#filtroYerbera").click((e)=>{
    e.preventDefault(); //que no recargue la pág.
    const filterYerbera = products.filter(e => e.cat == "Yerbera");
    $("#filtroYerbera").css({"color":"#f9bc60"})
    renderProducts(filterYerbera, newCard);
    $("#limpiarFiltro").css({"display":"flex", "background-color":"#f9bc60", "border-radius":"5px", "padding":"0 5px"});
})

$("#filtroBombilla").click((e)=>{
    e.preventDefault(); //que no recargue la pág.
    const filterBombilla = products.filter(e => e.cat == "Bombilla");
    $("#filtroBombilla").css({"color":"#f9bc60"})
    renderProducts(filterBombilla, newCard);
    $("#limpiarFiltro").css({"display":"flex", "background-color":"#f9bc60", "border-radius":"5px", "padding":"0 5px"});
})

$("#limpiarFiltro").click((e)=>{
    e.preventDefault();
    let clearFilter = products
    renderProducts(clearFilter, newCard);
    $("#limpiarFiltro").css("display", "none");
    $("#filtroMate").css("color", "black");
    $("#filtroTermo").css("color", "black");
    $("#filtroYerbera").css("color", "black");
    $("#filtroBombilla").css("color", "black");
})

function addedToCart(){
    $("#addedToCartSpan").css("display", "block");
    $("#addedToCart").css("display", "flex");
    $("#addedToCart").slideDown("slow", () =>{
        $("#addedToCart").delay(1000).slideUp("slow");
    });
}