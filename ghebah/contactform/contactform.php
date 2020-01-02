<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require '../vendor/autoload.php';
/* Book  table form script configuartion */

// Enter your email, where you want to receive the bookings.
$contact_email_to = "";

// Subject
$contact_subject = "contacted you regarding booking from website";

// Name too short error text
$contact_error_name = "Name is too short or empty!";

// Email invalid error text
$contact_error_email = "Please enter a valid email!";

// Required fields error message
$contact_error_fields = "Please, fill all the required fields";

// Message too short error text
$contact_error_message = "Too short message! Please enter something";

/********** Do not edit from the below line ***********/

if(!isset($_SERVER['HTTP_X_REQUESTED_WITH']) AND strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) != 'xmlhttprequest') {
    die('Sorry Request must be Ajax POST'); 
}

if( isset($_POST) ) {

    $name = filter_var($_POST["name"], FILTER_SANITIZE_STRING);
    $email = filter_var($_POST["email"], FILTER_SANITIZE_EMAIL);
    $phone = filter_var($_POST["phone"], FILTER_SANITIZE_STRING);
    $date = filter_var($_POST["date"], FILTER_SANITIZE_STRING);
    $time = filter_var($_POST["time"], FILTER_SANITIZE_STRING);
    $people = filter_var($_POST["people"], FILTER_SANITIZE_STRING);
    $message = filter_var($_POST["message"], FILTER_SANITIZE_STRING);
    
    if(strlen($name)<4){ 
        die($contact_error_name);
    }
    
    if(!filter_var($email, FILTER_VALIDATE_EMAIL)){  
        die($contact_error_email);
    }
    
    if(strlen($message)<3){ 
        die($contact_error_message);
    }
    
    if(strlen($phone)<1 || strlen($date)<1 || strlen($time)<1 ||  strlen($people)<1 ){ 
        die($contact_error_fields);
    }
    
    $prepare_smessage = "<h4>Please find details below </h4>\n ";
    $prepare_smessage .= "<b>Name:</b>"."  "."$name\n" ;
    $prepare_smessage .= "<b>Phone:</b>"."  "."$phone\n";
    $prepare_smessage .= "<b>Date:</b>"."  "."$date\n";
    $prepare_smessage .= "<b>Time:</b>"."  "."$time\n";
    $prepare_smessage .= "<b>People:</b>"."  "."$people\n";
    $prepare_smessage .= "<b>Message:</b>"."  "."$message\n";
    $prepare_smessage = nl2br($prepare_smessage);



    $mail = new PHPMailer(true);
    $mail->CharSet = 'UTF-8';
    try {
        //Server settings
        $mail->SMTPDebug = 0;                                 // Enable verbose debug output
        $mail->isSMTP();                                      // Set mailer to use SMTP
        $mail->Host = 'smtp.1und1.de';  // Specify main and backup SMTP servers
        $mail->SMTPAuth = true;                               // Enable SMTP authentication
        $mail->Username = 'info@ghebah.de';                 // SMTP username
        $mail->Password = '1234567!Aa';                           // SMTP password
        $mail->SMTPSecure = 'tls';
        $mail->Port = 25;
        // TCP port to connect to

/*        $mail->SMTPOptions = array(
            'ssl' => array(
                'verify_peer' => false,
                'verify_peer_name' => false,
                'allow_self_signed' => true
            )
        );*/
        //Recipients
        $mail->setFrom('info@ghebah.de', 'Mailer');
        $mail->addAddress('info@ghebah.de', 'ghebah');
        $mail->addCC($email,$name);
        $mail->addReplyTo($email, $name);


        //Content
        $mail->isHTML(true);
        $mail->Subject = $name." ".$contact_subject;
        $mail->AddEmbeddedImage('../img/logo.png', 'logoimg', 'logo'); /// Set email format to HTML
        $mail->Body = "<p> <img src=\"http://www.ghebah.de/img/logo.PNG\" width=\"150\" height=\"150\"/></p>";
        $mail->Body .= $prepare_smessage;
      //  $mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

        $mail->send();
        echo 'OK';
    } catch (Exception $e) {
        echo 'Message could not be sent.';
        echo 'Mailer Error: ' . $mail->ErrorInfo;
    }
}
?>
