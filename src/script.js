const signupCard = document.getElementById("card-signup");
const successCard = document.getElementById("card-success");
const signupButton = document.getElementById("signup-button");
const dismissButton = document.getElementById("dismiss-button");
const emailUserInput = document.getElementById("email");

// Default states
signupCard.style.display = "block";
successCard.style.display = "none";

emailUserInput.addEventListener("focus", () => {
  signupButton.style.background =
    "linear-gradient(90deg, rgba(255,106,58,1) 0%, rgba(255,82,123,1) 100%)";
});

emailUserInput.addEventListener("focusout", () => {
  signupButton.style.background = "#242742";
});

signupButton.addEventListener("click", (event) => {
  event.preventDefault();

  signupCard.style.display = "none";
  successCard.style.display = "block";
});

dismissButton.addEventListener("click", () => {
  signupCard.style.display = "block";
  successCard.style.display = "none";
});
