// Check if the browser supports service workers
if ("serviceWorker" in navigator) {
    // Register the service worker file
    navigator.serviceWorker.register("sworker.js")
        .then(registration => {
            console.log("Service worker registered successfully");
            console.log(registration);
        })
        .catch(error => {
            console.error("Service worker registration failed:", error);
        });
} else {
    // Alert the user if service workers are not supported
    alert("Service workers are not supported in this browser.");
}

// Function to toggle the visibility of the side panel
function toggleSidePanel() {
    var sidePanel = document.getElementById('sidePanel');
    sidePanel.classList.toggle('hidden');
}

// Function to handle the action of opening the login page
function openLogin() {
    // Add logic here to open the login page
    console.log('Opening login page...');
    // You can replace the console.log statement with the actual logic to open the login page
}

function handleFlightCardClick() {
    console.log("Flight card clicked");
    // Redirect the user to the flights booking page
    window.location.href = "flights.html";
}

function switchTab(tabName) {
    // Hide all tab contents
    var tabContents = document.getElementsByClassName('tabContent');
    for (var i = 0; i < tabContents.length; i++) {
        tabContents[i].style.display = 'none';
    }

    // Show the selected tab content
    document.getElementById(tabName + 'Content').style.display = 'block';
}

function openNewPage() {
    // Open a new blank page
    var newWindow = window.open('', '_blank');
    // Write "hi" to the new page
    newWindow.document.write('<h1>hi</h1>');
}
