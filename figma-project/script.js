document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.nav-hamburger');
    const navItems = document.querySelector('.nav-items');
    const overlay = document.getElementById('nav-overlay');

    hamburger.addEventListener('click', function() {
        navItems.classList.toggle('active');
        overlay.classList.toggle('active');
    });

    overlay.addEventListener('click', function() {
        navItems.classList.remove('active');
        overlay.classList.remove('active');
    });
});