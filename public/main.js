document.addEventListener("DOMContentLoaded", () => {
  
  //Date format
  function formatDateToMDY(dateStr) {
    const [year, month, day] = dateStr.split("T")[0].split("-");
    return `${month}-${day}-${year}`;
  }
  
  //Restaurants
  const form = document.getElementById("restaurant-form");
  const list = document.getElementById("restaurant-list");

  //Displays restaurants
  async function loadRestaurants() {
    list.innerHTML = "";
    const res = await fetch("/restaurants");
    const restaurants = await res.json();

    restaurants.forEach((r) => {
      const li = document.createElement("li");
      li.textContent = `ID: ${r.RestaurantID} — ${r.Name} — ${r.Address} — ${r.ContactEmail}`;
      list.appendChild(li);
    });
  }
  
  //Populate restaurants dropdown for food form
  async function loadRestaurantOptions() {
    const res = await fetch("/restaurants");
    const restaurants = await res.json();
    const select = document.getElementById("f-restaurant");

    select.innerHTML = '<option value="">Select a Restaurant</option>';

    restaurants.forEach((r) => {
      const option = document.createElement("option");
      option.value = r.RestaurantID;
      option.textContent = r.Name;
      select.appendChild(option);
    });
  }

  //Form submission handling 
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const name = document.getElementById("r-name").value;
    const address = document.getElementById("r-address").value;
    const email = document.getElementById("r-email").value;
  
    await fetch("/restaurants", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, address, email }),
    });
  
    form.reset();
    //Updates list
    loadRestaurants();        
    
    //Updates dropdown in Food form
    loadRestaurantOptions(); 
  });
  
  //Page load initializations
  loadRestaurants();
  loadRestaurantOptions();
  

  //Food Items
  const foodForm = document.getElementById("food-form");
  const foodList = document.getElementById("food-list");

  //Displays all food items
  async function loadFoodItems() {
    foodList.innerHTML = "";
    const res = await fetch("/food");
    const items = await res.json();

    items.forEach((item) => {
      const li = document.createElement("li");
      const dateOnly = formatDateToMDY(item.ExpiryDate);
      li.textContent = `ID: ${item.FoodItemID} — ${item.Name} — Qty: ${item.Quantity} — Expires: ${dateOnly} — Restaurant ID: ${item.RestaurantID}`;
      foodList.appendChild(li);
    });
  }

  //Food form submission handling
  foodForm?.addEventListener("submit", async (e) => {
    e.preventDefault();
    const name = document.getElementById("f-name").value;
    const expiry = document.getElementById("f-expiry").value;
    const quantity = document.getElementById("f-quantity").value;
    const restaurantId = document.getElementById("f-restaurant").value;

    await fetch("/food", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, expiryDate: expiry, quantity, restaurantId }),
    });

    foodForm.reset();
    loadFoodItems();
    //Refresh pickup options
    loadPickupOptions(); 
  });

  loadFoodItems();

  //Volunteers
  const volunteerForm = document.getElementById("volunteer-form");
  const volunteerList = document.getElementById("volunteer-list");

  //Display Volunteers
  async function loadVolunteers() {
    volunteerList.innerHTML = "";
    const res = await fetch("/volunteers");
    const volunteers = await res.json();

    volunteers.forEach((v) => {
      const li = document.createElement("li");
      li.textContent = `ID: ${v.VolunteerID} — ${v.Name} — ${v.Phone} — ${v.Email}`;
      volunteerList.appendChild(li);
    });
  }
  //Handler for submission
  volunteerForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const name = document.getElementById("v-name").value;
    const phone = document.getElementById("v-phone").value;
    const email = document.getElementById("v-email").value;

    await fetch("/volunteers", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, phone, email }),
    });

    volunteerForm.reset();
    loadVolunteers();
    
    //Refresh pickup options
    loadPickupOptions(); 
  });

  loadVolunteers();

  //Donation Pickups
  const pickupForm = document.getElementById("pickup-form");
  const pickupList = document.getElementById("pickup-list");

  //Populate dropdowns for pickup form
  async function loadPickupOptions() {
    const [foodRes, volunteerRes] = await Promise.all([
      fetch("/food"),
      fetch("/volunteers"),
    ]);
    const foodItems = await foodRes.json();
    const volunteers = await volunteerRes.json();

    const foodSelect = document.getElementById("p-food");
    const volunteerSelect = document.getElementById("p-volunteer");

    foodSelect.innerHTML = '<option value="">Select Food Item</option>';
    volunteerSelect.innerHTML = '<option value="">Select Volunteer</option>';

    foodItems.forEach((f) => {
      const option = document.createElement("option");
      option.value = f.FoodItemID;
      option.textContent = f.Name;
      foodSelect.appendChild(option);
    });

    volunteers.forEach((v) => {
      const option = document.createElement("option");
      option.value = v.VolunteerID;
      option.textContent = v.Name;
      volunteerSelect.appendChild(option);
    });
  }

  //Display pickups
  async function loadPickups() {
    pickupList.innerHTML = "";
    const res = await fetch("/pickups");
    const pickups = await res.json();

    pickups.forEach((p) => {
      const li = document.createElement("li");
      const dateOnly = formatDateToMDY(p.PickupDate);
      li.textContent = `ID: ${p.PickupID} — ${dateOnly} — ${p.DeliveryLocation} — Food ID: ${p.FoodItemID} — Volunteer ID: ${p.VolunteerID}`;
      pickupList.appendChild(li);
    });
  }

  //Submission handler
  const updatePickupForm = document.getElementById("update-pickup-form");

  updatePickupForm?.addEventListener("submit", async (e) => {
  e.preventDefault();
  const pickupId = document.getElementById("update-pickup-id").value;
  const newLocation = document.getElementById("update-new-location").value;

  await fetch(`/pickups/${pickupId}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ newLocation }),
  });

  updatePickupForm.reset();
  
  //Refresh pickup
  loadPickups(); 
});

  //Handler for pickup submission
  pickupForm?.addEventListener("submit", async (e) => {
    e.preventDefault();
    const pickupDate = document.getElementById("p-date").value;
    const deliveryLocation = document.getElementById("p-location").value;
    const foodItemId = document.getElementById("p-food").value;
    const volunteerId = document.getElementById("p-volunteer").value;

    await fetch("/pickups", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ pickupDate, deliveryLocation, foodItemId, volunteerId }),
    });

    pickupForm.reset();
    loadPickups();
  });

  loadPickupOptions();
  loadPickups();

  //Expiring Food Report
  const expiringBtn = document.getElementById("load-expiring");
  const expiringList = document.getElementById("expiring-list");

  //Display food items expiring
  expiringBtn?.addEventListener("click", async () => {
    expiringList.innerHTML = "Loading...";

    const res = await fetch("/api/reports/expiring");
    const items = await res.json();

    expiringList.innerHTML = "";

    if (items.length === 0) {
      expiringList.innerHTML = "<li>No items expiring in the next 7 days.</li>";
      return;
    }

    items.forEach(item => {
      const li = document.createElement("li");
      const dateOnly = formatDateToMDY(item.ExpiryDate);
      li.textContent = `${item.Name} — Qty: ${item.Quantity} — Expires: ${dateOnly}`;
      expiringList.appendChild(li);
    });
  });
});