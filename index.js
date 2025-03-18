// Remove the <main> element with id "main"
const main = document.getElementById("main");
if (main) {
  main.remove();
}

// Create a new <h1> element
const newHeader = document.createElement("h1");

newHeader.id = "victory";

newHeader.textContent = "YOUR-NAME is the champion";

document.body.appendChild(newHeader);
