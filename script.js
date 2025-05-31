// script.js

// validate email
function validateEmail(element) {
  let re = /^[a-zA-Z0-9_.±]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/;
  if (re.test(element.value)) {
    element.style.background = "#ccffcc";
    return true;
  } else {
    element.style.background = "#e35152";
    alert("Please input a valid email address");
    return false;
  }
}

// validate zipcode
function validateZipcode(element) {
  let re = /[A-Z0-9]{6}/;
  if (re.test(element.value)) {
    element.style.background = "#ccffcc";
    return true;
  } else {
    element.style.background = "#e35152";
    alert("Please input a valid zipcode");
    return false;
  }
}

// validate password
function validatePassword(element) {
  let re = /[A-Za-z0-9@$!%*#?&]{6,}/;
  if (re.test(element.value)) {
    element.style.background = "#ccffcc";
    return true;
  } else {
    element.style.background = "#e35152";
    alert("Please input a valid password");
    return false;
  }
}

// validate confirm password and make sure it matches first password
function validateConfirm(element) {
  const passwordField = document.getElementById("password");
  if (element.value === passwordField.value && element.value !== "") {
    element.style.background = "#ccffcc";
    return true;
  } else {
    element.style.background = "#e35152";
    if (element.value !== "") {
      // only show alert if field isn't empty
      alert("Passwords do not match");
    }
    return false;
  }
}

// validate all fields function
function validateAllFields() {
  const email = document.getElementById("email");
  const zipcode = document.getElementById("zipcode");
  const password = document.getElementById("password");
  const confirm = document.getElementById("confirm");
  const country = document.getElementById("country");

  // check if all fields have values
  if (
    !email.value ||
    !zipcode.value ||
    !password.value ||
    !confirm.value ||
    !country.value
  ) {
    alert("Please fill in all required fields");
    return false;
  }

  // run all validation functions without showing individual alerts
  const emailValid = /^[a-zA-Z0-9_.±]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/.test(
    email.value
  );
  const zipcodeValid = /[A-Z0-9]{6}/.test(zipcode.value);
  const passwordValid = /[A-Za-z0-9@$!%*#?&]{6,}/.test(password.value);
  const confirmValid = confirm.value === password.value && confirm.value !== "";

  return emailValid && zipcodeValid && passwordValid && confirmValid;
}

// add event listener when the page loads
document.addEventListener("DOMContentLoaded", function () {
  const passwordField = document.getElementById("password");
  const confirmField = document.getElementById("confirm");
  const form = document.querySelector("form");

  // revalidate confirm password whenever password changes
  passwordField.addEventListener("input", function () {
    if (confirmField.value !== "") {
      validateConfirm(confirmField);
    }
  });

  // add submit event listener
  form.addEventListener("submit", function (event) {
    event.preventDefault(); // prevent form from submitting

    if (validateAllFields()) {
      alert("Form submitted successfully! All fields are valid.");
    } else {
      alert("Please fix the validation errors before submitting.");
    }
  });
});
