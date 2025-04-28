// Smooth scroll for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Sticky header effect
window.addEventListener('scroll', function () {
    const header = document.getElementById('header');
    if (window.scrollY > 50) {
        header.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.boxShadow = 'none';
    }
});
document.getElementById('form').addEventListener('submit', function (e) {
    const emailInput = document.getElementById('email');
    const nameInput = document.getElementById('name'); // Example for additional fields

    if (!emailInput.value.includes('@') || emailInput.value.trim() === '') {
        e.preventDefault();
        alert('Please enter a valid email address.');
    } else if (nameInput && nameInput.value.trim() === '') {
        e.preventDefault();
        alert('Please enter your name.');
    }
});
// Form validation
document.getElementById('form').addEventListener('submit', function (e) {
    const emailInput = document.getElementById('email');
    if (!emailInput.value.includes('@')) {
        e.preventDefault();
        alert('Please enter a valid email address.');
    }
});