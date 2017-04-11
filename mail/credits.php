<?php
// Check for empty fields
if(empty($_POST['nameModal'])      ||
   empty($_POST['emailModal'])     ||
   empty($_POST['phoneModal'])     ||
   empty($_POST['creditModal'])   ||
   empty($_POST['sumPay'])   ||
   empty($_POST['myMoney'])   ||
   !filter_var($_POST['emailModal'],FILTER_VALIDATE_EMAIL))
   {
   echo "No arguments Provided!";
   return false;
   }
   
$name = strip_tags(htmlspecialchars($_POST['nameModal']));
$email_address = strip_tags(htmlspecialchars($_POST['emailModal']));
$phone = strip_tags(htmlspecialchars($_POST['phoneModal']));
$credit = strip_tags(htmlspecialchars($_POST['creditModal']));
$sumPay = strip_tags(htmlspecialchars($_POST['sumPay']));
$myMoney = strip_tags(htmlspecialchars($_POST['myMoney']));
$message = strip_tags(htmlspecialchars($_POST['messageModal']));
   
// Create the email and send the message
$to = 'infoGroshi@yandex.ru'; // Add your email address inbetween the '' replacing yourname@yourdomain.com - This is where the form will send a message to.
$email_subject = "Website Contact Form:  $name";
$email_body =
    "У вас новый запрос на получение кредита.\n\n".
    "Детали сообщения:\n\nФИО: $name\n\ne-mail: $email_address\n\nНомер телефона: $phone\n\nCумма ЗП: $myMoney\n\nCумма Выплат в месяц: $sumPay\n\nCумма кредита: $credit\n\nДетали сообщения:\n$message";
$headers = "From: noreply@yourdomain.com\n"; // This is the email address the generated message will be from. We recommend using something like noreply@yourdomain.com.
$headers .= "Reply-To: $email_address";   
mail($to,$email_subject,$email_body,$headers);
return true;         
?>
