// Simulated poll results
let pollResults = {
    Workshop: 0,
    Networking: 0,
    Pitching: 0
};

// Function to simulate fetching new poll results
function fetchPollResults() {
    // Simulate random changes in votes for demonstration
    pollResults.Workshop += Math.floor(Math.random() * 2);
    pollResults.Networking += Math.floor(Math.random() * 2);
    pollResults.Pitching += Math.floor(Math.random() * 2);
    
    updatePollResults();
}

// Function to handle poll submission
function submitPoll() {
    let selectedOption = document.querySelector('input[name="poll"]:checked');
    if (selectedOption) {
        pollResults[selectedOption.value]++;
        updatePollResults();
    } else {
        alert("Please select an option before submitting.");
    }
}

// Function to update the poll results display
function updatePollResults() {
    document.getElementById('workshopVotes').textContent = pollResults.Workshop;
    document.getElementById('networkingVotes').textContent = pollResults.Networking;
    document.getElementById('pitchingVotes').textContent = pollResults.Pitching;
}

// Simulate real-time update every 5 seconds
setInterval(fetchPollResults, 5000);