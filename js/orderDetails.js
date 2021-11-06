'use strict';

function Bun(bunName, bunImg, bunQuantity, bunGlaze) {
    this.name = bunName;
    this.img = bunImg;
    this.quantity = bunQuantity;
    this.glaze = bunGlaze;
    this.price = 4.00 * bunQuantity;
}

 let numClicksOne = 0;
 let numClicksThree = 0;
 let numClicksSix = 0;
 let numClicksTwelve = 0;

 let numItemsAdded = 0;

 let sizeSelectedOne = false;
 let sizeSelectedThree = false;
 let sizeSelectedSix = false;
 let sizeSelectedTwelve = false;


 let one = document.getElementById('one');
 console.log(one);
 one.addEventListener('click', function(){
     console.log('clicking');
     numClicksOne ++;
     console.log(one.style.backgroundColor);
     if(numClicksOne % 2 === 1 && sizeSelectedThree === false && sizeSelectedSix === false && sizeSelectedTwelve === false) {
        one.style.backgroundColor = '#CFCFCF';
        sizeSelectedOne = true;
     }
     else {
         one.style.backgroundColor = '#EFC65B';
         sizeSelectedOne = false;
     }
 });

 let three = document.getElementById("three");
 console.log(three);
 three.addEventListener('click', function(){
    console.log('clicking');
    numClicksThree ++;
    if(numClicksThree % 2 === 1  && sizeSelectedOne === false && sizeSelectedSix === false && sizeSelectedTwelve === false) {
        three.style.backgroundColor = '#CFCFCF';
        sizeSelectedThree = true;
    }
    else {
        three.style.backgroundColor = '#EFC65B';
        sizeSelectedThree = false;
    }

 });

 let six = document.getElementById("six");
 console.log(six);
 six.addEventListener('click', function(){
    console.log('clicking');
    numClicksSix ++;
    if(numClicksSix % 2 === 1  && sizeSelectedThree === false && sizeSelectedOne === false && sizeSelectedTwelve === false) {
        six.style.backgroundColor = '#CFCFCF';
        sizeSelectedSix = true;
    }
    else {
        six.style.backgroundColor = '#EFC65B';
        sizeSelectedSix = false;
    }
 });

 let twelve = document.getElementById("twelve");
 console.log(twelve);
 twelve.addEventListener('click', function(){
    console.log('clicking');
    numClicksTwelve ++;
    if(numClicksTwelve % 2 === 1  && sizeSelectedThree === false && sizeSelectedSix === false && sizeSelectedOne === false) {
        twelve.style.backgroundColor = '#CFCFCF';
        sizeSelectedTwelve = true;
    }
    else {
        twelve.style.backgroundColor = '#EFC65B';
        sizeSelectedTwelve = false;
    }
 });

let addToCartOriginal = document.getElementById("addToCartOriginal");
addToCartOriginal.addEventListener('click', function(){
    let name = document.getElementById("detail-title").innerText;
    let quantity = 1;

    if(sizeSelectedOne === true) {
        quantity = 1;
    }
    else if(sizeSelectedThree === true) {
        quantity = 3;
    }
    else if(sizeSelectedSix === true) {
        quantity = 6;
    }
    else if(sizeSelectedTwelve === true) {
        quantity = 12;
    }

    let glaze = document.getElementById("glaze");
    let chosenGlaze = glaze.options[glaze.selectedIndex].value;
 
    let c = localStorage.getItem('cart');
    let cart = c ? c : "";
    cart = JSON.parse(cart || '[]');
    let item = new Bun(name,"../img/original.jpg", quantity, chosenGlaze);
    //console.log(item);
    cart.push(item);
    //console.log(JSON.stringify(cart));
    localStorage.setItem('cart', JSON.stringify(cart));
    location.href="./homework_6a/cart.html";

});

let wishOriginal = document.getElementById("wishlistOriginal");
wishOriginal.addEventListener('click', function(){
    let name = document.getElementById("detail-title").innerText;
    let quantity = 1;

    if(sizeSelectedOne === true) {
        quantity = 1;
    }
    else if(sizeSelectedThree === true) {
        quantity = 3;
    }
    else if(sizeSelectedSix === true) {
        quantity = 6;
    }
    else if(sizeSelectedTwelve === true) {
        quantity = 12;
    }

    let glaze = document.getElementById("glaze");
    let chosenGlaze = glaze.options[glaze.selectedIndex].value;
 
    let w = localStorage.getItem('wishlist');
    let wish = w ? w : "";
    wish = JSON.parse(wish || '[]');
    let item = new Bun(name,"../img/original.jpg", quantity, chosenGlaze);
    console.log(item);
    wish.push(item);
    console.log(JSON.stringify(wish));
    localStorage.setItem('wishlist', JSON.stringify(wish));
    location.href="./homework_6a/wish.html";

});

