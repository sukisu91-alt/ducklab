import { ducksDatabase } from "./info-ducks.js";

const detailDuck = document.getElementById("containerDuck");

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
                <div class="stock">
                    <p class="msjStock" id="stockNow">Stock Disponible</p>
                    <div class="quantity" id="container-quantity">
                        <button class="decrease" id="bt-decrease">-</button>
                        <input class="quantityBuy" id="quantityDucks" type="number" min=1>
                        <button class="increase" id="bt-increase">+</button>
                    </div>
                </div>
                <div class="description">
                    <p>Descripción detallada:</p>
                    <ul>
                       ${descriptionDuck}
                    </ul>
                </div>
            </div>
    `
    }
}

showSelectedDuck();

