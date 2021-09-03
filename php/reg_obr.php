<?php
header('Content-Type: text/html; charset=utf-8');

$mysqli = mysqli_connect("localhost", "napli_0970", "12345", "napli_0970");
if ($mysqli == false) {
  print("error");
}
// else {
//   print("Соединение установлено успешно");
// }
// echo "<hr>";
$name = $_POST['name'];
$lastname = $_POST['lastname'];
$email = $_POST['email'];
$pass = $_POST['pass'];

$result = $mysqli->query("SELECT * FROM `users` WHERE `email` = '$email'");
//var_dump($result->num_rows);
if($result->num_rows != 0) {
print("exist");
}else{
  $mysqli->query("INSERT INTO `users`(`name`, `lastname`, `email`, `pass`) VALUES ('$name', '$lastname', '$email','$pass')");
  print("ok");
}



// echo "<hr>Имя: $name<br>
// Фамилия: $lastname<br>
// Email: $email<br>
// Пароль: $pass";
