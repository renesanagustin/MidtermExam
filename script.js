entry.html

<html>
<head>
    <script src="script.js"></script>
</head>
<body text="red">

  <form action="processEntry.php" method="POST" >
  
   <div>         
    <h4> Email Address  </h4>
    <input type="text" name="email" id="email">   
   </div> 

  <div>
    <h4> Username </h4>
    <input type="text" name="username" id="username"> <br>
    <label id="usernames"> </label> <br>
   </div>

    <div>
      <h4> Password</h4>  
      <input type="password" name="password" id="password" > <br> 
      <label id="passwords"></label>
   </div>

  <div>
    <h4> Province </h4>
    <select name="province">
        <option value="Albay">Albay</option> 
        <option value="Camarines Sur">Camarines Sur</option> 
        <option value="Camarines Norte">Camarines Norte</option> 
        <option value="Sorsogon">Sorsogon</option> 
        <option value="Masbate">Masbate</option> 
        <option value="Catanduanes">Catanduanes</option> 
    </select>
  </div>
     <br><br>

    <div>
      <button  onclick="check()" type="submit" id="btn_disable">Submit</button>  
    </div>
    
  </form>
    
</body>
</html> 



processEntry.php

<?php

    $email = $_POST["email"];
    $username = $_POST["username"];
    $province = $_POST["province"];
 
    echo "Your Email Address is    " .$email . " Username is   "   .$username    ." from  "   .$province ; 
   
?>  


script.js

function check()
{
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
   
    if (username.length < 4)
    {
        document.getElementById("usernames").innerHTML = "Username must be at least 4 char";
        document.getElementById("btn_disable").disabled = true;
        
    } else if (username.length > 12)
    {
        document.getElementById("usernames").innerHTML = "Username must be at least 12 char";
        document.getElementById("btn_disable").disabled = true;
       
    }
   


    if (password.length < 8) {

    document.getElementById("passwords").innerHTML = "Password must be at least 8 char";
    document.getElementById("btn_disable").disabled = true;
                
    } else if (password.length > 20) {
        
    document.getElementById("passwords").innerHTML = "Username must be at least 20 char";
    document.getElementById("btn_disable").disabled = true;         
    }
        

} ;



