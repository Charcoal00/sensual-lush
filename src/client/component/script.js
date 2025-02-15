// light mode button toggle animation

const toggleBtn = document.getElementById("toggleBtn");
toggleBtn.addEventListener("click", () => {
    toggleBtn.classList.toggle("ckk");
});

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
