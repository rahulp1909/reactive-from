<?php

$host = 'localhost';
$username = 'root';
$password = '';
$db = 'tatva';

$conn = mysqli_connect($host, $username, $password, $db);

if (!$conn) {
	die('Error in connection');
}

?>