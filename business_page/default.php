<?php
declare(strict_types=1);
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['ok' => false, 'error' => 'Method not allowed']);
    exit;
}

$body = file_get_contents('php://input');
if ($body === false || $body === '') {
    http_response_code(400);
    echo json_encode(['ok' => false, 'error' => 'Empty request body']);
    exit;
}

$data = json_decode($body, true);
if (!is_array($data)) {
    http_response_code(400);
    echo json_encode(['ok' => false, 'error' => 'Invalid JSON']);
    exit;
}

$name    = isset($data['name'])    ? trim((string) $data['name'])    : '';
$email   = isset($data['email'])   ? trim((string) $data['email'])   : '';
$company = isset($data['company']) ? trim((string) $data['company']) : '';
$message = isset($data['message']) ? trim((string) $data['message']) : '';

if ($name === '' || $email === '' || $company === '' || $message === '') {
    http_response_code(422);
    echo json_encode(['ok' => false, 'error' => 'All fields are required']);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(422);
    echo json_encode(['ok' => false, 'error' => 'Invalid email address']);
    exit;
}

// Prevent header injection
$name    = preg_replace('/[\r\n]/', ' ', $name);
$company = preg_replace('/[\r\n]/', ' ', $company);
$email   = filter_var($email, FILTER_SANITIZE_EMAIL);

$to      = 'info@overbytelabs.com';
$subject = 'Overbite enquiry from ' . $name;

$body_text  = "Name:    {$name}\n";
$body_text .= "Email:   {$email}\n";
$body_text .= "Company: {$company}\n\n";
$body_text .= "Message:\n{$message}\n";

$headers  = "From: noreply@overbytelabs.com\r\n";
$headers .= "Reply-To: {$email}\r\n";
$headers .= "X-Mailer: PHP/" . phpversion() . "\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

$sent = mail($to, $subject, $body_text, $headers);

if ($sent) {
    echo json_encode(['ok' => true]);
} else {
    http_response_code(500);
    echo json_encode(['ok' => false, 'error' => 'Failed to send message. Please try again later.']);
}