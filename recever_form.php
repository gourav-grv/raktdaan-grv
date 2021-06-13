<?php
  require 'dbconnection.php';

  // $_SERVER['REQUEST_METHOD'] == 'POST'
// isset($_POST['submit'])

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $mobile = $_POST['number'];
    $bloodgroup = $_POST['Blood-group'];
    
    try {
      if ($_POST['money']==NULL) {
        $money = '';
      }
      else{
        $money = $_POST['money'];
      }
    } catch (Exception $e) {
      echo'handle';
    }
    
  
      if (strlen($name)<= 3) {
          echo '<div class="alert alert-danger alert-dismissible fade show" role="alert">
         <strong>Incorrect Name </strong> Please Enter A Valid Name............
         <button type="button" class="close" data-dismiss="alert" aria-label="Close">
           <span aria-hidden="true">&times;</span>
         </button>
       </div>';
  
      }
     
      if (strlen($email)<= 5) {
        echo '<div class="alert alert-danger alert-dismissible fade show" role="alert">
        <strong>Incorrect Email</strong> Please Enter A Valid Email............
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>';
  
      }
      // mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  
      // if (!email.match(mailformat)) {
      //     alert("Please Enter Valid Email");
      //     return false;
  
  
      // }
      if (strlen($mobile) != 10) {
         echo '<div class="alert alert-danger alert-dismissible fade show" role="alert">
         <strong>Incorrect Mobile No.</strong> Please Enter A Valid Mobile No............
         <button type="button" class="close" data-dismiss="alert" aria-label="Close">
           <span aria-hidden="true">&times;</span>
         </button>
       </div>';
  
      }
      else {
  
        $sql = "INSERT INTO `recever` (`name`, `email`, `mobile`, `blood group`, `money`, `date`) 
        VALUES ('$name', '$email', '$mobile', '$bloodgroup', '$money', current_timestamp());";
  
        $result = mysqli_query($connection, $sql);
        $connection->close();
  
        echo '<div class="alert alert-success alert-dismissible fade show" role="alert">
        <strong>Successful </strong> Your Form Is Successfully Submited............
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>';
          
      }
  
    
  
    
    
  }
  
  ?>