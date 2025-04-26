-- MySQL dump 10.13  Distrib 8.0.40, for macos14 (arm64)
--
-- Host: localhost    Database: food_donation
-- ------------------------------------------------------
-- Server version	8.0.41

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `DonationPickup`
--

DROP TABLE IF EXISTS `DonationPickup`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `DonationPickup` (
  `PickupID` int NOT NULL AUTO_INCREMENT,
  `PickupDate` date DEFAULT NULL,
  `DeliveryLocation` text,
  `FoodItemID` int DEFAULT NULL,
  `VolunteerID` int DEFAULT NULL,
  PRIMARY KEY (`PickupID`),
  KEY `FoodItemID` (`FoodItemID`),
  KEY `VolunteerID` (`VolunteerID`),
  CONSTRAINT `donationpickup_ibfk_1` FOREIGN KEY (`FoodItemID`) REFERENCES `FoodItem` (`FoodItemID`),
  CONSTRAINT `donationpickup_ibfk_2` FOREIGN KEY (`VolunteerID`) REFERENCES `Volunteer` (`VolunteerID`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `DonationPickup`
--

LOCK TABLES `DonationPickup` WRITE;
/*!40000 ALTER TABLE `DonationPickup` DISABLE KEYS */;
INSERT INTO `DonationPickup` VALUES (1,'2025-04-20','Homless Shelter 1',1,1),(2,'2025-04-24','Adoption Center 1',5,11);
/*!40000 ALTER TABLE `DonationPickup` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `FoodItem`
--

DROP TABLE IF EXISTS `FoodItem`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `FoodItem` (
  `FoodItemID` int NOT NULL AUTO_INCREMENT,
  `Name` varchar(100) DEFAULT NULL,
  `ExpiryDate` date DEFAULT NULL,
  `Quantity` int DEFAULT NULL,
  `IsClaimed` tinyint(1) DEFAULT '0',
  `RestaurantID` int DEFAULT NULL,
  PRIMARY KEY (`FoodItemID`),
  KEY `RestaurantID` (`RestaurantID`),
  CONSTRAINT `fooditem_ibfk_1` FOREIGN KEY (`RestaurantID`) REFERENCES `Restaurant` (`RestaurantID`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `FoodItem`
--

LOCK TABLES `FoodItem` WRITE;
/*!40000 ALTER TABLE `FoodItem` DISABLE KEYS */;
INSERT INTO `FoodItem` VALUES (1,'Carrots','2025-04-20',100,0,1),(2,'Canned Corn','2025-04-21',20,0,3),(3,'Canned Beans','2025-05-20',30,0,3),(4,'Potato Sacks','2025-04-26',20,0,6),(5,'Buns','2025-04-23',22,0,6);
/*!40000 ALTER TABLE `FoodItem` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Restaurant`
--

DROP TABLE IF EXISTS `Restaurant`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Restaurant` (
  `RestaurantID` int NOT NULL AUTO_INCREMENT,
  `Name` varchar(100) DEFAULT NULL,
  `Address` text,
  `ContactEmail` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`RestaurantID`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Restaurant`
--

LOCK TABLES `Restaurant` WRITE;
/*!40000 ALTER TABLE `Restaurant` DISABLE KEYS */;
INSERT INTO `Restaurant` VALUES (1,'Olive Garden','123 El Camino Real, San Mateo, CA','contact@olivegarden.com'),(2,'Panda Express','456 Castro St, Mountain View, CA','info@pandaexpress.com'),(3,'Chipotle Mexican Grill','789 University Ave, Palo Alto, CA','contact@chipotle.com'),(4,'Dominos Pizza','321 Telegraph Ave, Berkeley, CA','order@dominospizza.com'),(5,'The Cheesecake Factory','555 Bay St, San Francisco, CA','service@cheesecake.com'),(6,'Five Guys','111 Main St, Redwood City, CA','hello@fiveguys.com'),(7,'Shake Shack','202 Embarcadero, San Francisco, CA','info@shakeshack.com'),(8,'Panera Bread','404 Blossom Hill Rd, San Jose, CA','support@panerabread.com'),(9,'Red Robin','888 Great Mall Dr, Milpitas, CA','contact@redrobin.com'),(10,'Buffalo Wild Wings','999 Saratoga Ave, San Jose, CA','service@bwwings.com'),(11,'Burger King','510 Mission Blvd, Hayward, CA','info@burgerking.com'),(12,'Taco Bell','123 Main, Hayward, CA','taco@tacobell.com');
/*!40000 ALTER TABLE `Restaurant` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Volunteer`
--

DROP TABLE IF EXISTS `Volunteer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Volunteer` (
  `VolunteerID` int NOT NULL AUTO_INCREMENT,
  `Name` varchar(100) DEFAULT NULL,
  `Phone` varchar(20) DEFAULT NULL,
  `Email` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`VolunteerID`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Volunteer`
--

LOCK TABLES `Volunteer` WRITE;
/*!40000 ALTER TABLE `Volunteer` DISABLE KEYS */;
INSERT INTO `Volunteer` VALUES (1,'Sofia Ramirez','(408) 555-1234','sofia.ramirez@email.com'),(2,'Jamal Lee','(510) 555-5678','jamal.lee@email.com'),(3,'Emily Tran','(650) 555-7890','emily.tran@email.com'),(4,'Carlos Alvarez','(415) 555-1010','carlos.alvarez@email.com'),(5,'Nina Patel','(669) 555-2020','nina.patel@email.com'),(6,'David Kim','(925) 555-3030','david.kim@email.com'),(7,'Grace Chen','(408) 555-4040','grace.chen@email.com'),(8,'Mohammed Khan','(510) 555-5050','mohammed.khan@email.com'),(9,'Isabella Cruz','(650) 555-6060','isabella.cruz@email.com'),(10,'Ryan Thompson','(415) 555-7070','ryan.thompson@email.com'),(11,'Jason Gonzalez','(123) 456-7890','jason.gonzalez@email.com');
/*!40000 ALTER TABLE `Volunteer` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-04-23 21:55:50
