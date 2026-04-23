<?php
header('Content-Type: application/json');
header('X-Content-Type-Options: nosniff');

// Only accept POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['ok' => false, 'error' => 'Method not allowed']);
    exit;
}

// Parse JSON body
$input = json_decode(file_get_contents('php://input'), true);
if (!$input) {
    http_response_code(400);
    echo json_encode(['ok' => false, 'error' => 'Invalid request']);
    exit;
}

// Sanitize inputs
$name    = htmlspecialchars(strip_tags(trim($input['name']    ?? '')), ENT_QUOTES, 'UTF-8');
$email   = filter_var(trim($input['email']   ?? ''), FILTER_SANITIZE_EMAIL);
$company = htmlspecialchars(strip_tags(trim($input['company'] ?? '')), ENT_QUOTES, 'UTF-8');
$message = htmlspecialchars(strip_tags(trim($input['message'] ?? '')), ENT_QUOTES, 'UTF-8');

// Validate
if (!$name || !$email || !$company || !$message) {
    http_response_code(400);
    echo json_encode(['ok' => false, 'error' => 'All fields are required']);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['ok' => false, 'error' => 'Invalid email address']);
    exit;
}

// Prevent header injection
if (preg_match('/[\r\n]/', $name . $email . $company)) {
    http_response_code(400);
    echo json_encode(['ok' => false, 'error' => 'Invalid input']);
    exit;
}

$to      = 'info@overbytelabs.com';
$subject = "SovereignLLM Enquiry from $name ($company)";
$body    = "Name:    $name\nEmail:   $email\nCompany: $company\n\nMessage:\n$message";
$headers = implode("\r\n", [
    "From: noreply@overbytelabs.com",
    "Reply-To: $email",
    "MIME-Version: 1.0",
    "Content-Type: text/plain; charset=UTF-8",
    "X-Mailer: PHP/" . phpversion(),
]);

$sent = mail($to, $subject, $body, $headers);

if ($sent) {
    echo json_encode(['ok' => true]);
} else {
    http_response_code(500);
    echo json_encode(['ok' => false, 'error' => 'Failed to send email. Please try again.']);
}
