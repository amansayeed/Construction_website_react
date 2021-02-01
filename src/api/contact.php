<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");
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
    echo json_encode(["sent" => 1,]);
} else {
    echo json_encode(["sent" => 0,]);
}


$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);


$firstName = $_POST['firstname'];
$lastName = $_POST['lastname'];
$phone = $_POST['phone'];
$subject = $_POST['subject'];
$email = $_POST['email'];
$message = $_POST['message'];





        $emailBody = "
    <html>
    <head>
    <title>$email is contacting you</title>
    </head>
    <body style=\"background-color:#fafafa;\">
    <div style=\"padding:20px;\">
    First Name: <span style=\"color:#888\">$firstName</span>
    <br>
    Last Name: <span style=\"color:#888\">$lastName</span>
    <br>
    Mobile: <span style=\"color:#888\">$phone</span>
    <br>
    subject: <span style=\"color:#888\">$subject</span>
    <br>
    Email: <span style=\"color:#888\">$email</span>
    <br>
    Message: <div style=\"color:#888\">$message</div>
    </div>
    </body>
    </html>
    ";

        $headers =     'From: Contact Form <amansayeed@gmail.com>' . "\r\n" .
            "Reply-To: $email" . "\r\n" .
            "MIME-Version: 1.0\r\n" .
            "Content-Type: text/html; charset=iso-8859-1\r\n";

        $to = 'amansayeed@gmail.com';
        $subject = 'React contact From';

        if (mail($to, $subject, $emailBody, $headers)) {
            $sent = true;
        }
    

?>




<?php if (isset($sent) && $sent === true) : ?>

    {
    "status": "success",
    "message": "Your data was successfully submitted"
    }
<?php endif; ?>