// JavaScript to toggle between forms
const loginLink = document.getElementById('login-link');
const signupLink = document.getElementById('signup-link');
const forgotPasswordLink = document.getElementById('forgot-password-link');
const backToLogin = document.getElementById('back-to-login');

const overlay = document.getElementById('overlay');
const loginForm = document.getElementById('login-form');
const forgotPasswordForm = document.getElementById('forgot-password-form');

loginLink.addEventListener('click', () => {
    overlay.style.display = 'flex';
    loginForm.style.display = 'block';
    forgotPasswordForm.style.display = 'none';
});

signupLink.addEventListener('click', () => {
    overlay.style.display = 'none';
});

forgotPasswordLink.addEventListener('click', () => {
    overlay.style.display = 'flex';
    loginForm.style.display = 'none';
    forgotPasswordForm.style.display = 'block';
});

backToLogin.addEventListener('click', () => {
    overlay.style.display = 'flex';
    loginForm.style.display = 'block';
    forgotPasswordForm.style.display =
    'none';
});

// Close the overlay when clicking outside of the form
overlay.addEventListener('click', (event) => {
    if (event.target === overlay) {
        overlay.style.display = 'none';
    }
});