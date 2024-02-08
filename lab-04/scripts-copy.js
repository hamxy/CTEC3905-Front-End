menuToggler.addEventListener('click', () => {
    menu.classList.toggle('open');
});

// Close nav after link is clicked
const navItems = document.querySelectorAll("#menu a");
navItems.forEach((a) => a.addEventListener('click', () => menu.classList.toggle('open')));

// Close nav if user click main content
const main = document.querySelector("main")
main.addEventListener('click', () => menu.classList.remove('open'));