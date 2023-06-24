<?php
session_start();
error_reporting(0);
$varsesion=$_SESSION['user'];
if ($varsesion==null || $varsesion='') {
  header("location:login.php");
  die();
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>::WELCOME::</title>
</head>
<body>
  <br>
  <br>
<center>
    <h1>¡¡¡ BIENVENIDO !!!</h1>

  
<a href="cerrar_sesion.php">CERRAR SESION</a>

</center>

</body>
</html>