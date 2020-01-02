<?php
if(!empty($_POST["rating"]) && !empty($_POST["id"])) {
	require_once("dbmanager.php");
	$db_handle = new DBManager();
	$query ="UPDATE posts SET rating='" . $_POST["rating"] . "' WHERE id='" . $_POST["id"] . "'";
	$result = $db_handle->updateQuery($query);
}
?>