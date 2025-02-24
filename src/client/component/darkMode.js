// dark mode
document.addEventListener("DOMContentLoaded", function () {
    document.body.classList.add("body-opacity");

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
