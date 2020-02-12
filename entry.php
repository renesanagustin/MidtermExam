<?php

$host = "localhost";
$user = "root";
$password = "";
$db="gatekeeper";

mysql_conntect($host,$user,$password);
mysql_select_db($db);

if(isset($_POST['uname'])){
	$username=$_POST['uname'];
	$password=$_POST['psw'];

	$sql="select * from account where username = '"$username"' AND password='"$password"' limit 1";
	$result=mysql_query($sql);

	if(mysql_num_rows($result)==1){
		echo "You Have successfully Logged In";
		exit();

	}
	else{
		echo " You Have Entered Incorrected Username and Password";
		exit();
	}
}

?>
<!DOCTYPE html>
<html>
 <link href="design.css" rel="stylesheet">
<head>
    <script src="script.js"></script>
</head>
<body text="red">

  <form action="processEntry.php" method="POST" >


  <div class="container">

    <label for="uname"><b>Username</b></label>
    <input type="text" placeholder="Enter Username" name="uname" required>

    <label for="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="psw" required>

    <button type="submit">Login</button>

  </div>


</form>
    
  </form>
    
</body>
</html> 
