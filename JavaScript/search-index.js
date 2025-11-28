import { ducksDatabase } from "./info-ducks.js";

const inputBusqueda = document.getElementById("search");
const resultsContainer = document.getElementById("searchResults");

function createSmallSuggestion(duck) {
  return `
    <div class="suggestion" data-id="${duck.id}">
      🔍 ${duck.duckName}
    </div>
  `;
}

function renderResults(filteredDucks) {
  if (filteredDucks.length === 0) {
    resultsContainer.innerHTML = "";
    return;
  }

  resultsContainer.innerHTML = filteredDucks.map(createSmallSuggestion).join("");
}

resultsContainer.addEventListener("click", (event) => {
  const clicked = event.target.closest(".suggestion");
  if (!clicked) return;

  const id = clicked.dataset.id;

  window.location.href = `/html/detail.html?id=${id}`;
});

inputBusqueda.addEventListener("input", (event) => {
  const text = event.target.value.toLowerCase();

  if (text === "") {
    resultsContainer.innerHTML = "";
    return;
  }

  const filtered = ducksDatabase.filter((duck) => duck.duckName.toLowerCase().includes(text));

  renderResults(filtered);
});
