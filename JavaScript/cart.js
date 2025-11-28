import { ducksDatabase } from "./info-ducks.js";

const itemsDuck = document.getElementById("cartItems");
const summaryItems = document.getElementById("cartSummary"); 

const productsCart = [];

function addShopping(){
    const urlGetId = new URLSearchParams(window.location.search);
    const getId = parseInt(urlGetId.get("id"));
    const selectedDuck = ducksDatabase.find(duck => duck.id === getId);

    //aquí se hara para actualizar el stock

    const itemsToBuy = {
        id: selectedDuck.id,
        image : selectedDuck.image,
        title: selectedDuck.duckName,
        price: selectedDuck.price,
    }

    productsCart.push(itemsToBuy);
    console.log(productsCart);

    itemsDuck.innerHTML =
    `
        <img src="${productsCart.image}" alt="${productsCart.duckName}" id="selectedImg">
        <div class="detail-complet">
            <div class="title">
                <p>Patito ${productsCart.duckName}</p>
            </div>
            <div class="price">
                <p>Precio: € ${productsCart.price}.00</p>
            </div>           
            <div class="container-buy">
                <div class="container-quantity" id="quantity">
                    <button class="btn-quantity decrease" id="bt-decrease">-</button>
                    <span class="quantitytoBuy" id="quantityDucks">1</span>
                    <button class="btn-quantity increase" id="bt-increase">+</button>
                </div>
                <div>
                    <button type="button" class="deleteItem" id="deleteBtn">Eliminar</button>
                </div>
                <div class="">
                    <p>Precio:Aquí ira el precio por la cantidad</p>
                </div>
            </div>
    `
}









export {addShopping};