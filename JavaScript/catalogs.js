import { ducksDatabase } from "./info-ducks.js";

const catalogGrid = document.getElementById("catalogGrid");

function createDuckCard(ducksDatabase) {
  return `
  <section class="patito">
  <img src="${ducksDatabase.image}" alt="${ducksDatabase.duckName}"class="imagenpatito">
      <section class="botonespatito">
        <button class="titlePatito">${ducksDatabase.duckName}</button>
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
