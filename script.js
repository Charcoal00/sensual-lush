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
        
            const spanId = this.getAttribute('data-span-id');
            document.getElementById(spanId).classList.toggle('open-now');

        }
    );
    
});




//======= loader =======
document.addEventListener("DOMContentLoaded", function() {

    window.addEventListener("load", function() {
        
        var loadder = document.getElementById('loader');
        var spinnerr = document.getElementById('spinner')
        
        setTimeout(function() {
            loadder.style.opacity = "0";
            loadder.style.visibility = "hidden";
        }, 1000)
        
        setTimeout(function() {
            document.getElementById('main1').style.display = 'block';
            document.body.style.overflow = 'visible';
        }, 1200);
        
    });
    
});


