// CART BUTTONS
let buttonShowCart = document.getElementById('open-cart');
let buttonHideCart = document.getElementById('close-cart');

//MENU MOBILE BUTTONS
let buttonShowMenu = document.getElementById('show-menu');
let buttonHideMenu = document.getElementById('hide-menu');


// FUNCTIONS OF CART AND MENU-MOBILE
buttonShowMenu.onclick = function(){
    document.getElementById("navLinks").style.display = 'flex';
    document.getElementById("navLinks").style.right = '0';   
}
    
buttonHideMenu.onclick = function(){
    document.getElementById("navLinks").style.right = '-200px';
    document.getElementById("navLinks").style.display = 'none';
}