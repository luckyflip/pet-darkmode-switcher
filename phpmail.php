<!-- Это обработчик формы -->

<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (isset($_POST['formData'])) {$formData = $_POST['formData'];}
    if (isset($_POST['name'])) {$name = $_POST['name'];}
    if (isset($_POST['email'])) {$email = $_POST['email'];}
    if (isset($_POST['phone'])) {$phone = $_POST['phone'];}
    $url = $_SERVER['HTTP_REFERER'];
    $to = 'email'; /*Укажите ваш адрес электронной почты*/
    $headers = "From: moni@mail.ru";
    $subject = "Заявка";
    $message = "$formData\n\nИмя: $name \n\nEmail: $email \n\nТелефон: $phone \n\n";
    $send = mail ($to, $subject, $message, $headers);
    if ($send == 'true')
    {
    echo "<center>Спасибо за отправку вашего сообщения! Наши специалисты свяжутся с вами в течение часа.</center>";
    }
    else
    {
    echo "<center><b>Ошибка. Сообщение не отправлено! Проверьте правильность введенных данных</b></center>";
    }
} else {
    http_response_code(403);
    echo "Попробуйте еще раз";
}
?>