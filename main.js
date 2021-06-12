// VARIABLES
let password = document.querySelector('#password');
let checkbox = document.querySelector('#show-password');

// FUNCTIONS

// This function toggles the password based on checkbox state
function togglePassword() {
    if (!password.value) {
        return;
    }
    password.type = checkbox.checked ? "text" : "password"
}

// EVENT LISTENERS
checkbox.addEventListener('change', togglePassword);




