<?php
header('Content-Type: text/html; charset=utf-8');

$mysqli = mysqli_connect("localhost", "napli_0970", "12345", "napli_0970");
if ($mysqli == false) {
  print("error");
} else {
  $email = trim(mb_strtolower($_POST['email']));
  $pass = trim($_POST['pass']);

  $result = $mysqli->query("SELECT * FROM `users` WHERE `email` = '$email'");
  $result = $result->fetch_assoc();

  //var_dump($result["pass"]);

  if (password_verify($pass, $result["pass"])) {
    echo "ok";
  } else {
    echo "user_not_found";
  }


  // if ($result->num_rows == 0) {
  //   echo "Пользователя нет";
  // }else {
  //   echo "Авторизован";
  // }

}
