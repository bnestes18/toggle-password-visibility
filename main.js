// VARIABLES
let passwords = document.querySelectorAll('[data-password]');
let checkbox = document.querySelector('#show-passwords');

// FUNCTIONS
// This function toggles the password based on checkbox state
// TODO: Add more input validation (check pw length, number, and symbols)
function togglePasswords() {
    // If user has not provided a password in either or both 
    // fields, change the border to red
    for (let password of passwords) {
        if (!password.value) {
            password.classList.add('is-danger');
        }

        password.type = checkbox.checked ? "text" : "password"
            
        // Remove the red border once a password is specified.
        if (password.value && document.querySelector('.is-danger')) {
            password.classList.remove('is-danger');
        } 
    }
}

// EVENT LISTENERS
checkbox.addEventListener('change', togglePasswords);




