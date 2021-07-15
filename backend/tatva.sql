-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Jul 15, 2021 at 08:14 AM
-- Server version: 5.7.26
-- PHP Version: 7.2.18

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `tatva`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_category`
--

DROP TABLE IF EXISTS `tbl_category`;
CREATE TABLE IF NOT EXISTS `tbl_category` (
  `id_category` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `update_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id_category`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_category`
--

INSERT INTO `tbl_category` (`id_category`, `name`, `created_at`, `update_at`) VALUES
(1, 'Category 1', '2021-07-15 04:33:12', '2021-07-15 04:33:12'),
(2, 'Category 2', '2021-07-15 04:33:12', '2021-07-15 04:33:12'),
(3, 'Category 3', '2021-07-15 04:33:12', '2021-07-15 04:33:12'),
(4, 'Category 4', '2021-07-15 04:33:12', '2021-07-15 04:33:12');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_organization`
--

DROP TABLE IF EXISTS `tbl_organization`;
CREATE TABLE IF NOT EXISTS `tbl_organization` (
  `id_organization` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `update_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id_organization`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_organization`
--

INSERT INTO `tbl_organization` (`id_organization`, `name`, `created_at`, `update_at`) VALUES
(1, 'Organization 1', '2021-07-15 04:34:01', '2021-07-15 04:34:01'),
(2, 'Organization 2', '2021-07-15 04:34:01', '2021-07-15 04:34:01'),
(3, 'Organization 3', '2021-07-15 04:34:01', '2021-07-15 04:34:01'),
(4, 'Organization 4', '2021-07-15 04:34:01', '2021-07-15 04:34:01');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
