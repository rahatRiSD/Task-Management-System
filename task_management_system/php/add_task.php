<?php
include 'db.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $task = $_POST['task'];
    $sql = "INSERT INTO tasks (task) VALUES ('$task')";
    if ($conn->query($sql) === TRUE) {
        echo "Task added successfully";
    } else {
        echo "Error: " . $conn->error;
    }
}

$conn->close();
?>
