const queries = require('./queries');

class Repository {
  constructor(dao) {
    this.dao = dao;
  }

  //Restaurants
  getAllRestaurants() {
    return this.dao.run(queries.getAllRestaurants);
  }

  addRestaurant(name, address, email) {
    return this.dao.run(queries.addRestaurant, [name, address, email]);
  }

  //Food Items
  getAllFoodItems() {
    return this.dao.run(queries.getAllFoodItems);
  }

  addFoodItem(name, expiryDate, quantity, restaurantId) {
    return this.dao.run(queries.addFoodItem, [name, expiryDate, quantity, restaurantId]);
  }

  //Volunteers
  getAllVolunteers() {
    return this.dao.run(queries.getAllVolunteers);
  }

  addVolunteer(name, phone, email) {
    return this.dao.run(queries.addVolunteer, [name, phone, email]);
  }

  //Pickups
  getAllPickups() {
    return this.dao.run(queries.getAllPickups);
  }

  addPickup(pickupDate, deliveryLocation, foodItemId, volunteerId) {
    return this.dao.run(queries.addPickup, [pickupDate, deliveryLocation, foodItemId, volunteerId]);
  }

  updatePickupLocation(pickupId, newLocation) {
    return this.dao.run(queries.updatePickupLocation, [newLocation, pickupId]);
  }  
  
  //Expiring Soon
  getExpiringSoon() {
    return this.dao.run(queries.getExpiringSoon);
  }

}

module.exports = Repository;