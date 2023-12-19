<?php 
    $name = $_POST['name'];
    $phone = $_POST['phone'];
    $message = "Свяжитесь со мной, $name, $phone";
    $to = 'ilyakhlamov@.ru'; 
    $subject = "Письмо с сайта";
    $headers="From: $to \nReply-to: $name \nContent-Type: text/html; charset=\"utf-8\"\n"; 
    
    
    
    if(mail( $subject, $to, $message)) {
        echo "Спасибо, $name, мы свяжемся с вами в самое ближайшее время!"; 
    } else {
        echo "Сообщение не отправлено!"; 
    }

// $mailTo, $subject, $headers
// $to, $subject, $message, $headers
?>