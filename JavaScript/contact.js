const form = document.getElementById("contact-form");
const message = document.getElementById("form-message");
const messageDatabase = [];
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const inputName = document.getElementById("user-name");
  const inputSurname = document.getElementById("user-lastname");
  const inputEmail = document.getElementById("user-email");
  const inputMessage = document.getElementById("user-message");
  const newMessage = {
    name: inputName.value,
    surname: inputSurname.value,
    email: inputEmail.value,
    message: inputMessage.value,
  };
  messageDatabase.push(newMessage);
  console.log("Mensaje añadido:", newMessage);
  console.log("Listado de mensajes:", messageDatabase);
  message.style.display = "block";
  message.textContent = "¡Gracias! Tu mensaje fue enviado correctamente.";
  form.reset();
  inputName.focus();
});
