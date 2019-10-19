function togglePasswords(event) {
    // Will stop running function if item is not a checkbox
    if (!event.target.matches('[data-pw-toggle]')) return;

    // Selects passwords
    let passwords = Array.prototype.slice.call(document.querySelectorAll(event.target.getAttribute('data-pw-toggle')));

    passwords.forEach(function(password) {
        if (event.target.checked) {
            password.type = 'text';
        } else {
            password.type = 'password';
        }
    })
}


window.addEventListener('change', togglePasswords, false);
