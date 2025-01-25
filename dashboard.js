document.getElementById('addEvent').addEventListener('click', function() {
    let newEvent = document.createElement('div');
    newEvent.className = 'event';
    newEvent.textContent = 'New Networking Event';
    document.getElementById('dashboard').appendChild(newEvent);
});