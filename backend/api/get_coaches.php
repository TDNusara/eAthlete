<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

require './db.php';

if (!isset($conn)) {
    echo json_encode(["error" => "Database connection failed"]);
    exit;
}

$sport = isset($_GET['sport']) ? strtolower($_GET['sport']) : null;
$allowed_sports = ['workout', 'karate', 'volleyball'];

// Only allow valid sports or default to all
if ($sport && in_array($sport, $allowed_sports)) {
    $stmt = $conn->prepare("
        SELECT c.*, u.FirstName, u.LastName, u.Phone, u.Email, u.UserType 
        FROM coach c
        JOIN user u ON c.CoachID = u.UserID
        WHERE LOWER(c.Sport) = ? AND LOWER(u.UserType) = 'coach'
    ");
    $stmt->bind_param("s", $sport);
} else {
    // All sports
    $stmt = $conn->prepare("
        SELECT c.*, u.FirstName, u.LastName, u.Phone, u.Email, u.UserType 
        FROM coach c
        JOIN user u ON c.CoachID = u.UserID
        WHERE LOWER(u.UserType) = 'coach'
    ");
}

if (!$stmt->execute()) {
    echo json_encode(["error" => "Database query failed"]);
    exit;
}

$result = $stmt->get_result();

$coaches = [];
while ($row = $result->fetch_assoc()) {
    $coaches[] = $row;
}

echo json_encode($coaches);
?>
