 // Function to show a notification
 function showNotification() {
    const notification = new Notification("Event Reminder", {
        body: "Don't forget about the Entrepreneurship Workshop tomorrow!",
        icon: "https://via.placeholder.com/48" // Placeholder icon
    });

    notification.onclick = () => {
        window.focus(); // Bring the window into focus when the notification is clicked
    };
}

// Request notification permission
document.getElementById('notifyMe').addEventListener('click', function() {
    if (Notification.permission === "granted") {
        // Show the notification if permission is already granted
        showNotification();
    } else if (Notification.permission !== "denied") {
        // Request permission if it hasn't been denied
        Notification.requestPermission().then(function(permission) {
            if (permission === "granted") {
                showNotification();
            }
        });
    } else {
        alert("Notifications are blocked. Please enable them in your browser settings.");
    }
});