<?php

/* Set e-mail recipient */
$myemail = "james193722@yahoo.com";


$name = check_input($_POST['inputName'], "Your Name");
$email = check_input($_POST['inputEmail'], "Your E-mail Address");
$message = check_input($_POST['inputComments'], "Your Message");

/* Let's prepare the message for the e-mail */

$subject = "Someone has sent you a message";

$message = "

Someone has sent you a message using your contac form:

Name: $name
Email: $email
Subject: $subject

Message:
$message

";

/* Send the message using mail() function */
mail($myemail, $subject, $message);