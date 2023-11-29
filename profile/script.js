const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');

let profile = document.getElementById('profile');
let productsGrid = document.getElementById('user-products-grid');

let url = 'https://my-json-server.typicode.com/BSenichak/branching-test';

//User details request
let userRequest = new XMLHttpRequest();

userRequest.open('GET',`${url}/users/${id}`);
userRequest.responseType = 'json'
userRequest.onload = function() { 
    let user = userRequest.response;
    profile.innerHTML = `
        <img class="profile-img" src="${user.photo_url}">
        <div class="text">
            <h1>${user.name}</h1>
            <h2>${user.sirname}</h2>
            <p>Balance: ${user.balance}$</p>
        </div>
    `
}

userRequest.send();


//User products request
let productsRequest = new XMLHttpRequest();

productsRequest.open('GET',`${url}/products?author_id=${id}`);
productsRequest.responseType = 'json'
productsRequest.onload = function() { 
    let products = productsRequest.response;
    productsGrid.innerHTML = null;
    products.forEach(p => {
        productsGrid.innerHTML += `
            <div class="product">
            <img class='product-photo' src='${p.imgUrl}' alt='${p.name}'>
            <h2 class='product-name'>${p.name}</h2><br>
            <p class='product-description'><b>Description: </b>${p.description}</p>
            <div class="price-bar">
                <p class='product-price'>${p.price}$</p>
                <button onclick="addProductToCart(${p.id})"><i class="fa-solid fa-basket-shopping"></i></button>
            </div>
            </div>
        `;
    });
}

productsRequest.send();