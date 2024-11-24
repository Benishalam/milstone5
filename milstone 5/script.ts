// Get references to DOM elements
const nameInput = document.getElementById("name") as HTMLInputElement;
const generateLinkButton = document.getElementById("generate-link") as HTMLButtonElement;
const linkSection = document.getElementById("link-section") as HTMLElement;
const shareableLink = document.getElementById("shareable-link") as HTMLAnchorElement;
const copyLinkButton = document.getElementById("copy-link") as HTMLButtonElement;
const welcomeSection = document.getElementById("welcome-section") as HTMLElement;
const userNameDisplay = document.getElementById("user-name") as HTMLElement;

// Base URL (replace with your deployment URL if needed)
const baseURL = window.location.origin;

// Function to generate the shareable link
function generateLink() {
  const userName = nameInput.value.trim();
  if (!userName) {
    alert("Please enter your name!");
    return;
  }
  const uniquePath = `?name=${encodeURIComponent(userName)}`; // Fixed template string for uniquePath
  const fullURL = `${baseURL}${uniquePath}`; // Corrected concatenation using template strings

  shareableLink.href = fullURL;
  shareableLink.textContent = fullURL;
  linkSection.style.display = "block";
}

// Function to copy the shareable link to clipboard
function copyLink() {
  navigator.clipboard.writeText(shareableLink.href).then(() => {
    alert("Link copied to clipboard!");
  }).catch((err) => {
    alert("Failed to copy the link!");
    console.error(err);
  });
}

// Function to display the welcome message if "name" is in the URL
function checkURLParams() {
  const urlParams = new URLSearchParams(window.location.search);
  const userName = urlParams.get("name");
  if (userName) {
    userNameDisplay.textContent = decodeURIComponent(userName);
    welcomeSection.style.display = "block";
    document.getElementById("input-section")!.style.display = "none";
  }
}

// Event listeners
generateLinkButton.addEventListener("click", generateLink);
copyLinkButton.addEventListener("click", copyLink);
window.addEventListener("load", checkURLParams);