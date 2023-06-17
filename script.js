// script.js

let money = 0;

// Get the money display element
const moneyDisplay = document.getElementById("money-display");

// Get the click button element
const clickButton = document.getElementById("click-button");

// Add a click event listener to the button
clickButton.addEventListener("click", () => {
  // Increment the money value and update the display
  money++;
  moneyDisplay.textContent = "Money: $" + money;
});
