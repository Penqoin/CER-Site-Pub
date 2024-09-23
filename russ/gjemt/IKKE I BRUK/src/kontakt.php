<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    // Set recipient email address
    $to = 'russ@cer06.no';

    // Set email subject
    $subject = 'Henvendelse fra:' . $name . ' - ' . $email;

    // Compose email body
    $body = "Navn: $name\n" .
            "Epost-addresse: $email\n" .
            "Melding:\n$message";

    // Set additional headers
    $headers = "From: $name <russ@cer06.no>\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    // Send email
    if (mail($to, $subject, $body, $headers)) {
        // If email is sent successfully
        echo json_encode(array('success' => true, 'message' => 'Takk for henvendelsen din! En epost er sendt til oss og vi vil svare straks!'));
    } else {
        // If there was an error sending the email
        echo json_encode(array('success' => false, 'message' => 'Det skjedde en feil ved å sende eposten, vennligst prøv igjen senere. (Indre feil)'));
    }
} else {
    // If the form is not submitted
    echo json_encode(array('success' => false, 'message' => 'Det skjedde en feil ved å sende eposten, vennligst prøv igjen senere. (Øvre feil)'));
}
?>
