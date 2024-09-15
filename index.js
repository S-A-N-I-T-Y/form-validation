"use strict";

//Getting all email and password fields
let email = document.getElementById("email"),
  username = document.getElementById("username"),
  password = document.getElementById("password"),
  confirmPassword = document.getElementById("confirm-password"),
  form = document.querySelector("form");

let emailSpan = document.getElementById("email-span"),
  userSpan = document.getElementById("user-span"),
  passwordSpan = document.getElementById("password-span"),
  cpasswordSpan = document.getElementById("cpassword-span");
let passwordPattern =
  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&-_])[A-Za-z\d@$!%*#?&-_]{8,}$/;

// Preventing default form submission
form.addEventListener("submit", (event) => {
  event.preventDefault();
  emailValidation();
  usernameValidation();
  passwordValidation();
  confirmPasswordValidation();
});

// Check email validation
function emailValidation() {
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (emailPattern.test(email.value)) {
    emailSpan.classList.remove("hidden");
    emailSpan.innerHTML = "";
  } else {
    emailSpan.classList.add("hidden");
    emailSpan.innerHTML = "Email is invalid";
  }
}

// Check username validation
function usernameValidation() {
  if (username.value !== "") {
    userSpan.classList.remove("hidden");
    userSpan.innerHTML = "";
  } else {
    userSpan.classList.add("hidden");
    userSpan.innerHTML = "Please add a username";
  }
}

// Check password validation
function passwordValidation() {
  if (passwordPattern.test(password.value)) {
    passwordSpan.classList.remove("hidden");
    passwordSpan.innerHTML = "";
  } else {
    passwordSpan.classList.add("hidden");
    passwordSpan.innerHTML = "Password is too weak";
  }
}

// Check confirmPassword
function confirmPasswordValidation() {
  if (password.value === confirmPassword.value && confirmPassword.value != "") {
    cpasswordSpan.classList.remove("hidden");
    cpasswordSpan.innerHTML = "";
  } else {
    cpasswordSpan.classList.add("hidden");
    cpasswordSpan.innerHTML = "Password does not match";
  }
}
