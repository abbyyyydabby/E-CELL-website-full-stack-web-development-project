// Initialize poll results
let pollResults = {
    Workshop: 0,
    Networking: 0,
    Pitching: 0
};

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