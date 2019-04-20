-- MySQL dump 10.13  Distrib 5.7.25, for Linux (x86_64)
--
-- Host: localhost    Database: MobilePhoneShop
-- ------------------------------------------------------
-- Server version	5.7.25-0ubuntu0.18.04.2

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `Brands`
--

DROP TABLE IF EXISTS `Brands`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Brands` (
  `id` int(6) unsigned NOT NULL AUTO_INCREMENT,
  `brand_name` varchar(30) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Brands`
--

LOCK TABLES `Brands` WRITE;
/*!40000 ALTER TABLE `Brands` DISABLE KEYS */;
INSERT INTO `Brands` VALUES (1,'Apple'),(2,'Samsung'),(3,'OnePlus'),(4,'Huawei'),(5,'LG'),(6,'Lenovo'),(7,'Oppo'),(8,'Xiomi'),(9,'BlackBerry'),(10,'Asuz'),(11,'Nokia'),(12,'Sony'),(13,''),(14,'brand_name'),(15,''),(16,''),(17,'brand_name'),(18,'2brand_name'),(19,'12312'),(20,'123123'),(21,'12313'),(22,'NewBrand'),(23,'ttttttttttttttttttttttttttt'),(24,'Brand_NEW'),(25,'Brand_NEW'),(26,'brandMy');
/*!40000 ALTER TABLE `Brands` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `PhoneModels`
--

DROP TABLE IF EXISTS `PhoneModels`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `PhoneModels` (
  `id` int(6) unsigned NOT NULL AUTO_INCREMENT,
  `brand` varchar(30) NOT NULL,
  `model` varchar(30) NOT NULL,
  `price` int(8) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `PhoneModels`
--

LOCK TABLES `PhoneModels` WRITE;
/*!40000 ALTER TABLE `PhoneModels` DISABLE KEYS */;
INSERT INTO `PhoneModels` VALUES (1,'Apple','5',50000),(3,'Apple','6',70000),(4,'Apple','6s',80000),(5,'Samsung','S4',40000),(6,'Samsung','S5',50000),(7,'Samsung','S6',70000),(15,'MyBrand','Model',13000),(16,'Brand1','Model',13000),(22,'Xiomi','M1',1000),(23,'Xiomi','M1',1000);
/*!40000 ALTER TABLE `PhoneModels` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Users`
--

DROP TABLE IF EXISTS `Users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Users` (
  `id` int(6) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `user_name` varchar(50) NOT NULL,
  `password` varchar(30) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Users`
--

LOCK TABLES `Users` WRITE;
/*!40000 ALTER TABLE `Users` DISABLE KEYS */;
INSERT INTO `Users` VALUES (1,'asd','asd','asdad','adad'),(2,'1asd','1asd','a1sdad','a12dad'),(3,'admin','admin@admin.com','admin','admin'),(4,'rajitha','rajitha','rajitha','rajitha'),(5,'test','test','test','test'),(6,'asd','asd','new','rajithapass'),(7,'123','123','asdas123','rajithapass'),(8,'asd','asd','new','rajithapass'),(9,'123','12','new','rajithapass'),(10,'asd','asd','new','rajithapass'),(11,'2312','123','asdas123','rajithapass'),(12,'dqwd','d1','new','rajithapass'),(13,'as','asdasd','new','rajithapass'),(14,'qwqwd','qwd1d','new','asdasdq'),(15,'asd','asd','new','rajithapass'),(16,'aasd','asd','new','rajithapass'),(17,'adasd','ad','new','111'),(18,'Dean','Dean','newDean','newDean'),(19,'qw','qe','new','11'),(20,'qdadqw','dadqw12','new','12'),(21,'asdad','adsads','new','123'),(22,'asdad','asdasd','new','11'),(23,'Dean','Dean','newDean','12'),(24,'ASD11S','ASADAS','new','1'),(25,'asdasd','asdasd','new','123'),(26,'1','1','1','12'),(27,'123','1231','1231','1'),(28,'yyyyyy','yyyy','yyy','yy'),(29,'23424','23424','234','34'),(30,'44','44','44','44'),(31,'1231','asdasd','rajitha','4'),(32,'123123','123123','123123','logme'),(33,'asd','dsad','dasd','11');
/*!40000 ALTER TABLE `Users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-04-15 15:28:46
