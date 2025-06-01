<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

header("Content-Type: application/json; charset=UTF-8");

require_once './config/database.php';

$json = file_get_contents('php://input');
$Userdata = json_decode($json, true);

if (isset($Userdata['nome'], $Userdata['email'], $Userdata['senha'], $Userdata['peso'])) {
    $nome = $Userdata['nome'];
    $email = $Userdata['email'];
    $password = password_hash($Userdata['senha'], PASSWORD_DEFAULT); 
    $peso = $Userdata['peso'];

    try {
    
        $stmt = $conn->prepare("INSERT INTO pacientes ( nome, email, senha, peso) VALUES (:nome, :email, :senha, :peso)");
        $stmt->bindParam(':nome', $nome); // Corrigido $name -> $nome
        $stmt->bindParam(':email', $email);
        $stmt->bindParam(':senha', $password);
        $stmt->bindParam(':peso', $peso);

        if ($stmt->execute()) {
            echo json_encode(["status" => "success", "message" => "User registered successfully.", "userData" => ["nome" => $nome,"email" => $email, "peso" => $peso]]);
        } else {
            http_response_code(400);
            echo json_encode(["status" => "error", "message" => "Failed to register user."]);
        }
    } catch (PDOException $e) {
        http_response_code(500);
        echo json_encode(["status" => "error", "message" => "Database Error: " . $e->getMessage()]);
    }
} else {
    http_response_code(400);
    echo json_encode(["status" => "error", "message" => "Invalid input."]);
}
?>
