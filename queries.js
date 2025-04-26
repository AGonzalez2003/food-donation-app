const queries = {
    //Restaurant
    getAllRestaurants: `SELECT * FROM Restaurant`,
    addRestaurant: `INSERT INTO Restaurant (Name, Address, ContactEmail) VALUES (?, ?, ?)`,
  
    //Food Items
    getAllFoodItems: `SELECT * FROM FoodItem`,
    addFoodItem: `INSERT INTO FoodItem (Name, ExpiryDate, Quantity, RestaurantID) VALUES (?, ?, ?, ?)`,
  
    //Volunteers
    getAllVolunteers: `SELECT * FROM Volunteer`,
    addVolunteer: `INSERT INTO Volunteer (Name, Phone, Email) VALUES (?, ?, ?)`,
  
    //Pickups
    getAllPickups: `SELECT * FROM DonationPickup`,
    addPickup: `INSERT INTO DonationPickup (PickupDate, DeliveryLocation, FoodItemID, VolunteerID) VALUES (?, ?, ?, ?)`,

    updatePickupLocation: `
    UPDATE DonationPickup 
    SET DeliveryLocation = ? 
    WHERE PickupID = ?`,
  
    //Expires soon
    getExpiringSoon: `
    SELECT * FROM FoodItem 
    WHERE ExpiryDate BETWEEN CURDATE() AND DATE_ADD(CURDATE(), INTERVAL 7 DAY)`,

  };
  
  module.exports = queries;