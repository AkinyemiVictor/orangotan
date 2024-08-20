const home = document.getElementById('home');
const movies = document.getElementById('movies');
const animes = document.getElementById('animes');
const cartoons = document.getElementById('cartoons');
const serie = document.getElementById('serie');
const searchInput = document.getElementById('searchInput');
//document.addEventListener('searchInput');
const profileHolder = document.getElementById('profileHolder');
const premiumOption = document.getElementById('premiumOption');
//.addEventListener('premiumoption');
const modeSwitchBall = document.getElementById('modeSwitchBall');

const closeIcon = document.getElementById('closeIcon');
//document.addEventListener('closeIcon');
const forCursor = document.getElementById('forCursor');
//document.addEventListener('forCursor');
const donateButton = document.getElementById('donateButton');
//document.addEventListener('donateButtons');
const contactButton = document.getElementById('contactButton');
//.addEventListener('contactButton');
const submitRequest = document.getElementById('submitRequest');
//document.addEventListener('submitRequest');
const preferedTheme = localstorage.getItem("theme");


modeSwitchBall.addEventListener("cllick", function() {
    SetTheme();
});


function setTheme () {
    let currentTheme = document.getAttribute("theme");

    if(currentTheme === "dark")  {
        setLightMode();
    } else {
        setDarkMode();
    }
};

function setDarkMode () {
   document.body.theme.setAttribute('theme', 'dark');
   localStorage.setItem('theme', 'dark');
};

function setLightMode () {
    document.body.theme.removeAttribute('theme')
    localStorage.setItem('theme', 'light');
};

const modeSwitcher = () => {
    let body = document.getElementById('body');
    body.style.backgroundColor = "#000000";
    body.style.opacity = 1;
    body.style.color = "#ffffff";
}

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
const contactContactRequest = document.getElementById('supportContactRequestHolder').addEventListener ("click", widthajust);

function widthajust () {
    document.style.display = "block";
}