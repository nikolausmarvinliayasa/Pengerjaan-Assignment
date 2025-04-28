document.getElementById('subscribe').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission
    clearErrors();
    
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const dob = document.getElementById('dob').value;
    const gender = document.getElementById('gender').value;
    const terms = document.querySelector('input[name="terms"]').checked;

    if (name === '') {
        showError('name', 'Name is required');
        return;
    }
    if (email === '') {
        showError('email', 'Email is required');
        return;
    } else if (!validateEmail(email)) {
        showError('email', 'Invalid email format');
        return;
    }
    if (dob === '') {
        showError('dob', 'Date of Birth is required');
        return;
    } else if (!validateDateOfBirth(dob)) {
        showError('dob', 'You must be at least 13 years old');
        return;
    }
    if (gender === '') {
        showError('gender', 'Gender is required');
        return;
    }
    if (!terms) {
        showError('terms', 'You must agree to the terms and conditions');
        return;
    }
    window.location.href = 'index.html';
});

function showError(fieldId, message) {
    const field = document.getElementById(fieldId);
    const error = document.createElement('div');
    error.className = 'error';
    error.textContent = message;
    field.parentElement.appendChild(error);
    field.focus();
}

function clearErrors() {
    const errors = document.querySelectorAll('.error');
    errors.forEach(error => error.remove());
}

function validateEmail(email) {
    return email.includes('@') && email.includes('.') && email.indexOf('@') < email.lastIndexOf('.') && email.indexOf('@') > 0;
}

function validateDateOfBirth(dob) {
    const today = new Date();
    const birthDate = new Date(dob);
    const age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age >= 13;
}
