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

