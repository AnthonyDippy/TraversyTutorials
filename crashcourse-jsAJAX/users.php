<?php

// Create connection
$conn = mysqli_connect('localhost', 'root', '123456', 'ajaxtest');

// Select all from users table
$query = 'SELECT * FROM users';

// Get result
$result = mysqli_query($conn, $query);

// Fetch data
$users = mysqli_fetch_all($result, MYSQLI_ASSOC);

echo json_encode($users);