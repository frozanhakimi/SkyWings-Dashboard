// Sign In button
const signInBtn = document.getElementById("signInBtn");

console.log(signInBtn);

signInBtn.addEventListener("click", function () {

});


// Email and Password
const email = document.getElementById("email");

const password = document.getElementById("password");

console.log(email.value);

console.log(password.value);


// Login Form
const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const emailValue = email.value.trim();

    const passwordValue = password.value.trim();


    // Check Email
    if (emailValue === "") {

        alert("Please enter your email or phone number.");

        return;
    }


    // Check Password
    if (passwordValue === "") {

        alert("Please enter your password.");

        return;
    }


    // Login successful
    alert("Login successful");

});


// Log In button
const logInBtn = document.getElementById("logInBtn");

logInBtn.addEventListener("click", function () {

    alert("Log In button clicked.");

});


// Forgot Password
const forgotPassword = document.getElementById("forgotPassword");

forgotPassword.addEventListener("click", function (event) {

    event.preventDefault();

    alert("Password recovery page will open.");

});


// Remember Me
const rememberMe = document.getElementById("rememberMe");

rememberMe.addEventListener("change", function () {

    if (rememberMe.checked) {

        alert("Remember me is enabled.");

    } else {

        alert("Remember me is disabled.");

    }

});


// Facebook
const facebookBtn = document.getElementById("facebookBtn");

facebookBtn.addEventListener("click", function () {

    alert("Facebook login selected.");

});


// Google
const googleBtn = document.getElementById("googleBtn");

googleBtn.addEventListener("click", function () {

    alert("Google login selected.");

});