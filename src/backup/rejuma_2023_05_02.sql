-- MySQL dump 10.13  Distrib 8.0.32, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: rejuma
-- ------------------------------------------------------
-- Server version	8.0.32-0ubuntu0.22.04.2

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
-- Table structure for table `Registration`
--

DROP TABLE IF EXISTS `Registration`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Registration` (
  `id` int NOT NULL AUTO_INCREMENT,
  `createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updatedAt` datetime(3) NOT NULL,
  `type` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `price` decimal(65,30) NOT NULL,
  `classTeamId` int NOT NULL,
  `courseId` int DEFAULT NULL,
  `classId` int NOT NULL,
  `schoolYearId` int NOT NULL,
  `statusId` int NOT NULL,
  `studentId` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `Registration_studentId_classTeamId_key` (`studentId`,`classTeamId`),
  KEY `Registration_classTeamId_fkey` (`classTeamId`),
  KEY `Registration_classId_fkey` (`classId`),
  KEY `Registration_schoolYearId_fkey` (`schoolYearId`),
  KEY `Registration_statusId_fkey` (`statusId`),
  KEY `Registration_courseId_fkey` (`courseId`),
  CONSTRAINT `Registration_classId_fkey` FOREIGN KEY (`classId`) REFERENCES `class` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE,
  CONSTRAINT `Registration_classTeamId_fkey` FOREIGN KEY (`classTeamId`) REFERENCES `classteam` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE,
  CONSTRAINT `Registration_courseId_fkey` FOREIGN KEY (`courseId`) REFERENCES `course` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE,
  CONSTRAINT `Registration_schoolYearId_fkey` FOREIGN KEY (`schoolYearId`) REFERENCES `schoolyear` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE,
  CONSTRAINT `Registration_statusId_fkey` FOREIGN KEY (`statusId`) REFERENCES `status` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE,
  CONSTRAINT `Registration_studentId_fkey` FOREIGN KEY (`studentId`) REFERENCES `student` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Registration`
--

LOCK TABLES `Registration` WRITE;
/*!40000 ALTER TABLE `Registration` DISABLE KEYS */;
/*!40000 ALTER TABLE `Registration` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `_prisma_migrations`
--

DROP TABLE IF EXISTS `_prisma_migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `_prisma_migrations` (
  `id` varchar(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `checksum` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `finished_at` datetime(3) DEFAULT NULL,
  `migration_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `logs` text COLLATE utf8mb4_unicode_ci,
  `rolled_back_at` datetime(3) DEFAULT NULL,
  `started_at` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `applied_steps_count` int unsigned NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `_prisma_migrations`
--

LOCK TABLES `_prisma_migrations` WRITE;
/*!40000 ALTER TABLE `_prisma_migrations` DISABLE KEYS */;
INSERT INTO `_prisma_migrations` VALUES ('007ee0c0-c708-420b-86ec-06c595326807','944293fc9a8b6c89f4a4ead8cf97b4c09ba1dee48f3fe569f4db8aac336931f5','2023-05-01 14:41:00.588','20230501124318_init',NULL,NULL,'2023-05-01 14:40:56.251',1);
/*!40000 ALTER TABLE `_prisma_migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `class`
--

DROP TABLE IF EXISTS `class`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `class` (
  `id` int NOT NULL AUTO_INCREMENT,
  `createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updatedAt` datetime(3) NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `class_name_key` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `class`
--

LOCK TABLES `class` WRITE;
/*!40000 ALTER TABLE `class` DISABLE KEYS */;
INSERT INTO `class` VALUES (3,'2023-05-01 14:47:26.965','2023-05-01 14:47:26.965','1ª'),(4,'2023-05-01 14:47:42.363','2023-05-01 14:47:42.363','10ª');
/*!40000 ALTER TABLE `class` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `classdisciplines`
--

DROP TABLE IF EXISTS `classdisciplines`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `classdisciplines` (
  `id` int NOT NULL AUTO_INCREMENT,
  `createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updatedAt` datetime(3) NOT NULL,
  `disciplineId` int NOT NULL,
  `classId` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `classdisciplines_disciplineId_fkey` (`disciplineId`),
  KEY `classdisciplines_classId_fkey` (`classId`),
  CONSTRAINT `classdisciplines_classId_fkey` FOREIGN KEY (`classId`) REFERENCES `class` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE,
  CONSTRAINT `classdisciplines_disciplineId_fkey` FOREIGN KEY (`disciplineId`) REFERENCES `discipline` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `classdisciplines`
--

LOCK TABLES `classdisciplines` WRITE;
/*!40000 ALTER TABLE `classdisciplines` DISABLE KEYS */;
INSERT INTO `classdisciplines` VALUES (3,'2023-05-01 14:47:26.965','2023-05-01 14:47:26.965',2,3),(4,'2023-05-01 14:47:26.965','2023-05-01 14:47:26.965',3,3),(5,'2023-05-01 14:47:42.363','2023-05-01 14:47:42.363',3,4),(6,'2023-05-01 14:47:42.363','2023-05-01 14:47:42.363',2,4);
/*!40000 ALTER TABLE `classdisciplines` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `classroom`
--

DROP TABLE IF EXISTS `classroom`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `classroom` (
  `id` int NOT NULL AUTO_INCREMENT,
  `createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updatedAt` datetime(3) NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `classroom_name_key` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `classroom`
--

LOCK TABLES `classroom` WRITE;
/*!40000 ALTER TABLE `classroom` DISABLE KEYS */;
INSERT INTO `classroom` VALUES (1,'2023-05-01 14:50:12.901','2023-05-01 14:50:12.901','1','Teste'),(4,'2023-05-01 14:50:49.720','2023-05-01 14:50:49.720','2','Teste'),(6,'2023-05-01 14:53:35.684','2023-05-01 14:53:35.684','3','Teste');
/*!40000 ALTER TABLE `classroom` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `classteam`
--

DROP TABLE IF EXISTS `classteam`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `classteam` (
  `id` int NOT NULL AUTO_INCREMENT,
  `createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updatedAt` datetime(3) NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `period` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `schoolYearId` int NOT NULL,
  `courseId` int DEFAULT NULL,
  `classId` int NOT NULL,
  `classroomId` int NOT NULL,
  `statusId` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `classteam_classroomId_period_key` (`classroomId`,`period`),
  UNIQUE KEY `classteam_name_schoolYearId_classId_key` (`name`,`schoolYearId`,`classId`),
  KEY `classteam_schoolYearId_fkey` (`schoolYearId`),
  KEY `classteam_courseId_fkey` (`courseId`),
  KEY `classteam_classId_fkey` (`classId`),
  KEY `classteam_statusId_fkey` (`statusId`),
  CONSTRAINT `classteam_classId_fkey` FOREIGN KEY (`classId`) REFERENCES `class` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE,
  CONSTRAINT `classteam_classroomId_fkey` FOREIGN KEY (`classroomId`) REFERENCES `classroom` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE,
  CONSTRAINT `classteam_courseId_fkey` FOREIGN KEY (`courseId`) REFERENCES `course` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `classteam_schoolYearId_fkey` FOREIGN KEY (`schoolYearId`) REFERENCES `schoolyear` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE,
  CONSTRAINT `classteam_statusId_fkey` FOREIGN KEY (`statusId`) REFERENCES `status` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `classteam`
--

LOCK TABLES `classteam` WRITE;
/*!40000 ALTER TABLE `classteam` DISABLE KEYS */;
INSERT INTO `classteam` VALUES (1,'2023-05-01 15:13:49.796','2023-05-01 15:13:49.796','1A','Manhã',11,NULL,3,1,1),(2,'2023-05-01 15:14:24.130','2023-05-01 15:14:24.130','10A','Manhã',11,1,4,4,1);
/*!40000 ALTER TABLE `classteam` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `classteamdisciplines`
--

DROP TABLE IF EXISTS `classteamdisciplines`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `classteamdisciplines` (
  `id` int NOT NULL AUTO_INCREMENT,
  `createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updatedAt` datetime(3) NOT NULL,
  `classTeamId` int NOT NULL,
  `disciplineId` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `classteamdisciplines_classTeamId_fkey` (`classTeamId`),
  KEY `classteamdisciplines_disciplineId_fkey` (`disciplineId`),
  CONSTRAINT `classteamdisciplines_classTeamId_fkey` FOREIGN KEY (`classTeamId`) REFERENCES `classteam` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE,
  CONSTRAINT `classteamdisciplines_disciplineId_fkey` FOREIGN KEY (`disciplineId`) REFERENCES `discipline` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `classteamdisciplines`
--

LOCK TABLES `classteamdisciplines` WRITE;
/*!40000 ALTER TABLE `classteamdisciplines` DISABLE KEYS */;
INSERT INTO `classteamdisciplines` VALUES (1,'2023-05-01 15:13:49.796','2023-05-01 15:13:49.796',1,2),(2,'2023-05-01 15:14:24.130','2023-05-01 15:14:24.130',2,3),(3,'2023-05-01 15:14:24.130','2023-05-01 15:14:24.130',2,2);
/*!40000 ALTER TABLE `classteamdisciplines` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `classteamteacher`
--

DROP TABLE IF EXISTS `classteamteacher`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `classteamteacher` (
  `id` int NOT NULL AUTO_INCREMENT,
  `createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updatedAt` datetime(3) NOT NULL,
  `teacherId` int NOT NULL,
  `disciplineId` int NOT NULL,
  `classTeamId` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `classteamteacher_teacherId_disciplineId_classTeamId_key` (`teacherId`,`disciplineId`,`classTeamId`),
  KEY `classteamteacher_disciplineId_fkey` (`disciplineId`),
  KEY `classteamteacher_classTeamId_fkey` (`classTeamId`),
  CONSTRAINT `classteamteacher_classTeamId_fkey` FOREIGN KEY (`classTeamId`) REFERENCES `classteam` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE,
  CONSTRAINT `classteamteacher_disciplineId_fkey` FOREIGN KEY (`disciplineId`) REFERENCES `discipline` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE,
  CONSTRAINT `classteamteacher_teacherId_fkey` FOREIGN KEY (`teacherId`) REFERENCES `teachers` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `classteamteacher`
--

LOCK TABLES `classteamteacher` WRITE;
/*!40000 ALTER TABLE `classteamteacher` DISABLE KEYS */;
/*!40000 ALTER TABLE `classteamteacher` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `country`
--

DROP TABLE IF EXISTS `country`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `country` (
  `id` int NOT NULL AUTO_INCREMENT,
  `createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updatedAt` datetime(3) NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `code` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `country_code_key` (`code`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `country`
--

LOCK TABLES `country` WRITE;
/*!40000 ALTER TABLE `country` DISABLE KEYS */;
INSERT INTO `country` VALUES (1,'2020-01-01 00:00:00.000','2020-01-01 00:00:00.000','Angola','244');
/*!40000 ALTER TABLE `country` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `course`
--

DROP TABLE IF EXISTS `course`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `course` (
  `id` int NOT NULL AUTO_INCREMENT,
  `createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updatedAt` datetime(3) NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `course_name_key` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `course`
--

LOCK TABLES `course` WRITE;
/*!40000 ALTER TABLE `course` DISABLE KEYS */;
INSERT INTO `course` VALUES (1,'2023-05-01 14:48:53.225','2023-05-01 14:48:53.225','Tecnico de Informática','Teste');
/*!40000 ALTER TABLE `course` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `coursedisciplines`
--

DROP TABLE IF EXISTS `coursedisciplines`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `coursedisciplines` (
  `id` int NOT NULL AUTO_INCREMENT,
  `createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updatedAt` datetime(3) NOT NULL,
  `courseId` int NOT NULL,
  `disciplineId` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `coursedisciplines_courseId_fkey` (`courseId`),
  KEY `coursedisciplines_disciplineId_fkey` (`disciplineId`),
  CONSTRAINT `coursedisciplines_courseId_fkey` FOREIGN KEY (`courseId`) REFERENCES `course` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE,
  CONSTRAINT `coursedisciplines_disciplineId_fkey` FOREIGN KEY (`disciplineId`) REFERENCES `discipline` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `coursedisciplines`
--

LOCK TABLES `coursedisciplines` WRITE;
/*!40000 ALTER TABLE `coursedisciplines` DISABLE KEYS */;
INSERT INTO `coursedisciplines` VALUES (1,'2023-05-01 14:48:53.225','2023-05-01 14:48:53.225',1,2);
/*!40000 ALTER TABLE `coursedisciplines` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `discipline`
--

DROP TABLE IF EXISTS `discipline`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `discipline` (
  `id` int NOT NULL AUTO_INCREMENT,
  `createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updatedAt` datetime(3) NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `discipline_name_key` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `discipline`
--

LOCK TABLES `discipline` WRITE;
/*!40000 ALTER TABLE `discipline` DISABLE KEYS */;
INSERT INTO `discipline` VALUES (1,'2023-05-01 14:43:48.822','2023-05-01 14:43:48.822','teste',NULL),(2,'2023-05-01 14:46:46.094','2023-05-01 14:46:46.094','Inglês','ING'),(3,'2023-05-01 14:46:56.140','2023-05-01 14:46:56.140','Lingua Portuguesa','LP');
/*!40000 ALTER TABLE `discipline` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `employees`
--

DROP TABLE IF EXISTS `employees`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `employees` (
  `id` int NOT NULL AUTO_INCREMENT,
  `createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updatedAt` datetime(3) NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `bi` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `birthDay` datetime(3) DEFAULT NULL,
  `civilState` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `gender` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `address` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `salaryType` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `salary` decimal(65,30) NOT NULL,
  `email` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `phone1` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone2` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `countryId` int NOT NULL,
  `statusId` int NOT NULL,
  `officeId` int NOT NULL,
  `provinceId` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `employees_bi_key` (`bi`),
  KEY `employees_countryId_fkey` (`countryId`),
  KEY `employees_statusId_fkey` (`statusId`),
  KEY `employees_officeId_fkey` (`officeId`),
  KEY `employees_provinceId_fkey` (`provinceId`),
  CONSTRAINT `employees_countryId_fkey` FOREIGN KEY (`countryId`) REFERENCES `country` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE,
  CONSTRAINT `employees_officeId_fkey` FOREIGN KEY (`officeId`) REFERENCES `office` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE,
  CONSTRAINT `employees_provinceId_fkey` FOREIGN KEY (`provinceId`) REFERENCES `province` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE,
  CONSTRAINT `employees_statusId_fkey` FOREIGN KEY (`statusId`) REFERENCES `status` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `employees`
--

LOCK TABLES `employees` WRITE;
/*!40000 ALTER TABLE `employees` DISABLE KEYS */;
/*!40000 ALTER TABLE `employees` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `office`
--

DROP TABLE IF EXISTS `office`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `office` (
  `id` int NOT NULL AUTO_INCREMENT,
  `createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updatedAt` datetime(3) NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `code` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `office_code_key` (`code`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `office`
--

LOCK TABLES `office` WRITE;
/*!40000 ALTER TABLE `office` DISABLE KEYS */;
INSERT INTO `office` VALUES (1,'2023-03-23 10:10:10.000','2023-03-23 10:10:10.000','Professor/a','PF'),(2,'2023-03-23 10:10:10.000','2023-03-23 10:10:10.000','Director Pedagógico/a','DP'),(3,'2023-03-23 10:10:10.000','2023-03-23 10:10:10.000','Director/a Gearl','DG'),(4,'2023-03-23 10:10:10.000','2023-03-23 10:10:10.000','Monitor/a','MT'),(5,'2023-03-23 10:10:10.000','2023-03-23 10:10:10.000','Secretário/a','SEC'),(6,'2023-03-23 10:10:10.000','2023-03-23 10:10:10.000','Secretário/Geral/a','SCGER');
/*!40000 ALTER TABLE `office` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `province`
--

DROP TABLE IF EXISTS `province`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `province` (
  `id` int NOT NULL AUTO_INCREMENT,
  `createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updatedAt` datetime(3) NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `countryId` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `province_countryId_fkey` (`countryId`),
  CONSTRAINT `province_countryId_fkey` FOREIGN KEY (`countryId`) REFERENCES `country` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `province`
--

LOCK TABLES `province` WRITE;
/*!40000 ALTER TABLE `province` DISABLE KEYS */;
INSERT INTO `province` VALUES (1,'2020-01-01 00:00:00.000','2020-01-01 00:00:00.000','Luanda',1),(2,'2020-01-01 00:00:00.000','2020-01-01 00:00:00.000','Benguela',1);
/*!40000 ALTER TABLE `province` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `registrationprice`
--

DROP TABLE IF EXISTS `registrationprice`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `registrationprice` (
  `id` int NOT NULL AUTO_INCREMENT,
  `createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updatedAt` datetime(3) NOT NULL,
  `registrationPrice` decimal(65,30) NOT NULL,
  `reregistrationPrice` decimal(65,30) NOT NULL,
  `monthPrice` decimal(65,30) NOT NULL,
  `courseId` int DEFAULT NULL,
  `classId` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `registrationprice_classId_courseId_key` (`classId`,`courseId`),
  KEY `registrationprice_courseId_fkey` (`courseId`),
  CONSTRAINT `registrationprice_classId_fkey` FOREIGN KEY (`classId`) REFERENCES `class` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE,
  CONSTRAINT `registrationprice_courseId_fkey` FOREIGN KEY (`courseId`) REFERENCES `course` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `registrationprice`
--

LOCK TABLES `registrationprice` WRITE;
/*!40000 ALTER TABLE `registrationprice` DISABLE KEYS */;
INSERT INTO `registrationprice` VALUES (1,'2023-05-01 15:28:05.112','2023-05-01 15:28:05.112',2500.000000000000000000000000000000,1500.000000000000000000000000000000,8000.000000000000000000000000000000,NULL,3);
/*!40000 ALTER TABLE `registrationprice` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `schoolyear`
--

DROP TABLE IF EXISTS `schoolyear`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `schoolyear` (
  `id` int NOT NULL AUTO_INCREMENT,
  `createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updatedAt` datetime(3) NOT NULL,
  `year` int NOT NULL,
  `description` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `schoolyear_year_key` (`year`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `schoolyear`
--

LOCK TABLES `schoolyear` WRITE;
/*!40000 ALTER TABLE `schoolyear` DISABLE KEYS */;
INSERT INTO `schoolyear` VALUES (11,'2023-05-01 15:01:14.701','2023-05-01 15:01:14.701',2023,'teste'),(19,'2023-05-01 15:12:48.646','2023-05-01 15:12:48.646',2022,'tetse');
/*!40000 ALTER TABLE `schoolyear` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `status`
--

DROP TABLE IF EXISTS `status`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `status` (
  `id` int NOT NULL AUTO_INCREMENT,
  `createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updatedAt` datetime(3) NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `code` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `show` tinyint(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`),
  UNIQUE KEY `status_code_key` (`code`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `status`
--

LOCK TABLES `status` WRITE;
/*!40000 ALTER TABLE `status` DISABLE KEYS */;
INSERT INTO `status` VALUES (1,'2023-03-23 10:10:10.000','2023-03-23 10:10:10.000','Activo','ACTI','Activado',1),(2,'2023-03-23 10:10:10.000','2023-03-23 10:10:10.000','Inactivo','INACT','Desativado',1),(3,'2023-03-23 10:10:10.000','2023-03-23 10:10:10.000','Suspenso','SUSP','Suspenso',1),(4,'2023-03-23 10:10:10.000','2023-03-23 10:10:10.000','Trasferidos','TRAN','Trasferidos',1),(5,'2023-03-23 10:10:10.000','2023-03-23 10:10:10.000','Expúlso','EXP','Expúlso',1),(6,'2023-03-23 10:10:10.000','2023-03-23 10:10:10.000','Eliminado','ELIM','Eliminado',0);
/*!40000 ALTER TABLE `status` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `student`
--

DROP TABLE IF EXISTS `student`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `student` (
  `id` int NOT NULL AUTO_INCREMENT,
  `createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updatedAt` datetime(3) NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `bi` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `birthDay` datetime(3) DEFAULT NULL,
  `civilState` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `gender` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `address` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `email` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `phone1` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone2` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `countryId` int NOT NULL,
  `statusId` int NOT NULL,
  `provinceId` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `student_bi_key` (`bi`),
  KEY `student_countryId_fkey` (`countryId`),
  KEY `student_statusId_fkey` (`statusId`),
  KEY `student_provinceId_fkey` (`provinceId`),
  CONSTRAINT `student_countryId_fkey` FOREIGN KEY (`countryId`) REFERENCES `country` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE,
  CONSTRAINT `student_provinceId_fkey` FOREIGN KEY (`provinceId`) REFERENCES `province` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE,
  CONSTRAINT `student_statusId_fkey` FOREIGN KEY (`statusId`) REFERENCES `status` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `student`
--

LOCK TABLES `student` WRITE;
/*!40000 ALTER TABLE `student` DISABLE KEYS */;
INSERT INTO `student` VALUES (2,'2023-05-01 21:29:59.139','2023-05-01 21:29:59.139','Antonica Ndonge','6578654756LA04LA','2023-05-03 00:00:00.000','Solteiro/a','Masculino','dwqfsdgdfg','josedomingos919@gmail.com','944666640','944666640',1,1,1),(3,'2023-05-01 21:30:54.135','2023-05-01 21:30:54.135','Juliana Ndonge','2767893LA983','2023-05-17 00:00:00.000','Casado/a','Feminino','Luanda','josedomingos919@gmail.com','944666640','956665556',1,1,2),(4,'2023-05-01 21:31:57.500','2023-05-01 21:31:57.500','Bia Ndonge','5203336LA8393','2023-05-25 00:00:00.000','Solteiro/a','Masculino','Rest Full','jose@gmail.com','944666652','944666652',1,1,1);
/*!40000 ALTER TABLE `student` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `teacherdisciplines`
--

DROP TABLE IF EXISTS `teacherdisciplines`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `teacherdisciplines` (
  `id` int NOT NULL AUTO_INCREMENT,
  `createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updatedAt` datetime(3) NOT NULL,
  `teacherId` int NOT NULL,
  `disciplineId` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `teacherdisciplines_teacherId_fkey` (`teacherId`),
  KEY `teacherdisciplines_disciplineId_fkey` (`disciplineId`),
  CONSTRAINT `teacherdisciplines_disciplineId_fkey` FOREIGN KEY (`disciplineId`) REFERENCES `discipline` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE,
  CONSTRAINT `teacherdisciplines_teacherId_fkey` FOREIGN KEY (`teacherId`) REFERENCES `teachers` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `teacherdisciplines`
--

LOCK TABLES `teacherdisciplines` WRITE;
/*!40000 ALTER TABLE `teacherdisciplines` DISABLE KEYS */;
/*!40000 ALTER TABLE `teacherdisciplines` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `teachers`
--

DROP TABLE IF EXISTS `teachers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `teachers` (
  `id` int NOT NULL AUTO_INCREMENT,
  `createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updatedAt` datetime(3) NOT NULL,
  `employeeId` int NOT NULL,
  `academicLevel` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `statusId` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `teachers_employeeId_key` (`employeeId`),
  KEY `teachers_statusId_fkey` (`statusId`),
  CONSTRAINT `teachers_employeeId_fkey` FOREIGN KEY (`employeeId`) REFERENCES `employees` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE,
  CONSTRAINT `teachers_statusId_fkey` FOREIGN KEY (`statusId`) REFERENCES `status` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `teachers`
--

LOCK TABLES `teachers` WRITE;
/*!40000 ALTER TABLE `teachers` DISABLE KEYS */;
/*!40000 ALTER TABLE `teachers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updatedAt` datetime(3) NOT NULL,
  `phone` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `access` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `employeeId` int NOT NULL,
  `statusId` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_phone_key` (`phone`),
  KEY `users_employeeId_fkey` (`employeeId`),
  KEY `users_statusId_fkey` (`statusId`),
  CONSTRAINT `users_employeeId_fkey` FOREIGN KEY (`employeeId`) REFERENCES `employees` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE,
  CONSTRAINT `users_statusId_fkey` FOREIGN KEY (`statusId`) REFERENCES `status` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'rejuma'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-05-02  1:01:32
