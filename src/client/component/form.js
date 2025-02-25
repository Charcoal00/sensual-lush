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

document.addEventListener("DOMContentLoaded", function () {
    const API_BASE_URL = "https://sensual-lush-backend.onrender.com/api";
    // const API_BASE_URL2 = "http://localhost:3000/api";
    // Booking Form Submission
    document
        .getElementById("bookingForm")
        .addEventListener("submit", function (e) {
            e.preventDefault();
            const name = document.getElementById("name").value;
            const date = document.getElementById("date").value;
            const email = document.getElementById("email").value;
            const phone = document.getElementById("phone").value;
            const theraphySelect =
                document.getElementById("theraphySelect").value;
            const note = document.getElementById("note").value;
            const theraphistSelect =
                document.getElementById("theraphistSelect").value;




            
            fetch(`${API_BASE_URL}/send-email`, {
                method: "POST",
                body: JSON.stringify({
                    name,
                    date,
                    email,
                    phone,
                    theraphySelect,
                    note,
                    theraphistSelect,
                }),
                headers: { "Content-Type": "application/json" },
            })
                .then((response) => response.text())
                .then(alert)
                .catch((error) => console.error("Error:", error));
        });
});
