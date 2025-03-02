// Remove the <main> element with id "main"
const main = document.getElementById("main");
if (main) {
  main.remove();
}

// Create a new <h1> element
const newHeader = document.createElement("h1");

// Set the id of the new <h1> to "victory"
newHeader.id = "victory";

// Set the text inside the <h1> to "YOUR-NAME is the champion"
newHeader.textContent = "YOUR-NAME is the champion"; // Replace YOUR-NAME

// Append the newHeader to the body
document.body.appendChild(newHeader);
