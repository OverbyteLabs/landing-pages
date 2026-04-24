<?php
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);

    $name = trim($data['name'] ?? '');
    $email = trim($data['email'] ?? '');
    $company = trim($data['company'] ?? '');
    $message = trim($data['message'] ?? '');

    $errors = [];

    if (empty($name)) {
        $errors[] = 'Name is required';
    }

    if (empty($email)) {
        $errors[] = 'Email is required';
    } elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $errors[] = 'Invalid email format';
    }

    if (empty($message)) {
        $errors[] = 'Message is required';
    }

    if (!empty($errors)) {
        echo json_encode(['ok' => false, 'error' => implode(', ', $errors)]);
        exit;
    }

    $to = 'info@overbytelabs.com';
    $subject = "New contact from $name" . ($company ? " at $company" : '');
    $body = "Name: $name\nEmail: $email\nCompany: $company\n\nMessage:\n$message";

    $headers = [
        'From' => $email,
        'Reply-To' => $email,
        'Content-Type' => 'text/plain; charset=UTF-8'
    ];

    $mailSent = mail($to, $subject, $body, $headers);

    if ($mailSent) {
        echo json_encode(['ok' => true]);
    } else {
        echo json_encode(['ok' => false, 'error' => 'Failed to send email']);
    }
} else {
    echo json_encode(['ok' => false, 'error' => 'Method not allowed']);
}
