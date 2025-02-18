const theraphySelect = document.getElementById("theraphySelect");
const totalPriceDisplay = document.getElementById("priceDisplay");

function updatePrice() {
    const selectedOption = theraphySelect.options[theraphySelect.selectedIndex];

    const price = parseFloat(selectedOption.getAttribute("data-price")) || 0;

    totalPriceDisplay.textContent =
        price > 1000 ? price.toLocaleString() : price;
}
updatePrice();
theraphySelect.addEventListener("change", updatePrice);

const termsCheckbox = document.getElementById("terms");
const submitButton = document.getElementById("submitBtn");
termsCheckbox.addEventListener("change", () => {
    submitButton.disabled = !termsCheckbox.checked;
});

const phoneNumber = document.getElementById("phone");
phoneNumber.addEventListener("focus", () => {
    const phoneSpan = document.querySelectorAll(".number-span");
    phoneSpan.forEach((phone) => {
        phone.classList.add("color-change");
    });
});
function formatPhoneNumber() {
    let phoneInput = document.getElementById("phone");
    let phoneValue = phoneInput.value.replace(/\D/g, "");

    if (phoneValue.startsWith("0")) {
        phoneValue = phoneValue.substring(1);
    }

    phoneInput.value = phoneValue;
    console.log(phoneInput.value);
}

function formatPhoneNumber() {
    let phoneInput = document.getElementById("phone");
    let phoneValue = phoneInput.value.replace(/\D/g, "");

    if (phoneValue.startsWith("0")) {
        phoneValue = phoneValue.substring(1);
    }

    phoneInput.value = phoneValue;
    console.log(phoneInput.value);
}
// document.addEventListener("DOMContentLoaded", function () {
//     // Feedback Form Submission
//     const API_BASE_URL = "http://localhost:3000/api";
//     document
//         .getElementById("feedbackForm")
//         .addEventListener("submit", function (e) {
//             e.preventDefault();

//             const formData = new FormData(this);
//             fetch(`${API_BASE_URL}/send-feedback`, {
//                 method: "POST",
//                 body: JSON.stringify(Object.fromEntries(formData)),
//                 headers: { "Content-Type": "application/json" },
//             })
//                 .then((response) => response.text())
//                 .then(alert)
//                 .catch((error) => console.error("Error:", error));
//         });

//     // Booking Form Submission
//     document
//         .getElementById("bookingForm")
//         .addEventListener("submit", function (e) {
//             e.preventDefault();

//             const formData = new FormData(this);
//             fetch(`${API_BASE_URL}/send-email`, {
//                 method: "POST",
//                 body: JSON.stringify(Object.fromEntries(formData)),
//                 headers: { "Content-Type": "application/json" },
//             })
//                 .then((response) => response.text())
//                 .then(alert)
//                 .catch((error) => console.error("Error:", error));
//         });
// });
