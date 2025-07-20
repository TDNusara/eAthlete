<?php
include 'db.php';

$learnerID = $_GET['learnerID'];
$sportID = $_GET['sportID'];

$lessonQuery = "SELECT LessonID, DayNo, Title, Description, Tips, VideoURL
                FROM Lesson
                WHERE SportID = ?
                ORDER BY DayNo, LessonID";
$stmt = $conn->prepare($lessonQuery);
$stmt->bind_param("i", $sportID);
$stmt->execute();
$lessonResult = $stmt->get_result();

$lessons = [];
while ($row = $lessonResult->fetch_assoc()) {
    $lessons[] = $row;
}

$viewedQuery = "SELECT LessonID FROM LessonView WHERE LearnerID = ?";
$stmt = $conn->prepare($viewedQuery);
stmt->bind_param("i", $learnerID);
$stmt->execute();
$viewResult = $stmt->get_result();

$viewedLessons = [];
while ($v = $viewResult->fetch_assoc()) {
    $viewedLessons[] = $v['LessonID'];
}

echo json_encode([
    "lessons" => $lessons,
    "viewedLessons" => $viewedLessons
]);
?>