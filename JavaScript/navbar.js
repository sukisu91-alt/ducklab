const btId = document.getElementById("bt-id");
const btCatalog = document.getElementById("bt-catalog");
const btContact = document.getElementById("bt-contact");

const pagIndex = () => window.location.href = "../index.html";

const pagCatalog = () => window.location.href = "../html/catalog.html";

const pagContat = () => window.location.href = "../html/contact.html";


btId.addEventListener("click", pagIndex);
btCatalog.addEventListener("click", pagCatalog);
btContact.addEventListener("click", pagContat);