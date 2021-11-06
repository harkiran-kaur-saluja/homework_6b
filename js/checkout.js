
let c = localStorage.getItem('cart');
let cart = c ? c : "";
cart = JSON.parse(cart || '[]');


let cartElement = document.querySelector(".cards-flex");
let template = document.getElementById("cart-item-template");


function loadAllBuns() {
    let subtotalNum = 0;
    for(let i of cart) {
        loadCheckoutBun(i);
        subtotalNum += i.price;
    }
    let subtotal = document.getElementById("subtotal");
    subtotal.innerText = "$" + subtotalNum + ".00";
}


function loadCheckoutBun(bun) {
    let currentBun = template.content.cloneNode(true);
    currentBun.querySelector('.title').innerText = bun.name;
    currentBun.querySelector('#cart-image').src = "../img/original.jpg";
    currentBun.querySelector('.price').innerText = "$" + bun.price +".00";
    currentBun.querySelector('.quantity-value').innerText = bun.quantity;
    currentBun.querySelector('.glaze-value').innerText = bun.glaze;

    const del = currentBun.querySelector("#delete");
    del.addEventListener('click', function() {
        const index = cart.findIndex( function(item) {
            if (item.name == bun.name) {
                return true;
            }
        });
        cart.splice(index, 1);
        localStorage.setItem('cart', JSON.stringify(cart));
        cartElement.innerHTML = "";
        location.reload();
        loadAllBuns();
    });
    cartElement.appendChild(currentBun);
}

window.onload = function() {
    
    loadAllBuns();
}

