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
let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

// Preventing default form submission
form.addEventListener("submit", (event) => {
  event.preventDefault();
  emailValidation();
  usernameValidation();
  passwordValidation();
  confirmPasswordValidation();
  saveData();

  email.value = "";
  username.value = "";
  password.value = "";
  confirmPassword.value = "";
});

function emailValidation() {
  if (emailPattern.test(email.value)) {
    email.classList.remove("check");
    emailSpan.classList.remove("hidden");
    emailSpan.innerHTML = "";
  } else {
    emailSpan.classList.add("hidden");
    email.classList.add("check");
    emailSpan.innerHTML = "Invalid email address";
  }
}

email.addEventListener("keyup", emailValidation);

// Check username validation
function usernameValidation() {
  if (username.value !== "") {
    userSpan.classList.remove("hidden");
    username.classList.remove("check");
    userSpan.innerHTML = "";
  } else {
    userSpan.classList.add("hidden");
    userSpan.innerHTML = "Please add a username";
    username.classList.add("check");
  }
}
username.addEventListener("keyup", usernameValidation);

// Check password validation
function passwordValidation() {
  if (passwordPattern.test(password.value)) {
    passwordSpan.classList.remove("hidden");
    password.classList.remove("check");
    passwordSpan.innerHTML = "";
  } else {
    passwordSpan.classList.add("hidden");
    password.classList.add("check");
    passwordSpan.innerHTML = "Password is too weak";
  }
}

password.addEventListener("keyup", passwordValidation);

// Check confirmPassword
function confirmPasswordValidation() {
  if (password.value === confirmPassword.value && confirmPassword.value != "") {
    cpasswordSpan.classList.remove("hidden");
    confirmPassword.classList.remove("check");
    cpasswordSpan.innerHTML = "";
  } else {
    cpasswordSpan.classList.add("hidden");
    confirmPassword.classList.add("check");
    cpasswordSpan.innerHTML = "Password does not match";
  }
}

confirmPassword.addEventListener("keyup", confirmPasswordValidation);

// save form to local storage

let saveData = () => {
  let data;
  if (localStorage.getItem(data) === null) {
    data = [];
  } else {
    data = JSON.parse(localStorage.getItem(data));
  }

  let newData = {
    emailData: email.value,
    usernameData: username.value,
    passwordData: password.value,
    confirmPassword: confirmPassword.value,
  };

  data.push(newData);
  localStorage.setItem("Login", JSON.stringify(data));
  console.log(data);
  console.log(newData);
};
