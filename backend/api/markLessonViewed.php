<?php
include 'db.php';
$lessonID = $_POST['lessonID'];
$learnerID = $_POST['learnerID'];

$stmt = $conn->prepare("INSERT IGNORE INTO LessonView (LearnerID, LessonID) VALUES (?, ?)");
$stmt->bind_param("ii", $learnerID, $lessonID);
$stmt->execute();

echo json_encode(["success" => true]);
?>