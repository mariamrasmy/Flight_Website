<?php
    $Name=$_REQUEST['Name'];
    $Address=$_REQUEST['Address'];
    $Email=$_REQUEST['Email'];
    $Phone_Number=$_REQUEST['Phone_Number'];
    $Message=$_REQUEST['Message'];
    
if(isset($_POST['btntest'])){
    $host="localhost";
    $user ="root";
    $password ="";
    $db ="login_form";
    @$connection = mysqli_connect($host, $user, $password, $db);
    $insert = "insert into student values('$Name', '$Address', '$Email', '$Phone_Number', '$Message')";
    
    mysqli_query($connection,$insert);

    if($connection){
        echo("<h1 style='color:green;'>Your Registration is Done!</h1>");
    }
    else{
        echo("<h1 style='color:red;'>Your Registration is Failed!</h1>");
    }
}
?>