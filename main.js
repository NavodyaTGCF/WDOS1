// Choosing the Elements by Id
const costButton = document.getElementById('coste');
const singleRoomsInput = document.getElementById('single_Rooms');
const doubleRoomsInput = document.getElementById('double_Rooms');
const tripleRoomsInput = document.getElementById('tripple_Rooms');
const extraRoomsInput = document.getElementById('Extra_rooms');
const adultsInput = document.getElementById('aduts');
const aboveFiveInput = document.getElementById('above_five');
const underFiveInput = document.getElementById('under_five');
const totalCostDisplay = document.getElementById('totalCostDisplay');
const promoCodeInput = document.getElementById('promoCode');
const availabilityMessage = document.getElementById('availabilityMessage');

// Calculating the Cost
function calculateTotalCost() {
  const singleRooms = parseInt(singleRoomsInput.value) || 0;
  const doubleRooms = parseInt(doubleRoomsInput.value) || 0;
  const tripleRooms = parseInt(tripleRoomsInput.value) || 0;
  const extraRooms = parseInt(extraRoomsInput.value) || 0;
  const adults = parseInt(adultsInput.value) || 1;
  const aboveFive = parseInt(aboveFiveInput.value) || 0;
  const underFive = parseInt(underFiveInput.value) || 0;

  
  const roomCost = singleRooms * 25000 + doubleRooms * 35000 + tripleRooms * 45000 + extraRooms * 8000 +aboveFive*5000;
   

  let totalCost = roomCost;

  
  totalCostDisplay.textContent = `Total Cost for ${adults} Adults and ${aboveFive} Children above Five with${singleRooms} Single Rooms, ${doubleRooms} Double Rooms, ${tripleRooms} Triple Rooms and ${extraRooms} is:  $${totalCost}`;
}





// Checking The Promo Code
function checkPromotion() {
  const promoCode = promoCodeInput.value;

  if (promoCode === 'Promo123') {
    const totalCostText = totalCostDisplay.textContent;
    const totalCost = parseFloat(totalCostText.split(':')[1].trim().slice(1));

    const promotion = totalCost * (5 / 100);
    const costWithPromo= totalCost - promotion
    availabilityMessage.textContent = `Promotion applied! 
    You get a discount of $${promotion}, 
    and The final Cost with the 5% Promotion  added is:$ ${costWithPromo}`; 
  } else {
    availabilityMessage.textContent = 'Invalid promo code. No promotion applied.';
  }
}


costButton.addEventListener('click', calculateTotalCost);
document.getElementById('checkButton').addEventListener('click', checkPromotion);




// Function to calculate loyalty points

const loyaltyPointsDisplay = document.getElementById('loyalty_pnts');
function calculateLoyaltyPoints() {
  const adults = parseInt(adultsInput.value) || 1;
  const singleRooms = parseInt(singleRoomsInput.value) || 0;
  const doubleRooms = parseInt(doubleRoomsInput.value) || 0;
  const tripleRooms = parseInt(tripleRoomsInput.value) || 0;
  const extraRooms = parseInt(extraRoomsInput.value) || 0;

  if (singleRooms > 3|| doubleRooms >3 ||tripleRooms>3||extraRooms>3) {
    const loyaltyPoints = singleRooms * 20 + doubleRooms*20 + tripleRooms*20+extraRooms*20;
    loyaltyPointsDisplay.textContent = `Loyalty Points Earned: ${loyaltyPoints}`;
  } else {
    loyaltyPointsDisplay.textContent = `No Loyalty Points Earned for`;
  }
}


document.getElementById('loyalty_btn').addEventListener('click', calculateLoyaltyPoints);

// Adventutre Booking Confirmation

function displaySelection() {
  var selectedAdventure = document.getElementById("adventure_bookinf").value;
  var confirmationMessage = document.getElementById("confirmationMessage");
  confirmationMessage.textContent =  `Booking Successful. Thank you for Booking ${selectedAdventure}.`;
}


var bookAdventureButton = document.getElementById("adventure_book_btn");
bookAdventureButton.addEventListener("click", displaySelection);







// Diving form Calculations
document.addEventListener('DOMContentLoaded', function() {
  const localAdultsInput = document.getElementById('localadults');
  const localKidsInput = document.getElementById('localkidss');
  const foreignAdultsInput = document.getElementById('foreingadults');
  const foreignKidsInput = document.getElementById('foreingkids');
  const adultGuideCheckbox = document.getElementById('adultguide');
  const childrenGuideCheckbox = document.getElementById('childrenguide');
  const displayDivingCost = document.getElementById('display_diving_cost');
  const totalDivingCostButton = document.getElementById('total_divin_cost');

  totalDivingCostButton.addEventListener('click', function() {
    const localAdultsHours = parseInt(localAdultsInput.value) || 0;
    const localKidsHours = parseInt(localKidsInput.value) || 0;
    const foreignAdultsHours = parseInt(foreignAdultsInput.value) || 0;
    const foreignKidsHours = parseInt(foreignKidsInput.value) || 0;
    const adultGuideSelected = adultGuideCheckbox.checked;
    const childrenGuideSelected = childrenGuideCheckbox.checked;

    const divingCostLocalAdults = 5000 * localAdultsHours;
    const divingCostLocalKids = 2000 * localKidsHours;
    const divingCostForeignAdults = 10000 * foreignAdultsHours;
    const divingCostForeignKids = 5000 * foreignKidsHours;

    let guideCost = 0;
    if (adultGuideSelected) {
      guideCost += 1000 * localAdultsHours;
      if (foreignAdultsHours > 0) {
        guideCost += 1000 * foreignAdultsHours;
      }
    }
    if (childrenGuideSelected) {
      guideCost += 500 * (localKidsHours + foreignKidsHours);
    }

    const totalDivingCost = divingCostLocalAdults + divingCostLocalKids + divingCostForeignAdults + divingCostForeignKids + guideCost;

    displayDivingCost.innerHTML = `<p>Total Diving Cost: ${totalDivingCost} LKR</p>`;
  });
});

// Booking Confirmation
document.addEventListener('DOMContentLoaded', function() {
  const bookNowButton = document.getElementById('bookNow');
  const confirmationDisplay = document.getElementById('confirmation');
  const totalCostDisplay = document.getElementById('totalCostDisplay');
  const availabilityMessage = document.getElementById('availabilityMessage');
  const loyaltyPointsDisplay = document.getElementById('loyalty_pnts');
  const displayDivingCost = document.getElementById('display_diving_cost');

  bookNowButton.addEventListener('click', function() {
    const totalCost = totalCostDisplay.textContent || 'Total Cost information not available';
    const promotionInfo = availabilityMessage.textContent || 'Promotion information not available';
    const loyaltyPoints = loyaltyPointsDisplay.textContent || 'Loyalty points information not available';
    const divingCost = displayDivingCost.innerHTML || 'Diving cost information not available';

    const summary = `

      <h2>Booking Confirmed</h2>
      <br>
      <h4>Booking Summary</h4>
      <br>
      <p><strong>Total Cost:</strong> ${totalCost}</p>
      <br>
      <p><strong>Promotion:</strong> ${promotionInfo}</p>
      <br>
      <p><strong>Loyalty Points:</strong> ${loyaltyPoints}</p>
      <br>
      <p><strong>Diving Cost:</strong> ${divingCost}</p>
      <br>
    `;

    confirmationDisplay.innerHTML = summary;
  });
});


document.addEventListener('DOMContentLoaded', function() {
  const addToFavouriteButton = document.getElementById('add_to_fav');

  addToFavouriteButton.addEventListener('click', function() {
    const formData = {
      username : document.getElementById('username').value,
      contactNumber: document.getElementById('contact_no').value,
      checkInDate: document.getElementById('check_in').value,
      checkOutDate: document.getElementById('check_out').value,
      singleRooms: document.getElementById('single_Rooms').value,
      doubleRooms: document.getElementById('double_Rooms').value,
      tripleRooms: document.getElementById('tripple_Rooms').value,
      extraRooms: document.getElementById('Extra_rooms').value,
      adults: document.getElementById('aduts').value,
      childrenAboveFive: document.getElementById('above_five').value,
      childrenUnderFive: document.getElementById('under_five').value,
      wifi: document.getElementById('wifi').checked,
      beachView: document.getElementById('beach_view').checked,
      gardenView: document.getElementById('garden View').checked

      
      
    };

    
    let jsonData = JSON.stringify(formData);

    
    localStorage.setItem('favoriteFormData', jsonData);

    
    alert('Added to Favourite..!');
  });
});


