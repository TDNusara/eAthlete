<?php
$host = "localhost";
$db = "eathlete";
$user = "root";
$pass = "";
$conn = new mysqli($host, $user, $pass, $db);

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

$learnerID = $_GET['learnerID'];

$sql = "SELECT s.SportName, s.SportID
        FROM Learner l
        JOIN Sport s ON l.SportID = s.SportID
        WHERE l.LearnerID = ?";

$stmt = $conn->prepare($sql);
$stmt->bind_param("i", $learnerID);
$stmt->execute();
$result = $stmt->get_result();

if ($row = $result->fetch_assoc()) {
    echo json_encode($row);
} else {
    echo json_encode(['error' => 'Learner not found']);
}
?>