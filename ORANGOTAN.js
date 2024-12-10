//---------------------------------------------Mode Switch------------------------------------------------------------
const themeToggleButton = document.querySelector('#modeSwitchCase');
const htmlElement = document.documentElement; 

function applyDarkMode(isDark) {
    if (isDark) {
        htmlElement.setAttribute('theme', 'dark');
    } else {
        htmlElement.removeAttribute('theme');
    }
}

// Check local storage for theme preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    applyDarkMode(true);
} else {
    applyDarkMode(false);
}

themeToggleButton.addEventListener('click', () => {
    const isDarkMode = htmlElement.hasAttribute('theme') && htmlElement.getAttribute('theme') === 'dark';
    applyDarkMode(!isDarkMode);
    // Save theme preference in local storage
    localStorage.setItem('theme', isDarkMode ? 'light' : 'dark');
});

//----------------------------------------for hamburger menu---------------------------------------------------------
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