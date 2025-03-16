const signupCard = document.getElementById("card-signup");
const successCard = document.getElementById("card-success");
const signupButton = document.getElementById("signup-button");
const dismissButton = document.getElementById("dismiss-button");

// Default states
signupCard.style.display = "block";
successCard.style.display = "none";

signupButton.addEventListener("click", (event) => {
  event.preventDefault();

  signupCard.style.display = "none";
  successCard.style.display = "block";
});

dismissButton.addEventListener("click", () => {
  signupCard.style.display = "block";
  successCard.style.display = "none";
});
