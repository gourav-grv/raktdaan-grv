<?php

$servername = "localhost";
$username = "root";
$password = "";
$databse = "grv";

$connection = mysqli_connect($servername , $username , $password, $databse);
if(!$connection){
    die("Connection was denied due to".mysqli_connect_error());
}

?>