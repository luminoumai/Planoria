var loginForm = document.getElementById("login");
var signupForm = document.getElementById("signup");
var btn = document.getElementById("btn");

function signup(){
    loginForm.style.display = "none";
    signupForm.style.display = "block";
    btn.style.left = "110px";
}

function login(){
    loginForm.style.display = "block";
    signupForm.style.display = "none";
    btn.style.left = "0px";
}