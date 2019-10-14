const checkbox = document.querySelector("#show-password");
const password = document.querySelector('#password');

function togglePassword(event) {
    return event.target.checked ? password.setAttribute('type', 'text') : password.setAttribute('type', 'password')
}

checkbox.addEventListener('change', togglePassword, false);