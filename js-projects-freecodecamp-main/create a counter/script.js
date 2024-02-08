// Get the counter element
const counter = document.getElementById("count");

// Get the increment button
const incrementButton = document.getElementById("increment");

// Initialize count
let count = 0;

// Update the counter text
function updateCounter() {
  counter.textContent = count;
}

// Increment count and update counter text
function incrementCount() {
  count++;
  updateCounter();
}

// Add click event listener to increment button
incrementButton.addEventListener("click", incrementCount);

// Initial counter display
updateCounter();
