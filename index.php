<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, user-scalable=no,
    initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <title>:::LOG IN:::</title>
     <link rel="stylesheet" href="style_login.css">
     <script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>
    
</head>
<body style = "backgroung-image: url(img/fondo_main.jpg);">
    

    <form action = "validar.php" method = "post" class="login">
    <img src="img/foundation.png" alt="" id=logo>
        
        <div class="form-group">
            <br>
            <b><label><i class="fas fa-user" ></i>  USUARIO</label></b>
            <br>
            <input type = "text" placeholder = "ingrese su usuario" name = "user" >
        </div>
        <br>
        <div class="form-group">
            <b><label><i class="fas fa-key"></i>  CONTRASEÑA</label></b>
            <input type = "password" placeholder = "ingrese su contraseña" name = "password" >
        </div>
        <br>
        <input type = "submit" value = "Ingresar" >

        </body>

        <script src="fun_login.js"></script>
     <script src="https://kit.fontawesome.com/71f7880740.js" crossorigin="anonymous"></script>


</html>