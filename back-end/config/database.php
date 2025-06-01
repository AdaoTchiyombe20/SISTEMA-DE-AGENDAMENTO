<?php

    header("Content-Type: application/json; charset=UTF-8");

    $host = "localhost";
    $db_name= "clinica";
    $userName= "root";
    $password = "";
try{
    $conn = new PDO ("mysql:host=$host;dbname=$db_name", $userName, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

} catch (PDOException $e) {
    echo "Connection failed: " . $e->getMessage();
}

?>