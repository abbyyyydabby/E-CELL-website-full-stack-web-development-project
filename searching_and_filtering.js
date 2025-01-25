document.getElementById('searchInput').addEventListener('keyup', function() {
    let filter = this.value.toUpperCase();
    let events = document.querySelectorAll('.event');
    
    events.forEach(function(event) {
        let eventName = event.getAttribute('data-name');
        if (eventName.toUpperCase().indexOf(filter) > -1) {
            event.style.display = "";
        } else {
            event.style.display = "none";
        }
    });
});