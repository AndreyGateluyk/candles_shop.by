<?php 

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'phpmailer/src/Exception.php';
require 'phpmailer/src/PHPMailer.php';

$mail = new PHPMailer(true);
$mail->CharSet = 'utf-8';
$mail->setLanguage('ru', 'phpmailer/language/');
$mail->IsHTML(true);

$mail->sefForm('zakaz_by@mail.ru');
$mail->addAddress('candlesshop.by@mail.ru');
$mail->Subject = 'Новый заказ';

$body = '<h1>Поступил новый заказ</h1>';

if(trim(!empty($_POST['name']))) {
  $body.= '<p><strong>Имя:</strong> '.$_POST['name'].'</p>'
}
if(trim(!empty($_POST['tel']))) {
  $body.= '<p><strong>Телефон:</strong> '.$_POST['tel'].'</p>'
}

$mail->Body = $body

?>