-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 17, 2023 at 02:34 PM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.1.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `it255projekat`
--

-- --------------------------------------------------------

--
-- Table structure for table `potrosac`
--

CREATE TABLE `potrosac` (
  `id` int(11) NOT NULL,
  `ime` varchar(255) DEFAULT NULL,
  `prezime` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `broj_telefona` varchar(255) DEFAULT NULL,
  `adresa` varchar(255) DEFAULT NULL,
  `grad` varchar(255) DEFAULT NULL,
  `firma` varchar(255) DEFAULT NULL,
  `pozicija` varchar(255) DEFAULT NULL,
  `datum_registracije` date DEFAULT current_timestamp(),
  `prodavac_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `potrosac`
--

INSERT INTO `potrosac` (`id`, `ime`, `prezime`, `email`, `broj_telefona`, `adresa`, `grad`, `firma`, `pozicija`, `datum_registracije`, `prodavac_id`) VALUES
(10, 'Jelena', 'Jelic', 'jelena@example.com', '+381611234568', 'Neka adresa 13', 'Beograd', 'Neka firma', 'Menadzer', '2022-02-01', 2),
(11, 'Mladen', 'Mladenovic', 'mladen@example.com', '+381611234569', 'Neka adresa 14', 'Novi Sad', 'Neka firma', 'Inzenjer', '2022-03-01', 3),
(12, 'Ivana', 'Ivanovic', 'ivana@example.com', '+381611234570', 'Neka adresa 15', 'Nis', 'Neka firma', 'Programer', '2022-04-01', 4),
(13, 'Nikola', 'Nikolic', 'nikola@example.com', '+381611234571', 'Neka adresa 16', 'Kragujevac', 'Neka firma', 'Analiticar', '2022-05-01', 5),
(16, 'Maja', 'Majic', 'maja@example.com', '+381611234574', 'Neka adresa 19', 'Beograd', 'Neka firma', 'Sekretar', '2022-08-01', 8),
(17, 'Luka', 'Lukic', 'luka@example.com', '+381611234575', 'Neka adresa 20', 'Beograd', 'Neka firma', 'Tehnicar', '2022-09-01', 9),
(18, 'Ana', 'Anic', 'ana@example.com', '+381611234576', 'Neka adresa 21', 'Beograd', 'Neka firma', 'Komercijalista', '2022-10-01', 10),
(27, 'Elon', 'Musk', 'elon.musk@tesla.com', '+52184541551', 'Bulevar Nemanjica', 'Nis', 'Tesla Automotive', 'CEO', '2023-01-17', 0),
(29, 'Jeffic', 'Bezos', 'Jeff@bezos.com', '063654654', '17 str.', 'California', 'Amazon inc.', 'Ceo', '2023-01-17', 0);

-- --------------------------------------------------------

--
-- Table structure for table `prodaja`
--

CREATE TABLE `prodaja` (
  `id` int(11) NOT NULL,
  `kupac_id` int(11) NOT NULL,
  `prodavac_id` int(11) NOT NULL,
  `datum_prodaje` date NOT NULL DEFAULT current_timestamp(),
  `opis` varchar(250) NOT NULL,
  `cena` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `prodaja`
--

INSERT INTO `prodaja` (`id`, `kupac_id`, `prodavac_id`, `datum_prodaje`, `opis`, `cena`) VALUES
(1, 5, 6, '2023-01-11', '', 0),
(2, 2, 12, '2023-01-11', '', 0),
(3, 4, 5, '2023-01-11', '', 0),
(4, 4, 5, '2023-01-11', '', 0),
(5, 4, 5, '2023-01-11', '', 0),
(7, 4, 5, '2023-01-11', '', 0),
(8, 9, 16, '2023-01-15', 'telefon', 12302),
(9, 9, 16, '2023-01-15', '', 0),
(10, 9, 16, '2023-01-15', '', 0),
(11, 10, 16, '2023-01-15', '123', 0),
(12, 12, 16, '2023-01-15', '123asdads', 123132),
(13, 16, 16, '2023-01-15', '12312', 0),
(14, 16, 16, '2023-01-15', '12312', 0),
(15, 16, 16, '2023-01-15', '12312', 0),
(16, 10, 16, '2023-01-16', 'telefon', 1000),
(17, 27, 21, '2023-01-17', 'Raketa', 1000000123);

-- --------------------------------------------------------

--
-- Table structure for table `prodavac`
--

CREATE TABLE `prodavac` (
  `id` int(11) NOT NULL,
  `ime` varchar(255) DEFAULT NULL,
  `prezime` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `prodavac`
--

INSERT INTO `prodavac` (`id`, `ime`, `prezime`, `email`, `password`) VALUES
(19, NULL, NULL, NULL, NULL),
(21, 'Viktor', 'Test', 'test@test.com', 'test123');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `potrosac`
--
ALTER TABLE `potrosac`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_foreign_3` (`prodavac_id`);

--
-- Indexes for table `prodaja`
--
ALTER TABLE `prodaja`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `prodavac`
--
ALTER TABLE `prodavac`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `potrosac`
--
ALTER TABLE `potrosac`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;

--
-- AUTO_INCREMENT for table `prodaja`
--
ALTER TABLE `prodaja`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `prodavac`
--
ALTER TABLE `prodavac`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
