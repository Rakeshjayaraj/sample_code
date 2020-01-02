<?php
/**
 * Created by PhpStorm.
 * User: msingh
 * Date: 14.09.2017
 *
 * Time: 11:54
 *
 */

require_once("../dbmanager.php");

$post_error_name = "Name is too short or empty!";

// Email invalid error text
$post_error_email = "Please enter a valid email!";


// Message too short error text
$post_error_message = "Too short message! Please enter something";

// Message too short error text
$post_error_rating = "No rating given.";

if(!isset($_SERVER['HTTP_X_REQUESTED_WITH']) AND strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) != 'xmlhttprequest') {
    die('Sorry Request must be Ajax POST');
}

if( isset($_POST) ) {

    $name = filter_var($_POST["name"], FILTER_SANITIZE_STRING);

    $email = filter_var($_POST["email"], FILTER_SANITIZE_EMAIL);

    $message = filter_var($_POST["message"], FILTER_SANITIZE_STRING);

    $rating = filter_var($_POST["rating"], FILTER_SANITIZE_NUMBER_INT);


    if (strlen($name) < 4) {
        die($post_error_name);
    }

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        die($post_error_email);
    }

    if (strlen($message) < 3) {
        die($post_error_message);
    }

    if ($rating < 3) {
        echo 'OK';
        return;
    }

    try {
        $db_handle = new DBManager();
        $query = "INSERT INTO posts (name, rating, description) VALUES ('$name',$rating,'$message');";
        $db_handle->insert($query);
        echo 'OK';
    } catch (Exception $e) {
        echo 'Rating could not be posted.';

    }
}

?>