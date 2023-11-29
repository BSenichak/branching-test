let productsGrid = document.getElementById("products-grid");
let productsArray = [];
let xhr = new XMLHttpRequest();
let url = "https://my-json-server.typicode.com/BSenichak/branching-test/db";

xhr.open("GET", url);
xhr.responseType = "json";
xhr.onload = function () {
    productsArray = xhr.response.products;
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
