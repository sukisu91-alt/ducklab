import { ducksDatabase } from "./info-ducks.js";
//import { addShopping } from "./cart.js";

const detailDuck = document.getElementById("containerDuck");
const itemsCart = document.getElementById("containerCart");
const itemsDuck = document.getElementById("cartItems");
const summaryItems = document.getElementById("cartSummary");
const calcSubTotal = document.getElementById("subTotalDisplay");

let getQuantity = 1;
let shoppingCart = [];

function displayDetails(){
    detailDuck.classList.remove("hidden");
    itemsCart.classList.add("hidden");
}

function displayCart(){
    detailDuck.classList.add("hidden");
    itemsCart.classList.remove("hidden");
    showDucksCart();
}


function showSelectedDuck(){

    const urlGetId = new URLSearchParams(window.location.search);
    const getId = parseInt(urlGetId.get("id"));
    const selectedDuck = ducksDatabase.find(duck => duck.id === getId);

    if (selectedDuck){
        let descriptionDuck = "";
        Object.values(selectedDuck.description).forEach(descText => {
            descriptionDuck += `<li>${descText}</li>`;
        })
        detailDuck.innerHTML=
        `
            <img src="${selectedDuck.image}" alt="${selectedDuck.duckName}" id="selectedImg">
            <div class="detail-complet">
                <div class="title">
                    <h3 id="selectedTitle">Patito ${selectedDuck.duckName}</h3>
                </div>
                <div class="price">
                    <p>Precio: € ${selectedDuck.price}.00</p>
                </div>
                <p class="msjStock" id="stockNow"><b>Stock Disponible</b></p>
                <div class="container-buy">
                    <div class="container-quantity" id="quantity">
                        <button class="btn-quantity decrease" id="bt-decrease">-</button>
                        <span class="quantitytoBuy" id="quantityDucks">1</span>
                        <button class="btn-quantity increase" id="bt-increase">+</button>
                    </div>                   
                    <div class="container-add" id="add-cart">
                        <button type="button" class="bt-add" id="btAddCart">⍟ Añadir al carrito</button>
                    </div>
                </div>
                <div class="description">
                    <p><b>Descripción detallada:</b></p>
                    <ul>
                       ${descriptionDuck}
                    </ul>
                </div>
            </div>
        `
        
        quantityButtons(selectedDuck);
        addShoppingCartButton(selectedDuck);
    }
}

displayDetails();

function quantityButtons(duckToBuy){
    const decreaseBtn = document.getElementById('bt-decrease');
    const increaseBtn = document.getElementById('bt-increase');
    const quantityDisplay = document.getElementById('quantityDucks');
    const stockDuck = duckToBuy.stock;

    decreaseBtn.addEventListener("click", () => {
        if (getQuantity > 1){
            getQuantity--;
            quantityDisplay.textContent = getQuantity;
        }
    })

    increaseBtn.addEventListener("click", () => {
        if (getQuantity < stockDuck) {
            getQuantity++;
            quantityDisplay.textContent = getQuantity;
        }
    })
}

function addShoppingCartButton(duckToBuy){
    const addCartBtn = document.getElementById('btAddCart');

    addCartBtn.addEventListener("click", () => {
        const selectedQuantity = getQuantity;

        if (duckToBuy && selectedQuantity > 0){
            
            const itemsToBuy = {
                id: duckToBuy.id,
                image: duckToBuy.image,
                title: duckToBuy.duckName,
                price: duckToBuy.price,
                quantity: selectedQuantity,
            }
            
            shoppingCart.push(itemsToBuy);
            console.log(shoppingCart);

            displayCart();

            getQuantity=1;
        }

    })
}

function showDucksCart(){
    let total = 0;

    shoppingCart.forEach(item => {
        const totalDucks = item.quantity * item.price.toFixed(2);
        total += totalDucks;

        itemsDuck.innerHTML =
            `
            <div class="cart-container" id="containerShopping">
                <img src="${item.image}" alt="${item.title}" class="selectedImgCart">
                
            <div class="cart-layout">
                <div class="title">
                    <p>Patito ${item.title}</p>
                </div>
                <div class="price">
                    <p>Precio: ${item.price.toFixed(2)} €</p>
                </div>
                <div class="container-buy">
                    <div class="container-quantity" id="quantity">
                        <button class="btn-quantity decrease" id="bt-decrease">-</button>
                        <span class="quantitytoBuy" id="quantityDucks">${item.quantity}</span>
                        <button class="btn-quantity increase" id="bt-increase">+</button>
                    </div>
                    <div>
                        <button type="button" class="deleteItem" id="deleteBtn">Eliminar</button>
                    </div>

                    <div class="">
                        <p><b>Precio total: € ${item.price.toFixed(2) * item.quantity}</b></p>
                    </div>
                </div>
            </div>           
            
            `
        

    })
}

showSelectedDuck();



