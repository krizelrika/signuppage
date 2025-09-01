document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('signup-form');
    const createAccountBtn = document.querySelector('.create-account-btn');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirm-password');
    
    // Password matching validation
    function validatePasswords() {
        if (passwordInput.value !== confirmPasswordInput.value) {
            confirmPasswordInput.setCustomValidity('Passwords do not match');
        } else {
            confirmPasswordInput.setCustomValidity('');
        }
    }
    
    passwordInput.addEventListener('input', validatePasswords);
    confirmPasswordInput.addEventListener('input', validatePasswords);
    
    // Form submission handling
    createAccountBtn.addEventListener('click', function(e) {
        e.preventDefault();
        
        if (form.checkValidity()) {
            // All fields are valid
            alert('🎉 Welcome to Sakura Quest! Your adventure begins now!');
        } else {
            // Show validation errors
            form.reportValidity();
        }
    });
    
    // Add sparkle effect on successful input
    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => {
        input.addEventListener('input', function() {
            if (this.validity.valid && this.value.length > 0) {
                this.style.boxShadow = '0 0 0 4px rgba(152, 251, 152, 0.2)';
            }
        });
    });
});