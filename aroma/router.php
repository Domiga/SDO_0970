<?php


$url = explode("/", $_SERVER['REQUEST_URI']);

$content = file_get_contents("pages/index.php");
require_once("template.php");

// if ($url[1] == blog) {
//   require_once("blog.html");
// } else if ($url[1] == auth) {
//   require_once("login.php");
// }








// for ($i = 0; $i < count($url); $i++) {
//   echo $url[$i]."<hr>";
// }
