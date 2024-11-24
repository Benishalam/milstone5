// Get references to DOM elements
var nameInput = document.getElementById("name");
var generateLinkButton = document.getElementById("generate-link");
var linkSection = document.getElementById("link-section");
var shareableLink = document.getElementById("shareable-link");
var copyLinkButton = document.getElementById("copy-link");
var welcomeSection = document.getElementById("welcome-section");
var userNameDisplay = document.getElementById("user-name");
// Base URL (replace with your deployment URL if needed)
var baseURL = window.location.origin;
// Function to generate the shareable link
function generateLink() {
    var userName = nameInput.value.trim();
    if (!userName) {
        alert("Please enter your name!");
        return;
    }
    var uniquePath = "?name=".concat(encodeURIComponent(userName)); // Fixed template string for uniquePath
    var fullURL = "".concat(baseURL).concat(uniquePath); // Corrected concatenation using template strings
    shareableLink.href = fullURL;
    shareableLink.textContent = fullURL;
    linkSection.style.display = "block";
}
// Function to copy the shareable link to clipboard
function copyLink() {
    navigator.clipboard.writeText(shareableLink.href).then(function () {
        alert("Link copied to clipboard!");
    }).catch(function (err) {
        alert("Failed to copy the link!");
        console.error(err);
    });
}
// Function to display the welcome message if "name" is in the URL
function checkURLParams() {
    var urlParams = new URLSearchParams(window.location.search);
    var userName = urlParams.get("name");
    if (userName) {
        userNameDisplay.textContent = decodeURIComponent(userName);
        welcomeSection.style.display = "block";
        document.getElementById("input-section").style.display = "none";
    }
}
// Event listeners
generateLinkButton.addEventListener("click", generateLink);
copyLinkButton.addEventListener("click", copyLink);
window.addEventListener("load", checkURLParams);
