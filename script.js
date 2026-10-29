const subscribeForm = document.getElementById("subscribeForm");
const emailInput = document.getElementById("email");

if (subscribeForm && emailInput) {
  subscribeForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const email = emailInput.value.trim();

    if (!email) {
      alert("Please enter your email address.");
      emailInput.focus();
      return;
    }

    if (!emailInput.checkValidity()) {
      alert("Please enter a valid email address.");
      emailInput.focus();
      return;
    }

    alert("Thank you for subscribing! ❤️");

    subscribeForm.reset();
  });
}