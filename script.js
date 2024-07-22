//privacy & policy
function openBar() {
    document.getElementById("containerr").classList.toggle("open-now");
    document.querySelector(".about-container").classList.toggle("open");
}


function openBar2() {
    document.getElementById("servicee").classList.toggle("open-now");
    document.querySelector(".service-container").classList.toggle("open2");
}




// price buttons



document.querySelectorAll('.price').forEach(button => {

    button.addEventListener
    ('click', function() {
        
            // Get the span ID from the data attribute
            const spanId = this.getAttribute('data-span-id');
            // Add the 'highlight' class to the corresponding span element
            document.getElementById(spanId).classList.toggle('open-now');

        }
    );
});
