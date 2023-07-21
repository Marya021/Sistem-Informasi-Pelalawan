-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 10 Jul 2023 pada 03.56
-- Versi server: 10.4.20-MariaDB
-- Versi PHP: 8.0.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `auth_db`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `miskin`
--

CREATE TABLE `miskin` (
  `id` int(11) NOT NULL,
  `uuid` varchar(255) NOT NULL,
  `nama_kecamatan` varchar(255) NOT NULL,
  `jumlah_penduduk_miskin` int(11) NOT NULL,
  `rw` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `miskin`
--

INSERT INTO `miskin` (`id`, `uuid`, `nama_kecamatan`, `jumlah_penduduk_miskin`, `rw`, `createdAt`, `updatedAt`) VALUES
(6, '1300cee4-9cac-4af7-a9cb-ebd98df19123', 'ukui', 10, '01', '2023-07-04 04:21:20', '2023-07-04 04:22:29'),
(7, '401ea93f-9a75-4827-a24d-a18ca53e942e', 'ukui', 10, '02', '2023-07-04 04:21:37', '2023-07-04 04:21:37'),
(8, '08de93e5-80e9-4200-aebf-adb985d754b9', 'ukui', 10, '03', '2023-07-04 04:21:43', '2023-07-04 04:21:43'),
(9, 'e9f67e2e-e216-43a1-8531-a399fd85206e', 'ukui', 10, '04', '2023-07-04 04:21:53', '2023-07-04 04:21:53'),
(10, '08afd642-20a6-4ae8-b928-c14d9c781e12', 'ukui', 10, '05', '2023-07-04 04:21:58', '2023-07-04 04:21:58');

-- --------------------------------------------------------

--
-- Struktur dari tabel `product`
--

CREATE TABLE `product` (
  `id` int(11) NOT NULL,
  `uuid` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `price` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Struktur dari tabel `sessions`
--

CREATE TABLE `sessions` (
  `sid` varchar(36) NOT NULL,
  `expires` datetime DEFAULT NULL,
  `data` text DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `sessions`
--

INSERT INTO `sessions` (`sid`, `expires`, `data`, `createdAt`, `updatedAt`) VALUES
('1qSS-RQDrj0wt11iE5E8vO3C0RFs3WCl', '2023-07-08 07:47:36', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-07-07 07:47:36', '2023-07-07 07:47:36'),
('4rKJnzZqKr3-ZVjl8XmSWEaes1k0yghX', '2023-07-11 01:41:03', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-07-10 01:41:03', '2023-07-10 01:41:03'),
('75cLl2Ew1_QTS7gb0EpMh4j84VY-0eAb', '2023-07-07 14:03:26', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-07-06 14:03:26', '2023-07-06 14:03:26'),
('7HIxA0HmdMYBrBkppjS6q3U6Z_UkkmRA', '2023-07-08 07:46:40', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-07-07 07:46:40', '2023-07-07 07:46:40'),
('9LmnQTx9LS8r7USNfe6MgftXj_HCLthw', '2023-07-11 01:40:57', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-07-10 01:40:57', '2023-07-10 01:40:57'),
('aK0iQQ8dRCaPaY2E_Ce2VWmXjshwm_Vt', '2023-07-08 03:55:45', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-07-07 03:55:45', '2023-07-07 03:55:45'),
('CRfMrzsKtTlr35TcskVCbWh1cRD2KEg2', '2023-07-08 07:39:33', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-07-07 07:39:33', '2023-07-07 07:39:33'),
('djxMzCaBX8vpNSdH_07OliZf2Mj9J3Ih', '2023-07-08 04:51:43', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"},\"userId\":\"f71ced98-c019-4687-8682-e44413e83b0c\"}', '2023-07-07 02:01:22', '2023-07-07 04:51:43'),
('dWqpP8Ds0zFi3v_qSXm40J0AtgPuAcry', '2023-07-08 07:46:12', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-07-07 07:46:12', '2023-07-07 07:46:12'),
('eSmNJAPNpqTn65PPTUpRjd9JjXYJ2PP7', '2023-07-08 03:55:45', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-07-07 03:55:45', '2023-07-07 03:55:45'),
('GtpTzWtQlik9POJLpFFW79UWewGrcNWL', '2023-07-08 07:48:11', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"},\"userId\":\"f71ced98-c019-4687-8682-e44413e83b0c\"}', '2023-07-07 07:48:00', '2023-07-07 07:48:11'),
('Lt26Ej4l6Qnn73-blJynING4KujdHj3R', '2023-07-08 02:48:06', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-07-07 02:48:06', '2023-07-07 02:48:06'),
('MY9foyi2M23kBjA8pcejDSz1xgc__z53', '2023-07-08 07:48:00', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-07-07 07:48:00', '2023-07-07 07:48:00'),
('qkyisql8ZTb2o0XbsfLKoWSBjAUhzYCk', '2023-07-07 14:03:26', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"},\"userId\":\"f71ced98-c019-4687-8682-e44413e83b0c\"}', '2023-07-06 14:03:26', '2023-07-06 14:03:26'),
('SZu_eY_k6of4ZixCh9aH_CfKy7GORL36', '2023-07-08 07:38:40', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-07-07 07:38:40', '2023-07-07 07:38:40'),
('tH2c1xWieoFr0wg5tfLQQQfdDXS_JY6P', '2023-07-08 02:01:22', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-07-07 02:01:22', '2023-07-07 02:01:22'),
('WVQR3icJbYRgarD0oEjYJr3HR3Qx63Nu', '2023-07-11 01:41:14', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"},\"userId\":\"f71ced98-c019-4687-8682-e44413e83b0c\"}', '2023-07-10 01:40:57', '2023-07-10 01:41:14'),
('ZIoLxb5B-eOfJJF9BYe0SDmzrvHi2x57', '2023-07-08 07:47:45', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-07-07 07:47:45', '2023-07-07 07:47:45'),
('_x73hoAxX_xuG_-c65Jhyv9vsglS9eCk', '2023-07-08 02:48:37', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-07-07 02:48:37', '2023-07-07 02:48:37');

-- --------------------------------------------------------

--
-- Struktur dari tabel `stuntens`
--

CREATE TABLE `stuntens` (
  `id` int(11) NOT NULL,
  `uuid` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `excel` varchar(255) NOT NULL,
  `url` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Struktur dari tabel `userconfs`
--

CREATE TABLE `userconfs` (
  `id` int(11) NOT NULL,
  `uuid` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `userconfs`
--

INSERT INTO `userconfs` (`id`, `uuid`, `name`, `email`, `password`, `role`, `createdAt`, `updatedAt`) VALUES
(1, 'b9d4fdcb-5e9c-4af2-8813-239ceeac9179', 'Rusli Andr1y', 'rusliandridinas@gmail.com', '$argon2id$v=19$m=65536,t=3,p=4$TJxf46CeDiF//QJjeie+Vw$YBJFrV1o2SL0fgFa0ZNenal3lrZq0NnvH0urZXNKi/E', 'many', '2023-07-04 08:33:35', '2023-07-04 08:33:35');

-- --------------------------------------------------------

--
-- Struktur dari tabel `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `uuid` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role` varchar(255) NOT NULL,
  `verify` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `users`
--

INSERT INTO `users` (`id`, `uuid`, `name`, `email`, `password`, `role`, `verify`, `createdAt`, `updatedAt`) VALUES
(1, 'f71ced98-c019-4687-8682-e44413e83b0c', 'Rusli', 'user@example.com', '$argon2id$v=19$m=65536,t=3,p=4$u1nCpXKw6M9PwcpFJ1aYLg$b+Wv+28JPyGpncCYIn6iOdcpP1diOi+3+Il1uyrBVbo', 'admin', 'verified', '2023-07-05 02:02:38', '2023-07-05 02:32:30'),
(2, '6ee0d47b-758f-49ea-8653-a28c57efa71a', 'Gilang', 'gilang@example.com', '$argon2id$v=19$m=65536,t=3,p=4$57tOcA8K8u5P06k8veH/9Q$kNueICPsP51xUEKEXJrdJ4paTeiffONuxmiz5IjSlpA', 'user', 'verified', '2023-07-05 02:32:09', '2023-07-05 03:11:47'),
(6, 'e2e64953-ec32-46f5-975d-52b65b5f1c18', 'andri', 'andri123@gmail.com', '$argon2id$v=19$m=65536,t=3,p=4$ARhs4opDaVB5gdSEfRGmDw$Nvp28N+Uknjx7YTA1RMQb0VbgU1lh3KvDnp2aeDN+Yw', 'DINAS PERIKANAN', 'verified', '2023-07-05 03:31:25', '2023-07-05 03:32:28'),
(10, 'a07f8d18-61a5-4e86-a0bb-00d252df38e7', 'kanj', 'kanjeng@example.com', '$argon2id$v=19$m=65536,t=3,p=4$/zLlEh2dPBSQmY5ZkWbrlg$eSkSqxGA1BNJ3JHHh7JdzIoPYPGOW4ZO0+nAw+hY5N0', 'DINAS LINGKUNGAN HIDUP', 'verified', '2023-07-05 07:47:49', '2023-07-05 13:53:16'),
(11, 'f83d3108-54d4-4d37-926a-405811e24570', 'kajur', 'kajur@gmail.com', '$argon2id$v=19$m=65536,t=3,p=4$+2XbAS+706G7kAoAzt7MBA$X6KrVXq13dVNNcNX4kNsod/gvYKH7FgdvUsy5SYh6YM', 'DINAS SOSIAL', 'unverified', '2023-07-05 07:56:51', '2023-07-05 07:56:51'),
(12, 'f261a6bc-5336-4ff0-978b-7ed1965a2a52', 'akk', 'akk@gmail.com', '$argon2id$v=19$m=65536,t=3,p=4$e4aE+Xanh9OBh3MDeGv70A$Qk6lzgGtCZYD8RLSXLJidMfUkqlg4pl/xPA7OqijTFE', 'DINAS PERIKANAN', 'unverified', '2023-07-05 08:05:28', '2023-07-05 08:05:28');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `miskin`
--
ALTER TABLE `miskin`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userId` (`userId`);

--
-- Indeks untuk tabel `sessions`
--
ALTER TABLE `sessions`
  ADD PRIMARY KEY (`sid`);

--
-- Indeks untuk tabel `stuntens`
--
ALTER TABLE `stuntens`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `userconfs`
--
ALTER TABLE `userconfs`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `miskin`
--
ALTER TABLE `miskin`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT untuk tabel `product`
--
ALTER TABLE `product`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `stuntens`
--
ALTER TABLE `stuntens`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `userconfs`
--
ALTER TABLE `userconfs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT untuk tabel `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
