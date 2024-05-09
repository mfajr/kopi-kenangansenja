// toggle
const navbarNav = document.querySelector('.navbar-nav');

// waktu hamburger menu di klik \\
document.querySelector('#hamburger-menu').onclick = () => {
    navbarNav.classList.toggle('active')
};

// waktu user nge klik diluar side-bar \\
const hamburger = document.querySelector('#hamburger-menu');
document.addEventListener('click', function(gobles) {
    if(!hamburger.contains(gobles.target) && !navbarNav.contains(gobles.target)) {
        navbarNav.classList.remove('active');
    }
});