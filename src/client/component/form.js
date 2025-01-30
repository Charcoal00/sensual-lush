document.addEventListener("DOMContentLoaded", function () {
    // Feedback Form Submission
    const API_BASE_URL = "http://localhost:3000/api";
    document
        .getElementById("feedbackForm")
        .addEventListener("submit", function (e) {
            e.preventDefault();

            const formData = new FormData(this);
            fetch(`${API_BASE_URL}/send-feedback`, {
                method: "POST",
                body: JSON.stringify(Object.fromEntries(formData)),
                headers: { "Content-Type": "application/json" },
            })
                .then((response) => response.text())
                .then(alert)
                .catch((error) => console.error("Error:", error));
        });

    // Booking Form Submission
    document
        .getElementById("bookingForm")
        .addEventListener("submit", function (e) {
            e.preventDefault();

            const formData = new FormData(this);
            fetch(`${API_BASE_URL}/send-email`, {
                method: "POST",
                body: JSON.stringify(Object.fromEntries(formData)),
                headers: { "Content-Type": "application/json" },
            })
                .then((response) => response.text())
                .then(alert)
                .catch((error) => console.error("Error:", error));
        });
});
