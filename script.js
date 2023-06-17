// Define global variables
let money = 0;
let businesses = [
  {
    name: "Coffee Shop",
    cost: 100,
    incomeRate: 1,
    level: 1
  },
  {
    name: "Restaurant",
    cost: 500,
    incomeRate: 5,
    level: 1
  },
  {
    name: "Tech Startup",
    cost: 1000,
    incomeRate: 10,
    level: 1
  }
];

// Display the list of businesses in the game interface
function displayBusinesses() {
  const businessList = document.getElementById("business-list");
  businessList.innerHTML = ""; // Clear previous list

  businesses.forEach((business, index) => {
    const listItem = document.createElement("li");
    listItem.textContent = `${business.name} (Level ${business.level}) - Income: $${business.level * business.incomeRate}/s`;
    businessList.appendChild(listItem);

    const buyButton = document.createElement("button");
    buyButton.textContent = `Buy (${business.cost})`;
    buyButton.addEventListener("click", () => buyBusiness(index));
    listItem.appendChild(buyButton);
  });
}

// Update the money display in the game interface
function updateMoneyDisplay() {
  const moneyDisplay = document.getElementById("money-display");
  moneyDisplay.textContent = "Money: $" + money;
}

// Buy a business
function buyBusiness(index) {
  const business = businesses[index];

  // Check if the player has enough money to buy the business
  if (money >= business.cost) {
    money -= business.cost; // Deduct the cost from the player's money

    // Increase the income rate and level of the business
    business.incomeRate++;
    business.level++;

    updateAvailableBusinesses(); // Update available businesses
    displayBusinesses(); // Update the displayed businesses
    updateMoneyDisplay(); // Update the money display
  }
}

// Update available businesses after reaching a money threshold
function updateAvailableBusinesses() {
  if (money >= 1000) {
    businesses.push(
      {
        name: "New Business 1",
        cost: 5000,
        incomeRate: 50,
        level: 1
      },
      {
        name: "New Business 2",
        cost: 10000,
        incomeRate: 100,
        level: 1
      },
      {
        name: "New Business 3",
        cost: 20000,
        incomeRate: 200,
        level: 1
      }
      // Add other new businesses...
    );
  }
}


// Add event listener to the click button
document.getElementById("click-button").addEventListener("click", () => {
  money++;
  updateMoneyDisplay();
});

// Initial display of money and businesses
updateMoneyDisplay();
displayBusinesses();

// Refresh the game every 10 seconds
setInterval(() => {
  updateAvailableBusinesses(); // Update available businesses
  displayBusinesses(); // Update the displayed businesses
  updateMoneyDisplay(); // Update the money display
}, 10000);
