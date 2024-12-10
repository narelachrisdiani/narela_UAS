-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 10, 2024 at 04:51 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.1.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `api_narel_p2`
--

-- --------------------------------------------------------

--
-- Table structure for table `posts`
--

CREATE TABLE `posts` (
  `id` int(11) NOT NULL,
  `nama` varchar(255) DEFAULT NULL,
  `role` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `gender` varchar(255) DEFAULT NULL,
  `image_url` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `posts`
--

INSERT INTO `posts` (`id`, `nama`, `role`, `description`, `gender`, `image_url`) VALUES
(1, 'Fa Mulan', 'Protagonis', 'Pahlawan Wanita ', 'Perempuan', 'URL_Mulan_Image'),
(2, 'Mushu', 'Comic Relief', 'Naga Kecil', 'Hewan', 'URL_Mushu_Image'),
(3, 'Shan Yu', 'Antagonis', 'Pemimpin musuh yang kejam', 'Laki-laki', 'URL_Shan_Yu_Image'),
(4, 'Grandmother Fa', 'Protagonis', 'Nenek Mulan yang lucu ', 'Perempuan', 'URL_Grandma_Image'),
(5, 'Li Shang', 'Protagonis', 'Kapten Tentara', 'Laki-laki', 'URL_Li_Shang_Image'),
(6, 'Chien Po', 'Protagonis', 'Teman Mulan di militer ', 'Laki-laki', 'URL_Chien_Po_Image'),
(8, 'ling', 'Protagonis', 'Teman Mulan di militer ', 'Laki-laki', 'URL_Ling_Image'),
(9, 'yao', 'Protagonis', 'Teman Mulan di militer ', 'Laki-laki', 'URL_yao_Image'),
(10, 'Fa Zhou', 'Protagonis', 'veteran perang tua', 'Laki-laki', 'URL_Fa_Zhou_Image');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `posts`
--
ALTER TABLE `posts`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `posts`
--
ALTER TABLE `posts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
