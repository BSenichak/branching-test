let productsGrid = document.getElementById("products-grid");
let productsArray = [];
let xhr = new XMLHttpRequest();
let url = "https://market-7581.restdb.io/rest/products";
let apikey = "6579ac30993e5f4d3fd25229"

xhr.open("GET", url);
xhr.setRequestHeader("content-type", "application/json");
xhr.setRequestHeader("x-apikey", apikey);
xhr.setRequestHeader("cache-control", "no-cache");
xhr.responseType = "json";
xhr.onload = function () {
    productsArray = xhr.response;
    productsGrid.innerHTML = null;
    productsArray.forEach((p) => {
        productsArray.push(p);
        let pElem = document.createElement("div");
        pElem.classList.add("product");
        pElem.innerHTML = `
            <img class='product-photo' src='${p.imgUrl}' alt='${p.name}'>
            <h2 class='product-name'>${p.name}</h2><br>
            <p class='product-description'><b>Description: </b>${p.description}</p>
            <a href='profile/profile.html?id=${p.author_id}'>Seller profile</a>
            <div class="price-bar">
                <p class='product-price'>${p.price}$</p>
                <button onclick="addProductToCart(${p.id})"><i class="fa-solid fa-basket-shopping"></i></button>
            </div>
        `;
        productsGrid.append(pElem);
    });
};
xhr.send();
