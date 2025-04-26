const express = require("express");
const cors = require("cors");

//Data Access
const DAO = require("./DAO");
const Repository = require("./Repository");

const app = express();
const port = 3000;

//Data Handling
const dao = new DAO();
const repo = new Repository(dao);

app.use(cors());
app.use(express.json());
app.use(express.static("public")); // frontend folder

//Restaurants
app.get("/restaurants", async (req, res) => {
  try {
    const data = await repo.getAllRestaurants();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

//Add new restaurants
app.post("/restaurants", async (req, res) => {
  const { name, address, email } = req.body;
  try {
    const result = await repo.addRestaurant(name, address, email);
    res.json({ message: "Restaurant added", result });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

//Food Items
app.get("/food", async (req, res) => {
  try {
    const data = await repo.getAllFoodItems();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

//Add new food
app.post("/food", async (req, res) => {
  const { name, expiryDate, quantity, restaurantId } = req.body;
  try {
    const result = await repo.addFoodItem(name, expiryDate, quantity, restaurantId);
    res.json({ message: "Food item added", result });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


//Volunteers
app.get("/volunteers", async (req, res) => {
  try {
    const data = await repo.getAllVolunteers();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

//Add new volunteers
app.post("/volunteers", async (req, res) => {
  const { name, phone, email } = req.body;
  try {
    const result = await repo.addVolunteer(name, phone, email);
    res.json({ message: "Volunteer added", result });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

//Donation Pickups
app.get("/pickups", async (req, res) => {
  try {
    const data = await repo.getAllPickups();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

//Add new pickup
app.post("/pickups", async (req, res) => {
  const { pickupDate, deliveryLocation, foodItemId, volunteerId } = req.body;
  try {
    const result = await repo.addPickup(pickupDate, deliveryLocation, foodItemId, volunteerId);
    res.json({ message: "Pickup added", result });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

//Update location of a pickup
app.put("/pickups/:id", async (req, res) => {
  const pickupId = req.params.id;
  const { newLocation } = req.body;

  try {
    const result = await repo.updatePickupLocation(pickupId, newLocation);
    res.json({ message: "Pickup location updated", result });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

//Report
app.get("/api/reports/expiring", async (req, res) => {
  try {
    const data = await repo.getExpiringSoon();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

//Starts server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});