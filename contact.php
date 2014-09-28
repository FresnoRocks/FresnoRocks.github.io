<?php
$name = $_POST['fname'];
$email = $_POST['lname'];
$message = $_POST['email'];

//Sending Email to form owner
$header = "From: $email\n"
. "Reply-To: $email\n";
$subject = "Submission From My Form";
$email_to = "james193722@yahoo.com";
$message = "name: $name . $email . $message\n"
. "email: $email\n";
mail($email_to, $subject ,$message ,$header ) ;

?>