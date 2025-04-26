# Food Donation App

A full-stack web application designed to streamline food donation operations between restaurants and shelters. Built using **Node.js**, **Express**, **MySQL**, and a clean frontend powered by **HTML**, **CSS**, and **JavaScript**.

---

## Summary

This application enables users to:
- Add and view **restaurants**, **volunteers**, and **food items**
- Schedule and update **donation pickups**
- View food items that are **expiring in the next 7 days**

Data is stored in a **MySQL** database with pre-populated tables and queried using custom SQL through a backend that follows the **DAO design pattern**. The UI is styled for clarity, features live updates, and is tested to run smoothly on Chrome.

---

## Key SQL Examples

```sql
-- Insert a new restaurant
INSERT INTO Restaurant (Name, Address, ContactEmail) VALUES (?, ?, ?);

-- Insert a new volunteer
INSERT INTO Volunteer (Name, Phone, Email) VALUES (?, ?, ?);

-- Insert a new food item
INSERT INTO FoodItem (Name, ExpiryDate, Quantity, RestaurantID) VALUES (?, ?, ?, ?);

-- Insert a new donation pickup
INSERT INTO DonationPickup (PickupDate, DeliveryLocation, FoodItemID, VolunteerID) VALUES (?, ?, ?, ?);

-- Update delivery location
UPDATE DonationPickup SET DeliveryLocation = ? WHERE PickupID = ?;

-- Get food items expiring in next 7 days
SELECT * FROM FoodItem WHERE ExpiryDate BETWEEN CURDATE() AND DATE_ADD(CURDATE(), INTERVAL 7 DAY);
```

## Demo Video

Watch the full functionality (backend, database, frontend) working here:  
  Demo Video Link:
