const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');

let product = document.getElementById('product');
let url = 'https://my-json-server.typicode.com/BSenichak/branching-test';

//User details request
let userRequest = new XMLHttpRequest();

userRequest.open('GET',`${url}/products?id=${id}`);
userRequest.responseType = 'json'
userRequest.onload = function() { 
    let p = userRequest.response[0];
    product.innerHTML = `
        <h2 class='product-name'>${p.name}</h2>
        <img class='product-photo' src='${p.imgUrl}' alt='${p.name}'>
        <p class='product-price'><b>Price: </b>${p.price}$</p>
        <p class='product-description'><b>Description: </b>${p.description}</p>
        <a href='userProfile.html?id=${p.author_id}'>Seller profile</a>
        <button onclick="addProductToCart(${p.id})">Buy</button>
    `
}

userRequest.send();
