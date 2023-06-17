// Define an array of businesses with their properties
const businesses = [
  {
    name: "Coffee Shop",
    cost: 100,
    incomeRate: 1,
    level: 1
  },
  {
    name: "Tech Startup",
    cost: 500,
    incomeRate: 5,
    level: 1
  },
  {
    name: "Fashion Boutique",
    cost: 1000,
    incomeRate: 10,
    level: 1
  },
  // Add more businesses...
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

// Buy a business
function buyBusiness(index) {
  const business = businesses[index];
  
  // Check if the player has enough money to buy the business
  if (money >= business.cost) {
    money -= business.cost; // Deduct the cost from the player's money
    
    // Increase the income rate and level of the business
    business.incomeRate++;
    business.level++;
    
    displayBusinesses(); // Update the displayed businesses
    
    // Start generating income from the purchased business
    setInterval(() => {
      money += business.level * business.incomeRate;
      updateMoneyDisplay();
    }, 1000);
  }
}

// Update the money display in the game interface
function updateMoneyDisplay() {
  const moneyDisplay = document.getElementById("money-display");
  moneyDisplay.textContent = "Money: $" + money;
}

// Add event listener to the click button
clickButton.addEventListener("click", () => {
  money++;
  updateMoneyDisplay();
});

// Call the displayBusinesses function to initially display the businesses
displayBusinesses();
