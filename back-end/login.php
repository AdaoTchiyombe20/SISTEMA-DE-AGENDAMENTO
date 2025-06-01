<?php
header("Content-Type: application/json; charset=UTF-8");
require_once './config/database.php';

$json = file_get_contents('php://input');
$Userdata = json_decode($json, true);

if (isset($Userdata['email'], $Userdata['senha'])) {
    $email = $Userdata['email'];
    $senha = $Userdata['senha'];

    try {
    
        $stmt = $conn->prepare("SELECT nome, email, senha FROM pacientes WHERE email = :email");
        $stmt->bindParam(':email', $email);
        $stmt->execute();

        $user = $stmt->fetch(PDO::FETCH_ASSOC);

        if ($user && password_verify($senha, $user['senha'])) {
            echo json_encode([
                "status" => "success",
                "message" => "Login realizado com sucesso.",
                "userData" => ["nome" => $user['nome'], "email" => $user['email']]
            ]);
        } else {
            http_response_code(401);
            echo json_encode(["status" => "error", "message" => "Email ou senha inválidos."]);
        }

    } catch(PDOException $e) {
        http_response_code(500);
        echo json_encode(["status" => "error", "message" => "Erro no banco de dados: " . $e->getMessage()]);
    }
} else {
    http_response_code(400);
    echo json_encode(["status" => "error", "message" => "Dados incompletos."]);
}
?>
