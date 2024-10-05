let currentSlide = 0;
showSlides(currentSlide);

// Function to show the current slide
function showSlides(n) {
    let slides = document.getElementsByClassName("slide");
    if (n >= slides.length) { currentSlide = 0 }
    if (n < 0) { currentSlide = slides.length - 1 }
    
    // Hide all slides and show the current one
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[currentSlide].style.display = "block";
}

// Change slide when user clicks next or prev buttons
function changeSlide(n) {
    currentSlide += n;
    showSlides(currentSlide);
}

// Auto-play the slideshow (optional)
setInterval(function() {
    changeSlide(1);
}, 5000); // Change slide every 5 seconds
