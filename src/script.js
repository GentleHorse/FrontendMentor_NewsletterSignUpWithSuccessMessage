const signupCard = document.getElementById("card-signup");
const successCard = document.getElementById("card-success");
const signupButton = document.getElementById("signup-button");
const dismissButton = document.getElementById("dismiss-button");
const emailUserInput = document.getElementById("email");
const emailInputErrorMessage = document.getElementById(
  "email-input-error-message"
);
const singupForm = document.getElementById("signup-form");

// Default status
signupCard.style.display = "block";
successCard.style.display = "none";
emailInputErrorMessage.style.display = "none";

emailUserInput.addEventListener("focus", () => {
  signupButton.style.background =
    "linear-gradient(90deg, rgba(255,106,58,1) 0%, rgba(255,82,123,1) 100%)";
});

emailUserInput.addEventListener("focusout", () => {
  signupButton.style.background = "#242742";
});

function emailValidation(email) {
  const isValidEmail = /^\S+@\S+$/g;
  return isValidEmail.test(email);
}

function handleSignupFormHandleSubmit(event) {
  event.preventDefault();

  const formData = new FormData(event.target);
  const { email } = Object.fromEntries(formData);

  if (!email || !emailValidation(email)) {
    // Error state styling
    emailInputErrorMessage.style.display = "block";
    emailUserInput.style.border = "1px solid #ff6155";
    emailUserInput.style.backgroundColor = "#ff615510";
    emailUserInput.style.color = "#ff6155";
  }

  if (email && emailValidation(email)) {
    // Bring back to default styling
    emailInputErrorMessage.style.display = "none";
    emailUserInput.style.border = "1px solid #949494";
    emailUserInput.style.backgroundColor = "#ffffff";
    emailUserInput.style.color = "#242742";

    // Clear user input
    event.target.email.value = "";

    // Switch to 'success' card
    signupCard.style.display = "none";
    successCard.style.display = "block";
  }
}

singupForm.addEventListener("submit", handleSignupFormHandleSubmit);

dismissButton.addEventListener("click", () => {
  signupCard.style.display = "block";
  successCard.style.display = "none";
});
