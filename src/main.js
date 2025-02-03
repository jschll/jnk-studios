import "./style.scss";
import "./scripts/nav.js";
import "./scripts/swiper.js";
import "./scripts/generateSlides.js";

// const swiper = new Swiper(".swiper", {
//     // Optional parameters
//     direction: "horizontal",
//     loop: true,
//     autoplay: true,
//     freeMode: true,
//     delay: 100000,
//     effect: "coverflow",
//     coverflowEffect: {
//         rotate: 10, // Rotation der Slides
//         stretch: -50, // Abstand zwischen Slides
//         depth: 200, // Tiefe des 3D-Effekts
//         modifier: 1, // Stärke des Effekts
//         slideShadows: true, // Schatten aktivieren
//     },
//     freeMode: {
//         sticky: true,
//     },
// });

const toggleSwitch = document.getElementById("theme-toggle");
function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute("data-theme", "dark");
        localStorage.setItem("theme", "dark");
    } else {
        document.documentElement.setAttribute("data-theme", "light");
        localStorage.setItem("theme", "light");
    }
}

toggleSwitch.addEventListener("change", switchTheme, false);

const currentTheme = localStorage.getItem("theme") ? localStorage.getItem("theme") : null;

if (currentTheme) {
    document.documentElement.setAttribute("data-theme", currentTheme);

    if (currentTheme === "dark") {
        toggleSwitch.checked = true;
    }
}

const skipHero = document.getElementById("skipHero");
const hideAt = 400;

window.addEventListener("scroll", () => {
    if (window.pageYOffset > hideAt) {
        skipHero.classList.add("hidden");
    } else {
        skipHero.classList.remove("hidden");
    }
});

const menuToggle = document.getElementById("menuToggle");
const offcanvasNav = document.getElementById("offcanvas");
const closeBtn = document.getElementById("close-nav");

// Menü öffnen
menuToggle.addEventListener("click", () => {
    offcanvasNav.classList.add("open");
});

// Menü schließen
closeBtn.addEventListener("click", () => {
    offcanvasNav.classList.remove("open");
});

// Optional: Schließt das Menü, wenn außerhalb geklickt wird
document.addEventListener("click", (e) => {
    if (!offcanvasNav.contains(e.target) && !menuToggle.contains(e.target)) {
        offcanvasNav.classList.remove("open");
    }
});
