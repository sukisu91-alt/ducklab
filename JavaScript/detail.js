import { ducksDatabase } from "./info-ducks.js";
//import { duckImg, duckTitle } from "./catalogs.js";

const detailDuck = document.getElementById("containerDuck");

//detailDuck.addEventListener("click", function(event){
//    event.target.closest(detailDuck);
//})
//console.log(detailDuck);

//const duckId = eve
//const selectedDuck = ducksDatabase.find(duck => duck.id === duckId)

function showSelectedDuck(selectedDuck){
    if (selectedDuck){
        return `
        <img src="${ducksDatabase.image}" alt="${ducksDatabase.duckName}" id="selectedImg">
            <div class="detail-complet">
                <div class="title">
                    <h3 id="selectedTitle">Patito ${ducksDatabase.duckName}</h3>
                </div>
                <div class="price">
                    <p>Precio: ${ducksDatabase.price}</p>
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
                        <li>${ducksDatabase.description[0]}</li>
                        <li>${ducksDatabase.description[1]}</li>
                        <li>${ducksDatabase.description[2]}</li>
                        <li>${ducksDatabase.description[3]}</li>
                    </ul>
                </div>
            </div>
    `
    }
}


//function showDuck(){
  //detailDuck.innerHTML = showSelectedDuck;
//}

//duckImg.addEventListener("click",function(event){
  //  event.target
//});
//duckTitle.addEventListener("click", showDuck);
