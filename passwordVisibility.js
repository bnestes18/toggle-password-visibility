const checkbox = document.querySelector('#show-passwords');
// Convert NodeList of passwords into array of passwords
let passwords = Array.prototype.slice.call(document.querySelectorAll('[type="password"]'));

function togglePasswords(event) {
    passwords.forEach(function(password) {
        return event.target.checked ? password.setAttribute('type', 'text') : password.setAttribute('type', 'password');
    })
}

checkbox.addEventListener('change', togglePasswords, false);