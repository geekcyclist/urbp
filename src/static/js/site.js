// Hamburger menu functionality
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const phoneInput = document.querySelector('#phone');

    function formatPhoneNumber(value) {
        const digits = value.replace(/\D/g, '').slice(0, 10);

        if (digits.length === 0) {
            return '';
        }

        if (digits.length <= 3) {
            return `(${digits}`;
        }

        if (digits.length <= 6) {
            return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
        }

        return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
    }

    // Toggle menu when clicking hamburger
    hamburger.addEventListener('click', function() {
        this.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.navbar')) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });

    // Close menu when clicking a nav item
    document.querySelectorAll('.nav-item').forEach(item => {
        item.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Live-format phone input as (###) ###-####
    if (phoneInput) {
        phoneInput.addEventListener('input', function() {
            this.value = formatPhoneNumber(this.value);
        });

        phoneInput.value = formatPhoneNumber(phoneInput.value);
    }
});