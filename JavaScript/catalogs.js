import { ducksDatabase } from "./info-ducks.js";

const catalogGrid = document.getElementById("catalogGrid");

function createDuckCard(ducksDatabase) {
  return `
  <section class="patito">
  <img src="${ducksDatabase.image}" alt="${ducksDatabase.duckName}"class="imagenpatito" id="selectedImg" data-id="${ducksDatabase.id}">
      <section class="botonespatito">
        <button class="titlePatito" id="selectedTitle" data-id="${ducksDatabase.id}">${ducksDatabase.duckName}</button>
        <button class="precio">Precio ${ducksDatabase.price}</button>
        <button class="disponible">Disponible</button>
      </section>
    </section>

  `;
}

function renderCatalog() {
  catalogGrid.innerHTML = ducksDatabase.map(createDuckCard);
}

renderCatalog();



const duckImg = document.getElementById("selectedImg");

//const duckTitle = document.getElementById("data-id");

/*function toGoDetail(id){
  const selectDuck = ducksDatabase.find(duck => duck.id === id);
  const selectNameDuck = ducksDatabase.find(duckName = duckName.id === duckTit);
  
  if (selectDuck || selectNameDuck){
    window.location.href = "../html/detail.html" ;
    console.log("prueba redirigiendo")
  }
}*/




/*duckImg.addEventListener("click", function(id){
  console.log("prueba click en imagen")
  window.location.href = "../html/detail.html"?id=${ducksDatabase.id};

});*/
//duckTitle.addEventListener("click", toGoDetail);




//export {duckImg, duckTitle};

// Función para el producto encontrado y muestre en el detalle
//const btPython = function()