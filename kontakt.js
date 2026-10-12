const form = document.querySelector("#contactForm");
const confirmation = document.querySelector("#confirmation");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.querySelector("#name").value;

  confirmation.textContent =
    "Tack för ditt meddelande, " + name + "! Vi återkommer inom kort!";

  form.reset();
});
