<?php
session_start();
if ($_POST) {
  if (($_POST['user']=="admin") && ($_POST['password']=="reinafoundation")) {
    $_SESSION['user']="admin";
    header("location:main.php");
  }else {
    include 'index.php';
    //echo "<script>alert('USUARIO O CLAVE INCORRECTOS')</script>";  
    echo "<script>swal('USUARIO O CONTRASEÑA INCORRECTOS', 'VUELVE A INTENTARLO', 'error');</script>";
  }
}
?>