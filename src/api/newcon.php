<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");
header("Content-Type: application/json; charset=UTF-8");
$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);
$conn = mysqli_connect("localhost", "root", "", "construction");
$query = "insert into contact (first_name,last_name,phone, subject,email,message)
values(
'" . $_POST['firstname'] . "',
'" . $_POST['lastname'] . "',
'" . $_POST['phone'] . "',
'" . $_POST['subject'] . "',
'" . $_POST['email'] . "',
'" . $_POST['message'] . "'
)";
$result = @mysqli_query($conn, $query);
if ($result) {
    echo json_encode(["sent" => 1, ]);
} else {
    echo json_encode(["sent" => 0, ]);
}

