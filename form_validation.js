document.addEventListener("DOMContentLoaded", function() {
    document.querySelector("form").addEventListener("submit", function(event) {
        let isValid = true;
        let email = document.querySelector("input[type='email']").value;
        let name = document.querySelector("input[name='name']").value;

        // Regular expression to check for alphabets only
        let regex = /^[a-zA-Z\s]+$/;

        if (!regex.test(name)) {
            alert("Please enter only alphabets in the Name field.");
            isValid = false;
        }

        if (!email.includes("@")) {
            alert("Please enter a valid email address.");
            isValid = false;
        }

        if (!isValid) {
            event.preventDefault();
        }
    });
});