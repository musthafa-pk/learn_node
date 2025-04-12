const form = document.querySelector(".login-form");
const email = document.querySelector("input[type='email']");
const password = document.querySelector("input[type='password']");

form.addEventListener("submit", onsubmitFunction);

function onsubmitFunction(event){
    if(email.value === "" || password.value === ""){
        event.preventDefault(); // Prevent form submission
        alert("Please fill in all fields");
        return false;
    }
}