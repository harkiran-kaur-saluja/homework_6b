
let w = localStorage.getItem('wishlist');
let wish = w ? w : "";
wish = JSON.parse(wish || '[]');


let wishElement = document.querySelector(".cards-flex");
let template = document.getElementById("cart-item-template");

let addAllToCart = document.getElementById("addAllToCart");
addAllToCart.addEventListener('click', function(){
    let c = localStorage.getItem('cart');
    let cart = c ? c : "";
    cart = JSON.parse(cart || '[]');    
    
    
    for(let i of wish) {
        //console.log(item);
        cart.push(i);
        console.log(JSON.stringify(cart));
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    localStorage.setItem('wishlist', "[]");
    location.href="./homework_6/cart.html";
});

function loadAllBuns() {
    let subtotalNum = 0;
    for(let i of wish) {
        loadWishlistBun(i);
        subtotalNum += i.price;
    }
    let subtotal = document.getElementById("subtotal");
    subtotal.innerText = "$" + subtotalNum + ".00";
}


function loadWishlistBun(bun) {
    console.log(bun);
    let currentBun = template.content.cloneNode(true);
    currentBun.querySelector('#cart-image').src = "../img/original.jpg";
    currentBun.querySelector('.title').innerText = bun.name;
    currentBun.querySelector('.price').innerText = "$" + bun.price +".00";
    currentBun.querySelector('.quantity-value').innerText = bun.quantity;
    currentBun.querySelector('.glaze-value').innerText = bun.glaze;

    const del = currentBun.querySelector("#delete");
    del.addEventListener('click', function() {
        const index = wish.findIndex( function(item) {
            if (item.name == bun.name) {
                return true;
            }
        });
        wish.splice(index, 1);
        localStorage.setItem('wishlist', JSON.stringify(wish));
        wishElement.innerHTML = "";
        location.reload();
        loadAllBuns();
    });
    wishElement.appendChild(currentBun);
}

window.onload = function() {
    
    loadAllBuns();
}