document.querySelector(".cartButton").addEventListener("click", () => {
    document.querySelector("#cart-products").classList.toggle("hide");
});

let cartProd = document.getElementById("cart-products");

let cart = [];
if (localStorage.getItem("cart")) {
    cart = JSON.parse(localStorage.getItem("cart"));
    drawCartProducts();
}

function addProductToCart(id) {
    let product = productsArray.find(function (p) {
        return p.id == id;
    });
    cart.push(product);
    drawCartProducts();
    localStorage.setItem("cart", JSON.stringify(cart));
    setTimeout(function () {
        document.getElementById("cart-button").classList.remove("active");
    }, 500);
}

function drawCartProducts() {
    if (cart.length === 0) return (cartProd.innerHTML = "Cart is empty");
    cartProd.innerHTML = null;
    let sum = 0;
    cart.forEach(function (p) {
        cartProd.innerHTML += `
            <p>
            <img src="${p.imgUrl}"><span>${p.name}</span><span>${p.price}$</span>
            </p>
        `;
        sum += Number(p.price);
    });
    cartProd.innerHTML += `
        <p class="total">Total Price: ${sum.toFixed(2)}$</p>
        <button onclick="buyAll()">Buy All</button>
    `;
}

function buyAll() {
    cart = [];
    cartProd.innerHTML = "Money was withdrawn from your credit card";
    localStorage.setItem("cart", "[]");
}
