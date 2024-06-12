<?php

include_once('config.php');

if(isset($_POST['submit'])){
    $email = $_POST['email'];
    $senha = $_POST['senha'];

    $result = mysqi_query($conexao, "INSERT INTO usuários(email,senha) VALUES ($email,$senha)");
}

?>