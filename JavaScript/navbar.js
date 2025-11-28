const btId = document.getElementById("bt-id");
const btCatalog = document.getElementById("bt-catalog");
const btContact = document.getElementById("bt-contact");
const btCart = document.getElementById("btCart");
const btMessage = document.getElementById("btMessage");
const btfinishBuysBtn = document.getElementById("finishBuysBtn");

const pagIndex = () => (window.location.href = "/index.html");

const pagCatalog = () => (window.location.href = "/html/catalog.html");

const pagContact = () => (window.location.href = "/html/contact.html");

const pagCart = () => (window.location.href = "/html/cart.html");

const pagThanks = () => (window.location.href = "/html/thanks.html");

btId.addEventListener("click", pagIndex);
btCatalog.addEventListener("click", pagCatalog);
btContact.addEventListener("click", pagContact);
btCart.addEventListener("click", pagCart);
btMessage.addEventListener("click", pagContact);
btfinishBuysBtn.addEventListener("click",pagThanks);