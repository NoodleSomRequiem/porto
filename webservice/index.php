<?php
//Require functions for actions
require_once "includes/actions.php";

//1 van deze 2 dingen worden retrieved door de get parameter
if (!isset($_GET['id'])) {
    $data = getBoss();
} else {
    $data = getBossDetails(($_GET['id']));
}


//Set the header & output  so the client will know what to expect.
header("Content-Type: application/json");
echo json_encode($data);
exit;
