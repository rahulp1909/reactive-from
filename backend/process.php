<?php
require_once('./config.php');
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
$action = $_REQUEST['action'];

switch ($action) {
	case 'get-category':
		getCategory($conn);
		break;

	case 'get-organization':
		getOrganization($conn);
		break;
	
	default:
		# code...
		break;
}


function getCategory($conn) {

	$query = "SELECT * FROM tbl_category";

	$queryResult = mysqli_query($conn, $query);

	$data = [];

	while($row = mysqli_fetch_assoc($queryResult)) {
		$data[] = $row;
	}

	$result = ['status' => 1, 'data' => $data];

	echo json_encode($result);
	die;
}


function getOrganization($conn) {

	$query = "SELECT * FROM tbl_organization";

	$queryResult = mysqli_query($conn, $query);

	$data = [];

	while($row = mysqli_fetch_assoc($queryResult)) {
		$data[] = $row;
	}

	$result = ['status' => 1, 'data' => $data];

	echo json_encode($result);
	die;
}

?>