import { ducksDatabase } from "./info-ducks.js";

const catalogGrid = document.getElementById("catalogGrid");

function createDuckCard(ducksDatabase) {
  return `
  <section class="patito">
  <img src="${ducksDatabase.image}" alt="${ducksDatabase.duckName}"class="imagenpatito duck-link" id="selectedImg" data-id="${ducksDatabase.id}">
      <section class="botonespatito">
        <button type="button" class="titlePatito duck-link" data-id="${ducksDatabase.id}">${ducksDatabase.duckName}</button>
        <button class="precio">Precio ${ducksDatabase.price}</button>
        <button class="disponible">Disponible</button>
      </section>
    </section>

  `;
}

function renderCatalog() {
  catalogGrid.innerHTML = ducksDatabase.map(createDuckCard);
  
  //Se ejecuta la función que escuchará los eventos
  setupDuckLinks();
}


function setupDuckLinks(){
  const duckLinks = document.querySelectorAll(".duck-link");
  
  duckLinks.forEach(link => {
    link.addEventListener("click", (event) =>{
      const duckId = event.target.getAttribute("data-id");
      console.log(duckId);

      if (duckId){
        window.location.href = `../html/detail.html?id=${duckId}`;
      }
    })
  })
}

renderCatalog();
