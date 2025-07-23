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

if ($sport && in_array($sport, $allowed_sports)) {
    $stmt = $conn->prepare("
        SELECT c.CoachID, c.Qualification, c.Experience, c.Style,
               u.FirstName, u.LastName, u.Email, u.UserType,
               u.District, u.Phone, u.Bio, u.DPlink,
               s.SportName
        FROM Coach c
        JOIN User u ON c.CoachID = u.UserID
        JOIN Sport s ON c.SportID = s.SportID
        WHERE LOWER(s.SportName) = ? AND LOWER(u.UserType) = 'coach'
    ");
    $stmt->bind_param("s", $sport);
} else {
    $stmt = $conn->prepare("
        SELECT c.CoachID, c.Qualification, c.Experience, c.Style,
               u.FirstName, u.LastName, u.Email, u.UserType,
               u.District, u.Phone, u.Bio, u.DPlink,
               s.SportName
        FROM Coach c
        JOIN User u ON c.CoachID = u.UserID
        JOIN Sport s ON c.SportID = s.SportID
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
