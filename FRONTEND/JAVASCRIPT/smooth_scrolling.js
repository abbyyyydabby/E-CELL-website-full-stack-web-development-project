document.addEventListener("DOMContentLoaded", function() {
    const scrollButton = document.getElementById('scroll-down');

    // Function to show or hide the scroll button based on scroll position
    window.onscroll = function() {
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 70) {
            scrollButton.classList.remove('hidden');
            scrollButton.classList.add('visible');
        } else {
            scrollButton.classList.remove('visible');
            scrollButton.classList.add('hidden');
        }
    };

    // Scroll to the bottom of the page when the button is clicked
    scrollButton.addEventListener('click', function(event) {
        event.preventDefault();
        window.scrollTo({
            top: document.documentElement.scrollHeight - document.documentElement.clientHeight,
            behavior: 'smooth'
        });
    });
});
