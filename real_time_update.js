// Simulated server data - this would be replaced by actual server calls
let events = [
    { name: "Entrepreneurship Workshop", timestamp: Date.now() },
    { name: "Startup Pitching", timestamp: Date.now() }
];

// Function to simulate fetching new events from the server
function fetchNewEvents() {
    const currentTime = Date.now();

    // Simulate adding a new event if it's been less than 3 added events
    if (events.length < 7) {
        events.push({ name: "New Networking Event", timestamp: currentTime });
    }

    // Remove events that are older than 30 seconds (for demonstration)
    events = events.filter(event => currentTime - event.timestamp < 30000);

    updateEventList();
}

// Function to update the event list in the DOM
function updateEventList() {
    const eventList = document.getElementById('eventList');
    eventList.innerHTML = ''; // Clear existing events

    events.forEach(event => {
        let eventDiv = document.createElement('div');
        eventDiv.className = 'event';
        eventDiv.textContent = event.name;
        eventList.appendChild(eventDiv);
    });
}

// Poll the server every 5 seconds to check for new events and remove old ones
setInterval(fetchNewEvents, 5000);

// Initial call to display existing events
updateEventList();