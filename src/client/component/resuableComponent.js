// Create a reusable section using JavaScript
const reusableSection = document.createElement("section");
reusableSection.classList.add("my-section");

// Add content dynamically
reusableSection.innerHTML = `
    <h2>Welcome to Our Website</h2>
    <p>This is a reusable section.</p>
`;

// Insert into any page that has an element with ID "reusable-section"
document.addEventListener("DOMContentLoaded", () => {
    const sectionContainer = document.getElementById("reusable-section");
    if (sectionContainer) {
        sectionContainer.appendChild(reusableSection);
    }
});
