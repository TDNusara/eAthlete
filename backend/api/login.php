<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Content-Type');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    http_response_code(200);
    exit();
}

$conn = new mysqli("localhost", "root", "", "eathlete");

$data = json_decode(file_get_contents("php://input"), true);
$username = $data['username'] ?? '';
$password = $data['password'] ?? '';

if (!$username || !$password) {
    echo json_encode(["success" => false, "message" => "Username and Password required"]);
    exit;
}

// 1️⃣ Check if user exists and credentials are correct
$stmt = $conn->prepare("SELECT * FROM User WHERE Username = ? AND Password = MD5(?) AND Status = 1");
$stmt->bind_param("ss", $username, $password);
$stmt->execute();
$result = $stmt->get_result();

if ($user = $result->fetch_assoc()) {
    $userID = $user['UserID'];
    $userType = $user['UserType'];

    $userDetails = [
        "UserID" => $userID,
        "FirstName" => $user['FirstName'],
        "LastName" => $user['LastName'],
        "Username" => $user['Username'],
        "Email" => $user['Email'],
        "UserType" => $userType,
        "DPlink" => $user['DPlink'],
    ];

    // 2️⃣ Fetch role-specific details
    switch ($userType) {
        case 'Learner':
            $stmt2 = $conn->prepare("
                SELECT l.Height, l.Weight, l.BodyType, l.Goals, s.SportID, s.SportName
                FROM Learner l
                JOIN Sport s ON l.SportID = s.SportID
                WHERE l.LearnerID = ?
            ");
            $stmt2->bind_param("i", $userID);
            $stmt2->execute();
            $learnerResult = $stmt2->get_result()->fetch_assoc();
            $userDetails = array_merge($userDetails, $learnerResult);
            break;

        case 'Coach':
            $stmt2 = $conn->prepare("
                SELECT c.Qualification, c.Experience, c.Style, s.SportID, s.SportName
                FROM Coach c
                JOIN Sport s ON c.SportID = s.SportID
                WHERE c.CoachID = ?
            ");
            $stmt2->bind_param("i", $userID);
            $stmt2->execute();
            $coachResult = $stmt2->get_result()->fetch_assoc();
            $userDetails = array_merge($userDetails, $coachResult);
            break;

        case 'Seller':
            $stmt2 = $conn->prepare("
                SELECT StoreName, BusinessRegNo
                FROM Seller
                WHERE SellerID = ?
            ");
            $stmt2->bind_param("i", $userID);
            $stmt2->execute();
            $sellerResult = $stmt2->get_result()->fetch_assoc();
            $userDetails = array_merge($userDetails, $sellerResult);
            break;

        case 'Admin':
            $stmt2 = $conn->prepare("
                SELECT FullName
                FROM Admin
                WHERE AdminID = ?
            ");
            $stmt2->bind_param("i", $userID);
            $stmt2->execute();
            $adminResult = $stmt2->get_result()->fetch_assoc();
            $userDetails = array_merge($userDetails, $adminResult);
            break;
    }

    echo json_encode(["success" => true, "user" => $userDetails]);
} else {
    echo json_encode(["success" => false, "message" => "Invalid username or password"]);
}

$stmt->close();
$conn->close();
?>
