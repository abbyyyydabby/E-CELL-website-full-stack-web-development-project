let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");

    // Hide all slides and remove active class
    for (i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
        slides[i].classList.add("fade");
    }

    // Increment slideIndex and ensure it loops
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}

    // Display the current slide
    slides[slideIndex - 1].classList.remove("fade");
    slides[slideIndex - 1].classList.add("active");

    // Change slide every 6 seconds
    setTimeout(showSlides, 6000); // Change image every 6 seconds
}