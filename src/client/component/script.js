// nav button
const navBtn = document.getElementById("nav-btn");
navBtn.addEventListener("click", () => {
    document.body.classList.toggle("open-nav");
});
//scroll effect
const navbar = document.querySelector(".navbar");
const navbarWrapper = document.querySelector(".nav-wrapper");

const navbarOffset = navbarWrapper.offsetTop;
// Navbar Scroll Effect
window.addEventListener("scroll", () => {
    const scrollPosition = window.scrollY;

    if (scrollPosition > navbarOffset) {
        navbar.classList.add("fixed");
    } else {
        navbar.classList.remove("fixed");
    }
});

// form
const formToggleBtn2 = document.querySelectorAll(".openForm");
formToggleBtn2.forEach((btn) => {
    btn.addEventListener("click", () => {
        document.body.classList.add("open-form");
    });
});

const formToggleBtn = document.getElementById("formToggleBtn");
formToggleBtn.addEventListener("click", function (e) {
    e.preventDefault();
    document.body.classList.remove("open-form");
});

// dark mode
document.addEventListener("DOMContentLoaded", function () {
    const themeToggleBtn = document.getElementById("toggleBtn");
    const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

    function loadTheme() {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme === "dark") {
            document.body.classList.add("darkmode");
            themeToggleBtn.classList.remove("ckk");
        } else if (savedTheme === "light") {
            document.body.classList.remove("darkmode");
            themeToggleBtn.classList.add("ckk");
        } else {
            if (prefersDarkScheme.matches) {
                themeToggleBtn.classList.remove("ckk");
                document.body.classList.add("darkmode");
            } else {
                themeToggleBtn.classList.add("ckk");
                document.body.classList.remove("darkmode");
            }
        }
    }

    function toggleTheme() {
        if (document.body.classList.contains("darkmode")) {
            document.body.classList.remove("darkmode");
            themeToggleBtn.classList.add("ckk");
            localStorage.setItem("theme", "light");
        } else {
            themeToggleBtn.classList.remove("ckk");
            document.body.classList.add("darkmode");
            localStorage.setItem("theme", "dark");
        }
    }

    themeToggleBtn.addEventListener("click", toggleTheme);

    prefersDarkScheme.addEventListener("change", (event) => {
        if (!localStorage.getItem("theme")) {
            if (event.matches) {
                themeToggleBtn.classList.remove("ckk");
                document.body.classList.add("darkmode");
            } else {
                themeToggleBtn.classList.add("ckk");
                document.body.classList.remove("darkmode");
            }
        }
    });

    loadTheme();
});
