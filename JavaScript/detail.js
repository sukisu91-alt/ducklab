import { ducksDatabase } from "./info-ducks.js";

const detailDuck = document.getElementById("containerDuck");

let shoppingCartDucks = [];


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
                    <p>Precio: ${selectedDuck.price}</p>
                </div>
                <p class="msjStock" id="stockNow"><b>Stock Disponible</b></p>
                <div class="container-buy">
                    <div class="container-quantity" id="quantity">
                        <button class="btn-quantity decrease" id="bt-decrease">-</button>
                        <span class="quantitytoBuy" id="quantityDucks">1</span>
                        <button class="btn-quantity increase" id="bt-increase">+</button>
                    </div>                   
                    <div class="container-add" id="add-cart">
                        <button type="button" class="bt-add" id="bt-add-cart">⍟ Añadir al carrito</button>
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
    }
}

showSelectedDuck();



