<?php
// Comprueba los inputs vacíos
if(empty($_POST['name'])      ||
   empty($_POST['email'])     ||
   empty($_POST['message'])   ||
   empty($_POST['curriculum'])   ||
   !filter_var($_POST['email'],FILTER_VALIDATE_EMAIL))
   {
   echo "No arguments Provided!";
   return false;
   }

$name = strip_tags(htmlspecialchars($_POST['name']));
$email_address = strip_tags(htmlspecialchars($_POST['email']));
$phone = strip_tags(htmlspecialchars($_POST['phone']));
$curriculum = strip_tags(htmlspecialchars($_POST['curriculum']));
$message = strip_tags(htmlspecialchars($_POST['message']));

// Crea el email y envía el mensaje
$to = 'inscripciones@pabloprieto.es';
$email_subject = "Website Contact Form:  $name";
$email_body = "You have received a new message from your website contact form.\n\n"."Here are the details:\n\nName: $name\n\nEmail: $email_address\n\nPhone: $phone\n\nMessage:\n$message\n\Curriculum:\n$curriculum";
$headers = "From: info@pabloprieto.es\n";
$headers .= "Reply-To: $email_address";
mail($to,$email_subject,$email_body,$headers);
return true;
?>
