const hamburger = document.querySelector("#hamburgerMenu");
const menuBar = document.querySelector("#menuBar");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    menuBar.classList.toggle("active");
}


const menu = document.querySelectorAll("#menu");

menu.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    menuBar.classList.remove("active");
}