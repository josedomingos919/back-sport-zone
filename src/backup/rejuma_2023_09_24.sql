-- MySQL dump 10.13  Distrib 8.0.29, for Win64 (x86_64)
--
-- Host: localhost    Database: rejuma
-- ------------------------------------------------------
-- Server version	5.7.36

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
-- Dumping data for table `_prisma_migrations`
--

LOCK TABLES `_prisma_migrations` WRITE;
/*!40000 ALTER TABLE `_prisma_migrations` DISABLE KEYS */;
INSERT INTO `_prisma_migrations` VALUES ('17bf14aa-7e59-4d8b-98d1-d0caae2f2a64','7f2b11a18ad127531df56d7af237bc14bd9bdf2c1e6c3f25d6981e4769dec9cd','2023-09-24 20:46:02.820','20230924204602_update',NULL,NULL,'2023-09-24 20:46:02.657',1),('18cbd3dc-cc8a-47eb-a93d-f2acb55e819f','96ea4316025b382eed86f70a9c6bc1ee236c6ad05b986583f97f1640b1f1323b','2023-09-24 20:27:54.175','20230924202754_add_setting_table',NULL,NULL,'2023-09-24 20:27:54.116',1),('6499f6ee-801c-40dc-a340-635b64cc111b','c1bec22ffda767364186d1276081bf18cc37bb233f6e3826f5cb8769aedc243e','2023-09-24 20:01:14.223','20230924200113_add_school_fees_tables',NULL,NULL,'2023-09-24 20:01:13.130',1),('7eae8d9a-a043-4e0f-a5d5-d910519db93d','55782dfff900ba44bb4be113e63d18e4c859e551b9f526008cab5daa7734e3f7','2023-09-24 20:39:13.239','20230924203913_add_setting',NULL,NULL,'2023-09-24 20:39:13.167',1),('a62abd84-b09b-4078-801e-11fa578feacd','e95a86f70e4bc644bf9dd099ce54647bd2723edb846ef6c2dae9b5980eebf871','2023-08-22 17:33:26.132','20230822085505_init',NULL,NULL,'2023-08-22 17:33:20.633',1),('c68cc6a8-94d4-4d1b-9298-8db579147fd3','b9562a13f59d0528c6db6d7c61bb67c9c88c0e1adb059da0c7945572f25d0e20','2023-08-22 17:33:57.023','20230822173356_add_curriculum_grid',NULL,NULL,'2023-08-22 17:33:56.483',1);
/*!40000 ALTER TABLE `_prisma_migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `class`
--

LOCK TABLES `class` WRITE;
/*!40000 ALTER TABLE `class` DISABLE KEYS */;
INSERT INTO `class` VALUES (3,'2023-05-01 14:47:27.000','2023-05-01 14:47:27.000','1ª'),(4,'2023-05-01 14:47:42.000','2023-05-01 14:47:42.000','10ª'),(5,'2023-07-24 10:05:23.154','2023-07-24 11:55:28.282','2ª'),(6,'2023-07-24 11:54:00.619','2023-07-24 11:55:35.466','3ª'),(7,'2023-07-24 11:54:08.157','2023-07-24 11:55:44.153','4ª'),(8,'2023-07-24 11:54:13.188','2023-07-26 21:47:25.876','5ª'),(9,'2023-07-24 11:54:17.155','2023-07-24 11:55:50.969','6ª'),(10,'2023-07-24 11:54:38.420','2023-07-24 11:54:38.420','7ª'),(11,'2023-07-24 11:54:43.933','2023-07-24 11:54:43.933','8ª'),(12,'2023-07-24 11:54:50.145','2023-07-24 11:54:50.145','9ª'),(14,'2023-07-24 11:55:07.472','2023-07-24 11:55:07.472','11ª'),(15,'2023-07-24 11:55:14.085','2023-07-24 11:55:14.085','12ª');
/*!40000 ALTER TABLE `class` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `classroom`
--

LOCK TABLES `classroom` WRITE;
/*!40000 ALTER TABLE `classroom` DISABLE KEYS */;
INSERT INTO `classroom` VALUES (1,'2023-05-01 14:50:12.901','2023-07-26 21:55:13.248','1','Sala de aula',30),(4,'2023-05-01 14:50:49.720','2023-07-26 21:58:40.482','2','Sala de aula',30),(6,'2023-05-01 14:53:35.684','2023-07-26 21:59:05.429','3','Sala de aula',30),(7,'2023-07-24 11:57:04.083','2023-07-26 21:59:16.945','4','Sala de aula',30),(8,'2023-07-24 11:57:25.466','2023-07-26 21:59:29.794','5','Sala de aula',30),(9,'2023-07-24 11:57:53.502','2023-07-26 21:59:43.266','6','Sala de aula',30),(10,'2023-07-24 11:58:07.237','2023-07-26 21:59:55.884','7','Sala de Aula',30);
/*!40000 ALTER TABLE `classroom` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `classteam`
--

LOCK TABLES `classteam` WRITE;
/*!40000 ALTER TABLE `classteam` DISABLE KEYS */;
INSERT INTO `classteam` VALUES (1,'2023-08-29 09:25:24.352','2023-08-29 09:25:24.352','A','Manhã',11,NULL,3,1,1);
/*!40000 ALTER TABLE `classteam` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `classteamteacher`
--

LOCK TABLES `classteamteacher` WRITE;
/*!40000 ALTER TABLE `classteamteacher` DISABLE KEYS */;
/*!40000 ALTER TABLE `classteamteacher` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `country`
--

LOCK TABLES `country` WRITE;
/*!40000 ALTER TABLE `country` DISABLE KEYS */;
INSERT INTO `country` VALUES (1,'2020-01-01 00:00:00.000','2020-01-01 00:00:00.000','Angola','244');
/*!40000 ALTER TABLE `country` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `course`
--

LOCK TABLES `course` WRITE;
/*!40000 ALTER TABLE `course` DISABLE KEYS */;
INSERT INTO `course` VALUES (2,'2023-07-26 21:44:02.728','2023-07-26 21:44:02.728','Ciências Físicas e Biológicas','CFB'),(3,'2023-08-21 17:55:38.745','2023-08-21 17:55:38.745','Ciências Económicas e Jurídicas','CEJ');
/*!40000 ALTER TABLE `course` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `curriculumgrid`
--

LOCK TABLES `curriculumgrid` WRITE;
/*!40000 ALTER TABLE `curriculumgrid` DISABLE KEYS */;
INSERT INTO `curriculumgrid` VALUES (1,'2023-08-26 16:30:06.538','2023-08-26 16:30:06.538',3,NULL,11),(2,'2023-08-26 16:30:06.538','2023-08-26 16:30:06.538',3,NULL,18),(3,'2023-08-26 16:30:06.538','2023-08-26 16:30:06.538',3,NULL,7),(4,'2023-08-26 16:30:10.807','2023-08-26 16:30:10.807',3,NULL,15),(5,'2023-08-26 16:30:49.872','2023-08-26 16:30:49.872',5,NULL,11),(6,'2023-08-26 16:30:49.872','2023-08-26 16:30:49.872',5,NULL,18),(7,'2023-08-26 16:30:49.872','2023-08-26 16:30:49.872',5,NULL,17),(8,'2023-08-26 16:31:07.111','2023-08-26 16:31:07.111',4,3,18),(9,'2023-08-26 16:31:07.111','2023-08-26 16:31:07.111',4,3,11),(10,'2023-08-26 16:31:07.111','2023-08-26 16:31:07.111',4,3,17),(11,'2023-08-26 16:31:17.793','2023-08-26 16:31:17.793',4,3,14),(12,'2023-08-26 16:31:17.793','2023-08-26 16:31:17.793',4,3,16),(13,'2023-08-26 16:31:56.714','2023-08-26 16:31:56.714',4,NULL,18),(14,'2023-08-26 16:31:56.714','2023-08-26 16:31:56.714',4,NULL,7),(15,'2023-08-26 16:31:56.714','2023-08-26 16:31:56.714',4,NULL,11);
/*!40000 ALTER TABLE `curriculumgrid` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `discipline`
--

LOCK TABLES `discipline` WRITE;
/*!40000 ALTER TABLE `discipline` DISABLE KEYS */;
INSERT INTO `discipline` VALUES (2,'2023-05-01 14:46:46.094','2023-05-01 14:46:46.094','Inglês','ING'),(3,'2023-05-01 14:46:56.140','2023-05-01 14:46:56.140','Lingua Portuguesa','LP'),(4,'2023-07-24 10:07:47.002','2023-07-24 10:07:58.018','Llngua Estrangeira','LE'),(5,'2023-07-24 10:08:22.660','2023-07-24 10:08:22.660','Matemática','MT'),(6,'2023-07-24 10:08:39.614','2023-07-24 10:08:39.614','Informática','INF'),(7,'2023-07-24 10:09:00.566','2023-07-24 10:09:00.566','Educação Física','EDF'),(8,'2023-07-24 10:09:18.275','2023-07-24 10:09:18.275','Filosofia','FLA'),(9,'2023-07-24 10:09:37.365','2023-07-24 10:09:37.365','Física','FIS'),(10,'2023-07-24 10:10:05.304','2023-07-24 10:10:05.304','Química','QUÍ'),(11,'2023-07-24 10:10:17.052','2023-07-24 10:10:17.052','Biologia','BIO'),(12,'2023-07-24 10:10:33.938','2023-07-24 10:10:33.938','Geografia','GEO'),(13,'2023-07-24 10:11:07.058','2023-07-24 10:11:07.058','História','HIS'),(14,'2023-07-24 10:11:30.974','2023-07-24 10:11:30.974','Educação Moral e Cívica','EMC'),(15,'2023-07-24 10:11:50.371','2023-07-24 10:11:50.371','Educação Manual e Plástica','EMP'),(16,'2023-07-24 10:12:03.239','2023-07-24 10:12:03.239','Educação Visual e Plástica','EVP'),(17,'2023-07-24 10:12:18.443','2023-07-24 10:12:18.443','Educação Laboral','EDL'),(18,'2023-07-24 10:12:30.824','2023-07-24 10:12:30.824','Ciência da Natureza','CDN');
/*!40000 ALTER TABLE `discipline` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `employees`
--

LOCK TABLES `employees` WRITE;
/*!40000 ALTER TABLE `employees` DISABLE KEYS */;
INSERT INTO `employees` VALUES (2,'2023-06-23 13:09:09.187','2023-06-23 13:09:09.187','José Domingos Cassua Ndonge','215120212A8283','2023-07-01 00:00:00.000','Solteiro/a','Masculino','Luanda','Fixo',10000,'jose@gmail.com','944665252','999666640',1,1,1,1),(3,'2023-07-23 22:57:03.509','2023-07-23 22:57:03.509','Robson António Pedro Manuel','0039039404LA923','2023-07-02 00:00:00.000','Solteiro/a','Masculino','Simione','Fixo',200000,'complexoescolarrejuma@gmail.com','931941577','931941577',1,1,3,1),(4,'2023-08-10 20:36:10.861','2023-08-10 20:36:10.861','Costa António Manuel','000322904KS037','1977-12-20 00:00:00.000','Solteiro/a','Masculino','Simione','Fixo',120000,'','927012498','',1,1,3,8);
/*!40000 ALTER TABLE `employees` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `exam`
--

LOCK TABLES `exam` WRITE;
/*!40000 ALTER TABLE `exam` DISABLE KEYS */;
/*!40000 ALTER TABLE `exam` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `months`
--

LOCK TABLES `months` WRITE;
/*!40000 ALTER TABLE `months` DISABLE KEYS */;
INSERT INTO `months` VALUES (1,'2023-09-24 21:56:59.670','2023-09-24 21:56:59.000','Janeiro',1),(2,'2023-09-24 21:57:19.383','2023-09-24 21:57:19.000','Fevereiro',2),(3,'2023-09-24 21:57:40.477','2023-09-24 21:57:40.000','Março',3),(4,'2023-09-24 21:57:55.168','2023-09-24 21:57:55.000','Abril',4),(5,'2023-09-24 21:58:09.086','2023-09-24 21:58:09.000','Maio',5),(6,'2023-09-24 21:59:01.098','2023-09-24 21:59:01.000','Junho',6),(7,'2023-09-24 21:59:01.103','2023-09-24 21:59:01.000','Julho',7),(8,'2023-09-24 21:59:01.112','2023-09-24 21:59:01.000','Agosto',8),(9,'2023-09-24 21:59:01.120','2023-09-24 21:59:01.000','Setembro	',9),(10,'2023-09-24 21:59:01.127','2023-09-24 21:59:01.000','Outubro',10),(11,'2023-09-24 21:59:01.134','2023-09-24 21:59:01.000','Novembro	',11),(12,'2023-09-24 21:59:01.136','2023-09-24 21:59:01.000','	Dezembro	',12);
/*!40000 ALTER TABLE `months` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `office`
--

LOCK TABLES `office` WRITE;
/*!40000 ALTER TABLE `office` DISABLE KEYS */;
INSERT INTO `office` VALUES (1,'2023-03-23 10:10:10.000','2023-03-23 10:10:10.000','Professor/a','PF'),(2,'2023-03-23 10:10:10.000','2023-03-23 10:10:10.000','Director Pedagógico/a','DP'),(3,'2023-03-23 10:10:10.000','2023-03-23 10:10:10.000','Director/a Gearl','DG'),(4,'2023-03-23 10:10:10.000','2023-03-23 10:10:10.000','Monitor/a','MT'),(5,'2023-03-23 10:10:10.000','2023-03-23 10:10:10.000','Secretário/a','SEC'),(6,'2023-03-23 10:10:10.000','2023-03-23 10:10:10.000','Secretário/Geral/a','SCGER');
/*!40000 ALTER TABLE `office` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `payment`
--

LOCK TABLES `payment` WRITE;
/*!40000 ALTER TABLE `payment` DISABLE KEYS */;
/*!40000 ALTER TABLE `payment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `product`
--

LOCK TABLES `product` WRITE;
/*!40000 ALTER TABLE `product` DISABLE KEYS */;
INSERT INTO `product` VALUES (1,'2023-05-18 23:37:23.214','2023-05-18 23:37:23.214','Cartão De Escola',2000,'CARD',0,'Não');
/*!40000 ALTER TABLE `product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `productsale`
--

LOCK TABLES `productsale` WRITE;
/*!40000 ALTER TABLE `productsale` DISABLE KEYS */;
/*!40000 ALTER TABLE `productsale` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `province`
--

LOCK TABLES `province` WRITE;
/*!40000 ALTER TABLE `province` DISABLE KEYS */;
INSERT INTO `province` VALUES (1,'2020-01-01 00:00:00.000','2020-01-01 00:00:00.000','Luanda',1),(2,'2020-01-01 00:00:00.000','2020-01-01 00:00:00.000','Benguela',1),(3,'2020-01-01 00:00:00.000','2020-01-01 00:00:00.000','Bengo',1),(4,'2020-01-01 00:00:00.000','2020-01-01 00:00:00.000','Bié',1),(5,'2020-01-01 00:00:00.000','2020-01-01 00:00:00.000','Cabinda',1),(6,'2020-01-01 00:00:00.000','2020-01-01 00:00:00.000','Cuando Cubango',1),(7,'2020-01-01 00:00:00.000','2020-01-01 00:00:00.000','Cuanza Norte',1),(8,'2020-01-01 00:00:00.000','2020-01-01 00:00:00.000','Cuanza Sul',1),(9,'2020-01-01 00:00:00.000','2020-01-01 00:00:00.000','Cunene',1),(10,'2020-01-01 00:00:00.000','2020-01-01 00:00:00.000','Huambo',1),(11,'2020-01-01 00:00:00.000','2020-01-01 00:00:00.000','Huíla',1),(12,'2020-01-01 00:00:00.000','2020-01-01 00:00:00.000','Lunda Norte',1),(13,'2020-01-01 00:00:00.000','2020-01-01 00:00:00.000','Lunda Sul',1),(14,'2020-01-01 00:00:00.000','2020-01-01 00:00:00.000','Malanje',1),(15,'2020-01-01 00:00:00.000','2020-01-01 00:00:00.000','Moxico',1),(16,'2020-01-01 00:00:00.000','2020-01-01 00:00:00.000','Namibe',1),(17,'2020-01-01 00:00:00.000','2020-01-01 00:00:00.000','Uíge',1),(18,'2020-01-01 00:00:00.000','2020-01-01 00:00:00.000','Zaire',1);
/*!40000 ALTER TABLE `province` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `registration`
--

LOCK TABLES `registration` WRITE;
/*!40000 ALTER TABLE `registration` DISABLE KEYS */;
INSERT INTO `registration` VALUES (1,'2023-08-29 09:25:51.027','2023-08-29 09:25:51.027','matriculation',1000,2000,1,NULL,3,11,1,2,2);
/*!40000 ALTER TABLE `registration` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `registrationprice`
--

LOCK TABLES `registrationprice` WRITE;
/*!40000 ALTER TABLE `registrationprice` DISABLE KEYS */;
INSERT INTO `registrationprice` VALUES (1,'2023-07-23 23:07:59.635','2023-07-23 23:07:59.635',1000,2000,1500,NULL,3);
/*!40000 ALTER TABLE `registrationprice` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `schoolfees`
--

LOCK TABLES `schoolfees` WRITE;
/*!40000 ALTER TABLE `schoolfees` DISABLE KEYS */;
/*!40000 ALTER TABLE `schoolfees` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `schoolresource`
--

LOCK TABLES `schoolresource` WRITE;
/*!40000 ALTER TABLE `schoolresource` DISABLE KEYS */;
/*!40000 ALTER TABLE `schoolresource` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `schoolyear`
--

LOCK TABLES `schoolyear` WRITE;
/*!40000 ALTER TABLE `schoolyear` DISABLE KEYS */;
INSERT INTO `schoolyear` VALUES (11,'2023-05-01 15:01:14.701','2023-08-12 17:11:51.759',2023,'Ano Lectivo');
/*!40000 ALTER TABLE `schoolyear` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `setting`
--

LOCK TABLES `setting` WRITE;
/*!40000 ALTER TABLE `setting` DISABLE KEYS */;
/*!40000 ALTER TABLE `setting` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `status`
--

LOCK TABLES `status` WRITE;
/*!40000 ALTER TABLE `status` DISABLE KEYS */;
INSERT INTO `status` VALUES (1,'2023-03-23 10:10:10.000','2023-03-23 10:10:10.000','Activo','ACTI','Activado',1),(2,'2023-03-23 10:10:10.000','2023-03-23 10:10:10.000','Inactivo','INACT','Desativado',1),(3,'2023-03-23 10:10:10.000','2023-03-23 10:10:10.000','Suspenso','SUSP','Suspenso',1),(4,'2023-03-23 10:10:10.000','2023-03-23 10:10:10.000','Trasferidos','TRAN','Trasferidos',1),(5,'2023-03-23 10:10:10.000','2023-03-23 10:10:10.000','Expúlso','EXP','Expúlso',1),(6,'2023-03-23 10:10:10.000','2023-03-23 10:10:10.000','Eliminado','ELIM','Eliminado',0);
/*!40000 ALTER TABLE `status` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `student`
--

LOCK TABLES `student` WRITE;
/*!40000 ALTER TABLE `student` DISABLE KEYS */;
INSERT INTO `student` VALUES (1,'2023-07-23 23:07:05.163','2023-07-23 23:07:05.163','Exemplo António Martins','007914283974LOJ293','2023-06-29 00:00:00.000','Solteiro/a','Masculino','Rocha Pinto','exemplo@gmail.com','9999999999','999888888',1,1,1,'Exemplo Pai','Exemplo Mãe','Luanda','Luanda','Maianga','2023-07-04','2023-07-10','Sim','Professor','Remoto','Exemplo Ana'),(2,'2023-08-12 16:44:13.486','2023-08-12 16:44:13.486','Exemplo Teste202','Exemplo Teste202','2023-08-16 00:00:00.000','Solteiro/a','Masculino','Exemplo Teste202','josedomingos919@gmail.com','98989899','98989899',1,1,1,'Exemplo Teste202','Exemplo Teste202','Exemplo Teste202','Exemplo Teste202','Exemplo Teste202','2023-08-16','2023-08-30','Sim','Exemplo Teste202','Exemplo Teste202','Exemplo Teste202'),(3,'2023-09-24 07:30:52.290','2023-09-24 07:30:52.290','José Domingos','0073892323LA783','2023-09-29 00:00:00.000','Solteiro/a','Masculino','Luanda','josedomingos919@gmail.com','93939874','',1,1,1,'José Domingos','Delfina Campos','Teste','Luanda','Luanda','2023-09-23','2023-10-07','Não','','','Teste'),(4,'2023-09-24 07:35:33.146','2023-09-24 07:35:33.146','Teste','456765757','2023-09-07 00:00:00.000','Solteiro/a','Masculino','Luanda','josedomingos919@gmail.com','93938484','94848444',1,1,1,'','','casa sn','Luanda','launda','','',NULL,'','','Jose Domingos');
/*!40000 ALTER TABLE `student` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `teacherdisciplines`
--

LOCK TABLES `teacherdisciplines` WRITE;
/*!40000 ALTER TABLE `teacherdisciplines` DISABLE KEYS */;
/*!40000 ALTER TABLE `teacherdisciplines` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `teachers`
--

LOCK TABLES `teachers` WRITE;
/*!40000 ALTER TABLE `teachers` DISABLE KEYS */;
/*!40000 ALTER TABLE `teachers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'2023-05-04 14:13:48.244','2023-05-04 14:13:48.244','944666640','$argon2id$v=19$m=65536,t=3,p=4$GEjFMF0Rr4JxlEpfqL2FZg$Q8CL5gaHk/EPBvq+R+66aWKOk3/8cr7Mo7lJtlH2dOA','admin',2,1),(7,'2023-07-23 22:59:03.424','2023-07-23 22:59:03.424','931941577','$argon2id$v=19$m=65536,t=3,p=4$fw5YpXzWrRsiaKbeW24X/w$gOGuWQVxitjJVfewhI1Yxk/QgxS7RgeMTjnr3bdttcE','Admin',3,1);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-09-24 21:59:53
